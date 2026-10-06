import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(request: Request) {
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
		...(plan === 'yearly' && {
			subscription_data: {
				trial_period_days: 7,
			},
		}),
		success_url: `${process.env.NEXT_PUBLIC_APP_URL}/choose-plan?success=true`,
		cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/choose-plan?canceled=true`,
	});

	return NextResponse.json({ url: session.url });
}
