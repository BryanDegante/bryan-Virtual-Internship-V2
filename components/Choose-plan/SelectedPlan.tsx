'use client';

import { useState } from 'react';
import { auth } from '@/firebase/firebase';
import PlanButton from './PlanButton';

export default function SelectedPlan() {
	const [selectedPlan, setSelectedPlan] = useState<'yearly' | 'monthly'>(
		'yearly',
	);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const handleCheckout = async () => {
		setErrorMessage('');
		setIsLoading(true);

		try {
			const user = auth.currentUser;
			if (!user) {
				throw new Error('Please sign in before starting checkout.');
			}

			const idToken = await user.getIdToken();
			const response = await fetch('/api/checkout', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${idToken}`,
				},
				body: JSON.stringify({ plan: selectedPlan }),
			});
			const data: { url?: string; error?: string } =
				await response.json();

			if (!response.ok || !data.url) {
				throw new Error(data.error || 'Unable to start checkout.');
			}

			window.location.assign(data.url);
		} catch (error) {
			setErrorMessage(
				error instanceof Error
					? error.message
					: 'Unable to start checkout. Please try again.',
			);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<div className="text-[32px] text-text text-center mb-8 font-bold">
				Choose the plan that fits you
			</div>

			<PlanButton
				title="Premium Plus Yearly"
				price="$99.99/year"
				subtitle="7-day free trial included"
				selected={selectedPlan === 'yearly'}
				onClick={() => setSelectedPlan('yearly')}
			/>

			<div className="text-sm text-[#6b757b] flex items-center gap-2 max-w-60 my-6 mx-auto">
				<div className="grow h-px bg-[#bac8ce]" />
				or
				<div className="grow h-px bg-[#bac8ce]" />
			</div>

			<PlanButton
				title="Premium Monthly"
				price="$9.99/month"
				subtitle="No trial included"
				selected={selectedPlan === 'monthly'}
				onClick={() => setSelectedPlan('monthly')}
			/>

			<div className="bg-white sticky bottom-0 z-10 py-8 flex flex-col items-center gap-4">
				<button
					onClick={handleCheckout}
					disabled={isLoading}
					className="bg-[#2bd97c] text-text w-75 h-10 rounded-sm text-base flex items-center justify-center min-w-45 transition-colors duration-200 hover:bg-[#20ba68] cursor-pointer"
				>
					{isLoading
						? 'Redirecting to checkout...'
						: selectedPlan === 'yearly'
						? 'Start your free 7-day trial'
						: 'Start your first month'}
				</button>

				{errorMessage && (
					<p role="alert" className="text-sm text-red-600 text-center">
						{errorMessage}
					</p>
				)}

				<div className="text-[12px] text-[#6b757b] text-center">
					Cancel your trial at any time before it ends, and you won&apos;t
					be charged.
				</div>
			</div>
		</>
	);
}
