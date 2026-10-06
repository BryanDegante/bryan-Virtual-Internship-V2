import { IoDocumentTextSharp } from 'react-icons/io5';
import { RiPlantFill } from 'react-icons/ri';
import { FaHandshake } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';

export default function ChoosePlan() {
	return (
		<div className="w-full">
			<div className="relative text-center w-full pt-12 mb-6">
				<div className="absolute top-0 left-0 -z-10 h-full w-full rounded-bl-[16rem] rounded-br-[16rem] bg-text" />
				<div className="max-w-250 mx-auto text-white px-6">
					<div className="text-5xl font-bold mb-10">
						Get unlimited access to many amazing books to read
					</div>
					<div className="text-xl mb-8">
						Turn ordinary moments into amazing learning
						opportunities
					</div>
					<figure className="flex justify-center max-w-85 mx-auto overflow-hidden rounded-tl-[180px] rounded-tr-[180px]">
						<img src="/assets/pricing-top.png" alt="" />
					</figure>
				</div>
			</div>
			<div className="personal-row">
				<div className="personal-container">
					<div className="grid grid-cols-3 items-center justify-center gap-4 text-center max-w-200 mx-auto mb-14 ">
						<div>
							<figure className="flex justify-center text-text mb-3">
								<IoDocumentTextSharp className="w-15 h-15" />
							</figure>
							<div className="text-[#394547] leading-normal">
								<b>Key ideas in few min </b> with many books to
								read
							</div>
						</div>
						<div>
							<figure className="flex justify-center text-text mb-3">
								<RiPlantFill className="w-15 h-15" />
							</figure>
							<div className="text-[#394547] leading-normal">
								<b>3 million</b> people growing with Summarist
								everyday
							</div>
						</div>
						<div>
							<figure className="flex justify-center text-text mb-3">
								<FaHandshake className="w-15 h-15" />
							</figure>
							<div className="text-[#394547] leading-normal">
								<b>Precise recommendations </b>collection
								curated by experts
							</div>
						</div>
					</div>
					<div className="text-[32px] text-text text-center mb-8 font-bold">
						Choose the plan that fits you
					</div>
					<div className="flex gap-6  p-6 bg-[#f1f6f4] rounded-sm cursor-pointer max-w-170 mx-auto border-4 border-[#bac8ce]">
						<div className="relative w-6 h-6 rounded-[50%] border-2 border-black flex items-center justify-center"></div>
						<div>
							<div className="text-lg font-semibold text-text mb-2">
								Premium Plus Yearly
							</div>
							<div className="text-2xl font-bold text-text mb-2">
								$99.99/year
							</div>
							<div className="text-[#6b757b] text-sm">
								7-day free trial included
							</div>
						</div>
					</div>
					<div className="text-sm text-[#6b757b] flex items-center gap-2 max-w-60 my-6 mx-auto">
						<div className="grow h-px bg-[#bac8ce]" />
						or
						<div className="grow h-px bg-[#bac8ce]" />
					</div>
					<div className="flex gap-6  p-6 bg-[#f1f6f4] rounded-sm cursor-pointer max-w-170 mx-auto border-4 border-[#bac8ce]">
						<div className="relative w-6 h-6 rounded-[50%] border-2 border-black flex items-center justify-center"></div>
						<div>
							<div className="text-lg font-semibold text-text mb-2">
								Premium Monthly
							</div>
							<div className="text-2xl font-bold text-text mb-2">
								$9.99/month
							</div>
							<div className="text-[#6b757b] text-sm">
								No trial included
							</div>
						</div>
					</div>
					<div className="bg-white sticky bottom-0 z-10 py-8 flex flex-col items-center gap-4">
						<button className="bg-[#2bd97c] text-text w-75 h-10 rounded-sm text-base flex items-center justify-center min-w-45 transition-colors duration-200 hover:bg-[#20ba68] ">
							Start your free 7-day trial
						</button>
						<div className="text-[12px] text-[#6b757b] text-center">
							Cancel your trial at any time before it ends, and
							you won't be charged.
						</div>
					</div>
					<div>
						<div className="border-b border-[#ddd] mb-2 overflow-hidden">
							<div className="flex justify-between items-center cursor-pointer py-6 gap-2">
								<div className="font-medium text-2xl relative mb-0 text-text transition-all duration-300">
									How does the free 7-day trial work?{' '}
								</div>
								<IoIosArrowUp className="w-6 h-6 min-w-6 transition-transform duration-300" />
							</div>
							<div className="relative overflow-hidden transition-[height] duration-350 ease-[ease]">
								<div className="min-h-px pb-6 text-[#394547] leading-normal">
									Begin your complimentary 7-day trial with a
									Summarist annual membership. You are under
									no obligation to continue your subscription,
									and you will only be billed when the trial
									period expires. With Premium access, you can
									learn at your own pace and as frequently as
									you desire, and you may terminate your
									subscription prior to the conclusion of the
									7-day free trial.
								</div>
							</div>
						</div>
						<div className="border-b border-[#ddd] mb-2 overflow-hidden">
							<div className="flex justify-between items-center cursor-pointer py-6 gap-2">
								<div className="font-medium text-2xl relative mb-0 text-text transition-all duration-300">
									Can I switch subscriptions from monthly to
									yearly, or yearly to monthly?
								</div>
								<IoIosArrowUp className="w-6 h-6 min-w-6 transition-transform duration-300" />
							</div>
							<div className="relative overflow-hidden transition-[height] duration-350 ease-[ease]">
								<div className="min-h-px pb-6 text-[#394547] leading-normal">
									While an annual plan is active, it is not
									feasible to switch to a monthly plan.
									However, once the current month ends,
									transitioning from a monthly plan to an
									annual plan is an option.
								</div>
							</div>
						</div>
						<div className="border-b border-[#ddd] mb-2 overflow-hidden">
							<div className="flex justify-between items-center cursor-pointer py-6 gap-2">
								<div className="font-medium text-2xl relative mb-0 text-text transition-all duration-300">
									What's included in the Premium plan?
								</div>
								<IoIosArrowUp className="w-6 h-6 min-w-6 transition-transform duration-300" />
							</div>
							<div className="relative overflow-hidden transition-[height] duration-350 ease-[ease]">
								<div className="min-h-px pb-6 text-[#394547] leading-normal">
									Premium membership provides you with the
									ultimate Summarist experience, including
									unrestricted entry to many best-selling
									books high-quality audio, the ability to
									download titles for offline reading, and the
									option to send your reads to your Kindle.
								</div>
							</div>
						</div>
						<div className="border-b border-[#ddd] mb-2 overflow-hidden">
							<div className="flex justify-between items-center cursor-pointer py-6 gap-2">
								<div className="font-medium text-2xl relative mb-0 text-text transition-all duration-300">
									Can I cancel during my trial or
									subscription?
								</div>
								<IoIosArrowUp className="w-6 h-6 min-w-6 transition-transform duration-300" />
							</div>
							<div className="relative overflow-hidden transition-[height] duration-350 ease-[ease]">
								<div className="min-h-px pb-6 text-[#394547] leading-normal">
									You will not be charged if you cancel your
									trial before its conclusion. While you will
									not have complete access to the entire
									Summarist library, you can still expand your
									knowledge with one curated book per day.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className="bg-[#f1f6f4]">
				<div className="personal-container">
					<div className="personal-row">
						<div className="flex justify-between relative text-sm mx-auto mt-8 mb-16">
							<div>
								<div className="font-semibold mb-4 text-lg text-text">
									Actions
								</div>
								<div>
									<div className="text-[#394547] text-sm cursor-not-allowed mb-3 leading-none">
										Summarist Magazine
									</div>
									<div className="text-[#394547] text-sm cursor-not-allowed mb-3 leading-none">
										Cancel Subscription
									</div>
									<div className="text-[#394547] text-sm cursor-not-allowed mb-3 leading-none">
										Help
									</div>
									<div className="text-[#394547] text-sm cursor-not-allowed mb-3 leading-none">
										Contact Us
									</div>
								</div>
							</div>
							<div>
								<div className="font-semibold mb-4 text-lg text-text">
									Useful Links
								</div>
								<div>
									<div className="text-[#394547] text-sm cursor-not-allowed mb-3 leading-none">
										Pricing
									</div>
									<div className="text-[#394547] text-sm cursor-not-allowed mb-3 leading-none">
										Summarist Business
									</div>
									<div className="text-[#394547] text-sm cursor-not-allowed mb-3 leading-none">
										Gift Cards
									</div>
									<div className="text-[#394547] text-sm cursor-not-allowed mb-3 leading-none">
										Authors & Publishers
									</div>
								</div>
							</div>
							<div>
								<div className="font-semibold mb-4 text-lg text-text">
									Company
								</div>
								<div>
									<div className="text-[#394547] text-sm cursor-not-allowed mb-3 leading-none">
										About
									</div>
									<div className="text-[#394547] text-sm cursor-not-allowed mb-3 leading-none">
										Careers
									</div>
									<div className="text-[#394547] text-sm cursor-not-allowed mb-3 leading-none">
										Partners
									</div>
									<div className="text-[#394547] text-sm cursor-not-allowed mb-3 leading-none">
										Code of Conduct
									</div>
								</div>
							</div>
							<div>
								<div className="font-semibold mb-4 text-lg text-text">
									Other
								</div>
								<div>
									<div className="text-[#394547] text-sm cursor-not-allowed mb-3 leading-none">
										Sitemap
									</div>
									<div className="text-[#394547] text-sm cursor-not-allowed mb-3 leading-none">
										Legal Notice
									</div>
									<div className="text-[#394547] text-sm cursor-not-allowed mb-3 leading-none">
										Terms of Service
									</div>
									<div className="text-[#394547] text-sm cursor-not-allowed mb-3 leading-none">
										Privacy Policy
									</div>
								</div>
							</div>
						</div>
						<div className="flex justify-center items-center">
							<div className="text-text font-medium">
								Copyright &copy; 2026 Summarist
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
