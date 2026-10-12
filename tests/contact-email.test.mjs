import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { createRequire } from "node:module"
import test from "node:test"
import vm from "node:vm"
import ts from "typescript"

const require = createRequire(import.meta.url)
const source = readFileSync(new URL("../app/api/contact-email/route.ts", import.meta.url), "utf8")
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText

function route({ configured = true, verification = { success: true, action: "reveal-email", hostname: "localhost" }, networkError = false } = {}) {
  const module = { exports: {} }
  let calls = 0
  const context = vm.createContext({
    exports: module.exports,
    require: name => name === "@/lib/contact-email" ? { contactEmail: "test@example.com" } : require(name),
    process: { env: configured ? { TURNSTILE_SECRET_KEY: "test-secret", NEXT_PUBLIC_TURNSTILE_SITE_KEY: "test-site" } : {} },
    URL, AbortSignal,
    fetch: async (url, options) => {
      calls++
      assert.equal(url, "https://challenges.cloudflare.com/turnstile/v0/siteverify")
      assert.equal(JSON.parse(options.body).secret, "test-secret")
      if (networkError) throw new Error("Network unavailable")
      return Response.json(verification)
    },
  })
  vm.runInContext(compiled, context)
  return { post: module.exports.POST, calls: () => calls }
}
function request(body, origin = "http://localhost:3000") {
  return new Request("http://localhost:3000/api/contact-email", { method: "POST", headers: { origin, "Content-Type": "application/json" }, body: typeof body === "string" ? body : JSON.stringify(body) })
}

test("missing configuration does not reveal an email", async () => {
  const response = await route({ configured: false }).post(request({ token: "token" }))
  assert.equal(response.status, 503)
  assert.equal((await response.json()).email, undefined)
})
test("cross-origin requests are rejected before verification", async () => {
  const handler = route()
  assert.equal((await handler.post(request({ token: "token" }, "https://other.example"))).status, 403)
  assert.equal(handler.calls(), 0)
})
test("malformed, missing, non-string, and oversized tokens are rejected", async () => {
  for (const body of ["invalid json", {}, { token: "" }, { token: 12 }, { token: "x".repeat(2049) }]) {
    const handler = route()
    const response = await handler.post(request(body))
    assert.equal(response.status, 400)
    assert.equal(handler.calls(), 0)
  }
})
test("failed, expired, replayed, action-mismatched, and hostname-mismatched verification cannot reveal an email", async () => {
  for (const verification of [
    { success: false },
    { success: false, "error-codes": ["timeout-or-duplicate"] },
    { success: true, action: "other", hostname: "localhost" },
    { success: true, action: "reveal-email", hostname: "other.example" },
  ]) {
    const response = await route({ verification }).post(request({ token: "token" }))
    assert.equal(response.status, 403)
    assert.equal((await response.json()).email, undefined)
  }
})
test("valid matching verification returns the email without caching", async () => {
  const handler = route()
  const response = await handler.post(request({ token: "token" }))
  assert.equal(response.status, 200)
  assert.equal(response.headers.get("Cache-Control"), "no-store")
  assert.equal((await response.json()).email, "test@example.com")
  assert.equal(handler.calls(), 1)
})
test("network failures fail closed", async () => {
  const response = await route({ networkError: true }).post(request({ token: "token" }))
  assert.equal(response.status, 502)
  assert.equal((await response.json()).email, undefined)
})
test("Next.js internal localhost URL can serve a same-origin 127.0.0.1 browser request", async () => {
  const handler = route({ verification: { success: true, action: "reveal-email", hostname: "127.0.0.1" } })
  const req = request({ token: "token" }, "http://127.0.0.1:3000")
  req.headers.set("host", "127.0.0.1:3000")
  assert.equal((await handler.post(req)).status, 200)
})
