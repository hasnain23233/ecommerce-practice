// ---------------------------------------------------------------
// Vercel serverless function: POST /api/checkout
// Creates a Stripe Checkout Session (TEST mode) from the cart items.
//
// Env var required for real Stripe flow (Vercel → Settings → Env Vars):
//   STRIPE_SECRET_KEY = sk_test_...   (test key — never the live key)
//
// Without the key the endpoint returns { demo: true } and the
// frontend simulates a successful order — so the public demo
// works with zero configuration and zero cost.
// ---------------------------------------------------------------
import Stripe from 'stripe'

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    const items = Array.isArray(req.body?.items) ? req.body.items : []
    if (items.length === 0) {
        return res.status(400).json({ error: 'Cart is empty' })
    }

    // No key configured → tell the frontend to run the demo flow
    if (!process.env.STRIPE_SECRET_KEY) {
        return res.status(200).json({ demo: true })
    }

    try {
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
        const origin = req.headers.origin || `https://${req.headers.host}`

        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            line_items: items.slice(0, 50).map(item => ({
                quantity: Math.min(Math.max(1, parseInt(item.qty) || 1), 99),
                price_data: {
                    currency: 'usd',
                    unit_amount: Math.round(Number(item.price) * 100), // dollars → cents
                    product_data: {
                        name: String(item.title).slice(0, 120),
                        images: item.image ? [item.image] : [],
                    },
                },
            })),
            success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/cancel`,
        })

        return res.status(200).json({ url: session.url })
    } catch (err) {
        console.error('Stripe error:', err.message)
        return res.status(500).json({ error: 'Could not create checkout session' })
    }
}
