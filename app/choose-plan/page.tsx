import { IoDocumentTextSharp } from 'react-icons/io5';
import { RiPlantFill } from 'react-icons/ri';
import { FaHandshake } from 'react-icons/fa';

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
                        <div className='text-[12px] text-[#6b757b] text-center'>Cancel your trial at any time before it ends, and you won't be charged.</div>
					</div>
				</div>
			</div>
			<section></section>
		</div>
	);
}
