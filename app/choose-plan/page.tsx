import { IoDocumentTextSharp } from 'react-icons/io5';
import { RiPlantFill } from 'react-icons/ri';
import { FaHandshake } from 'react-icons/fa';
import SelectedPlan from '@/components/Choose-plan/SelectedPlan';
import Faq from '@/components/Choose-plan/Faq';

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
					<SelectedPlan />
					<div className="bg-white sticky bottom-0 z-10 py-8 flex flex-col items-center gap-4">
						<button className="bg-[#2bd97c] text-text w-75 h-10 rounded-sm text-base flex items-center justify-center min-w-45 transition-colors duration-200 hover:bg-[#20ba68] ">
							Start your free 7-day trial
						</button>
						<div className="text-[12px] text-[#6b757b] text-center">
							Cancel your trial at any time before it ends, and
							you won't be charged.
						</div>
					</div>
					<Faq />
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
