import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { adminAuth } from '@/firebase/firebase-admin';

export async function POST(request: Request) {
	try {
		const authorization = request.headers.get('Authorization');

		if (!authorization?.startsWith('Bearer ')) {
			return NextResponse.json(
				{ error: 'Unauthorized' },
				{ status: 401 },
			);
		}

		const idToken = authorization.split('Bearer ')[1];

		const decodedToken = await adminAuth.verifyIdToken(idToken);

		const uid = decodedToken.uid;

		const { plan } = await request.json();

		const priceId =
			plan === 'yearly'
				? process.env.STRIPE_YEARLY_PRICE_ID
				: process.env.STRIPE_MONTHLY_PRICE_ID;

		if (!priceId) {
			return NextResponse.json(
				{ error: 'Price ID not configured' },
				{ status: 500 },
			);
		}

		const session = await stripe.checkout.sessions.create({
			mode: 'subscription',

			line_items: [
				{
					price: priceId,
					quantity: 1,
				},
			],

			subscription_data: {
				metadata: {
					firebaseUid: uid,
					plan,
				},

				...(plan === 'yearly' && {
					trial_period_days: 7,
				}),
			},

			client_reference_id: uid,

			success_url: `${process.env.APP_URL}/settings`,
			cancel_url: `${process.env.APP_URL}/choose-plan?canceled=true`,
		});

		return NextResponse.json({ url: session.url });
	} catch (error) {
		console.error('Checkout error:', error);

		return NextResponse.json(
			{ error: 'Unable to create checkout session' },
			{ status: 500 },
		);
	}
}
