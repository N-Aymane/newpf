# Professional email verification

The professional email is returned only by `POST /api/contact-email` after Cloudflare Turnstile server verification. It is not rendered in the page HTML or passed to a client component. LinkedIn remains available when email verification is unavailable.

## Configure

The “Aymane Portfolio Email” Managed widget has been created with `localhost`, `127.0.0.1`, and `n-aymane.vercel.app` allowed; pre-clearance is disabled. Its real credentials are configured only in the ignored `.env.local` file. The local browser-to-Siteverify flow successfully revealed the professional address.

1. Create a Turnstile widget in the Cloudflare dashboard. Allow your actual portfolio hostname and `localhost` / `127.0.0.1` if you want to review locally.
2. Add these values to the ignored `.env.local` file:

```dotenv
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_public_site_key
TURNSTILE_SECRET_KEY=your_private_secret_key
```

3. Restart the development server after changing environment variables. Configure the same variables on the hosting service when deployment is authorized.

Never share or commit the secret key. Do not use Cloudflare's testing keys for a public deployment.

## Behavior

- The visitor chooses **Reveal professional email**, completes Turnstile, then chooses **Show email address**.
- The server checks the token through Cloudflare Siteverify, including the `reveal-email` action and the current request hostname.
- Invalid, expired, reused, or mismatched tokens are rejected. All API responses use `Cache-Control: no-store`.
- Missing configuration or verification/network errors do not reveal the email. The visitor can retry or use LinkedIn.
- This protects disclosure of the address; it does not filter messages sent to the mailbox after someone has obtained it.

Official references: https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/ and https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
