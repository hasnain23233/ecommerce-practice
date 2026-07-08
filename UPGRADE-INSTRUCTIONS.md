# ShopNexa Cart + Stripe Checkout Upgrade

Drop-in upgrade for `hasnain23233/ecommerce-practice`. Adds a full cart system and Stripe test checkout. Verified to build against the current repo.

## What's included

**New files (5):**

| File | Purpose |
|------|---------|
| `src/assets/Context/CartContext.jsx` | Cart state: add/remove/qty/total, localStorage persistence, drawer open state |
| `src/assets/Components/CartDrawer.jsx` | Slide-over cart UI with quantity controls and Secure Checkout button |
| `src/assets/Components/CheckoutResult.jsx` | Success and Cancel pages after checkout |
| `api/checkout.js` | Vercel serverless function — creates a Stripe Checkout Session (test mode) |
| `UPGRADE-INSTRUCTIONS.md` | This file (don't commit) |

**Replaced files (6):**

| File | Change |
|------|--------|
| `src/App.jsx` | Wraps app in `CartProvider` |
| `src/assets/FullWebsite.jsx` | Adds `/success` + `/cancel` routes and renders `CartDrawer` |
| `src/assets/Navbar.jsx` | Cart icon with live item-count badge |
| `src/assets/Components/Product.jsx` | "Add to Cart" button on every product card |
| `src/assets/Components/ProductDetails.jsx` | "Buy Now" → "Add to Cart" |
| `package.json` | Adds `stripe` dependency |

## How to apply

1. Copy everything in this folder (except this file) over your local `ecommerce-practice` clone, keeping the folder structure. Say yes to overwriting the 6 files.
2. ```bash
   npm install
   npm run dev
   ```
3. Test locally: add products to cart → open cart from navbar icon → change quantities → click Secure Checkout. Locally it uses the demo flow (there's no `/api` under `vite dev`) and shows the success page.
4. Commit and push:
   ```bash
   git add .
   git commit -m "Add cart system and Stripe test checkout"
   git push
   ```

## Enable real Stripe test payments (on Vercel)

1. Deploy the repo on Vercel (the `api/` folder becomes a serverless function automatically).
2. Create a free Stripe account → Developers → API keys → copy the **test** secret key (`sk_test_...`).
3. Vercel → Project → Settings → Environment Variables → add `STRIPE_SECRET_KEY` = `sk_test_...` → redeploy.
4. On the live site, checkout now redirects to Stripe's hosted payment page. Use Stripe's test card: `4242 4242 4242 4242`, any future date, any CVC.

Without the key, the live site still works — checkout runs in demo mode. Never use a live (`sk_live_`) key on a portfolio demo.

## How it works (know this for client calls)

- **State:** `CartContext` holds items in React state, mirrored to localStorage so the cart survives refresh. `useCart()` hook exposes it anywhere in the tree.
- **Checkout:** frontend POSTs cart items to `/api/checkout`. The serverless function converts them to Stripe `line_items` (price in cents) and creates a Checkout Session; the browser redirects to Stripe's hosted page. Success/cancel URLs point back to your routes.
- **Security:** the secret key lives only in the server environment — the frontend never sees it. Prices are computed server-side into the session, and the demo mode means no key is ever committed to the repo.
