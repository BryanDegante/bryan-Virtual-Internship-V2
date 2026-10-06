'use client';

import { useState } from "react";
import PlanButton from "./PlanButton";

export default function SelectedPlan() {
    const [selectedPlan, setSelectedPlan] = useState('yearly')
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
		</>
	);
}
