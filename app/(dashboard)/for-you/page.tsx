import Recommended from "@/components/For-You/Recommended/Recommended";
import Selected from "@/components/For-You/Selected/Selected";
import Suggested from "@/components/For-You/Suggested/Suggested";

export default function ForYou() {
    return (
		<div className="personal-row">
			<div className="personal-container">
				<div>
					<div className="text-[22px] font-bold text-text mb-4">Selected just for you</div>
					<Selected />
					<Recommended />
					<Suggested />
				</div>
			</div>
        </div>
    )
}