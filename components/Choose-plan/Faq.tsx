'use client';

import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export default function Faq() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<div>
			<div className="border-b border-[#ddd] mb-2 overflow-hidden">
				<button
					className="w-full flex justify-between items-center cursor-pointer py-6 gap-2"
					onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
				>
					<div className="font-medium text-2xl text-text text-left">
						How does the free 7-day trial work?
					</div>

					<IoIosArrowDown
						className={`w-6 h-6 min-w-6 transition-transform duration-300 ${
							openIndex === 0 ? 'rotate-180' : ''
						}`}
					/>
				</button>

				<div
					className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
						openIndex === 0 ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
					}`}
				>
					<div className="overflow-hidden">
						<div className="pb-6 text-[#394547] leading-normal">
							Begin your complimentary 7-day trial with a
							Summarist annual membership. You are under no
							obligation to continue your subscription, and you
							will only be billed when the trial period expires.
							With Premium access, you can learn at your own pace
							and as frequently as you desire, and you may
							terminate your subscription prior to the conclusion
							of the 7-day free trial.
						</div>
					</div>
				</div>
			</div>

			<div className="border-b border-[#ddd] mb-2 overflow-hidden">
				<button
					className="w-full flex justify-between items-center cursor-pointer py-6 gap-2"
					onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
				>
					<div className="font-medium text-2xl text-text text-left">
						Can I switch subscriptions from monthly to yearly, or
						yearly to monthly?
					</div>

					<IoIosArrowDown
						className={`w-6 h-6 min-w-6 transition-transform duration-300 ${
							openIndex === 1 ? 'rotate-180' : ''
						}`}
					/>
				</button>

				<div
					className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
						openIndex === 1 ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
					}`}
				>
					<div className="overflow-hidden">
						<div className="pb-6 text-[#394547] leading-normal">
							While an annual plan is active, it is not feasible
							to switch to a monthly plan. However, once the
							current month ends, transitioning from a monthly
							plan to an annual plan is an option.
						</div>
					</div>
				</div>
			</div>

			<div className="border-b border-[#ddd] mb-2 overflow-hidden">
				<button
					className="w-full flex justify-between items-center cursor-pointer py-6 gap-2"
					onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
				>
					<div className="font-medium text-2xl text-text text-left">
						What's included in the Premium plan?
					</div>

					<IoIosArrowDown
						className={`w-6 h-6 min-w-6 transition-transform duration-300 ${
							openIndex === 2 ? 'rotate-180' : ''
						}`}
					/>
				</button>

				<div
					className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
						openIndex === 2 ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
					}`}
				>
					<div className="overflow-hidden">
						<div className="pb-6 text-[#394547] leading-normal">
							Premium membership provides you with the ultimate
							Summarist experience, including unrestricted entry
							to many best-selling books high-quality audio, the
							ability to download titles for offline reading, and
							the option to send your reads to your Kindle.
						</div>
					</div>
				</div>
			</div>

			<div className="border-b border-[#ddd] mb-2 overflow-hidden">
				<button
					className="w-full flex justify-between items-center cursor-pointer py-6 gap-2"
					onClick={() => setOpenIndex(openIndex === 3 ? null : 3)}
				>
					<div className="font-medium text-2xl text-text text-left">
						Can I cancel during my trial or subscription?
					</div>

					<IoIosArrowDown
						className={`w-6 h-6 min-w-6 transition-transform duration-300 ${
							openIndex === 3 ? 'rotate-180' : ''
						}`}
					/>
				</button>

				<div
					className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
						openIndex === 3 ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
					}`}
				>
					<div className="overflow-hidden">
						<div className="pb-6 text-[#394547] leading-normal">
							You will not be charged if you cancel your trial
							before its conclusion. While you will not have
							complete access to the entire Summarist library, you
							can still expand your knowledge with one curated
							book per day.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
