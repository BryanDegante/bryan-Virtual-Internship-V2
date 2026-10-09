import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { stripe } from '@/lib/stripe';
import { adminDb } from '@/firebase/firebase-admin';

export async function POST(request: Request) {
	const body = await request.text();
	const signature = request.headers.get('stripe-signature');

	if (!signature) {
		return NextResponse.json(
			{ error: 'Missing stripe signature' },
			{ status: 400 },
		);
	}

	try {
		const event = stripe.webhooks.constructEvent(
			body,
			signature,
			process.env.STRIPE_WEBHOOK_SECRET!,
		);

		switch (event.type) {
			case 'customer.subscription.created':
			case 'customer.subscription.updated':
			case 'customer.subscription.deleted': {
				const subscription = event.data.object as Stripe.Subscription;

				const firebaseUid = subscription.metadata.firebaseUid;
				const plan = subscription.metadata.plan;

				if (!firebaseUid) {
					console.error(
						'No Firebase UID found in subscription metadata',
					);
					break;
				}

				await adminDb
					.collection('users')
					.doc(firebaseUid)
					.set(
						{
							subscription: {
								status: subscription.status,
								plan,
								stripeSubscriptionId: subscription.id,
								stripeCustomerId: subscription.customer,
								cancelAtPeriodEnd:
									subscription.cancel_at_period_end,
							
							},
						},
						{ merge: true },
					);

			

				break;
			}

			case 'checkout.session.completed': {
				const session = event.data.object as Stripe.Checkout.Session;

				

				break;
			}

			
		}

		return NextResponse.json({ received: true });
	} catch (error) {
		console.error('Webhook error:', error);

		return NextResponse.json({ error: 'Webhook error' }, { status: 400 });
	}
}
