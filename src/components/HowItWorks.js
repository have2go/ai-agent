import Image from "next/image";

import iconOne from "/public/icon-one.svg";
import iconTwo from "/public/icon-two.svg";
import iconThree from "/public/icon-three.svg";
import phone2 from "/public/phone2.png";
import fog2 from "/public/fog2.png";

export default function HowItWorks() {
    return (
        <section className="py-[146px] flex flex-col gap-20 XL:gap-16 XL:py-20 LG:py-12 LG:gap-12 MD:py-6 MD:gap-6">
            <h2 className="text-[75px] mx-auto w-fit font-medium XL:text-[64px] LG:text-6xl MD:text-4xl 1.5SM:text-[32px]">
                How AI Agent works?
            </h2>
            <div className="grid grid-cols-2 grid-rows-3 gap-[28px] LG:gap-4 MD:grid-cols-1 ">
                <div className="p-[48px] bg-white rounded-2xl flex gap-8 items-start XL:p-8 LG:gap-4 LG:p-4 1.5SM:flex-col 1.5SM:p-8">
                    <Image src={iconOne} alt="first" />
                    <div className="flex flex-col gap-3">
                        <h5 className="text-[32px] font-medium XL:text-3xl LG:text-2xl 1.5SM:text-[26px]">Scope</h5>
                        <p className="LG:text-sm 1.5SM:text-base">
                            Together we define your business objectives and scope out the best Intelligent Agent
                            deliverables.
                        </p>
                    </div>
                </div>
                <div className="p-[48px] bg-white rounded-2xl flex gap-8 items-start XL:p-8 LG:gap-4 LG:p-4 1.5SM:flex-col 1.5SM:p-8">
                    <Image src={iconTwo} alt="second" />
                    <div className="flex flex-col gap-3">
                        <h5 className="text-[32px] font-medium XL:text-3xl LG:text-2xl 1.5SM:text-[26px]">Create</h5>
                        <p className="LG:text-sm 1.5SM:text-base">
                            We train your own AI Agent based on your Knowledge Base (Confluence, Jira, CRM, Messengers)
                            and even style of communication.
                        </p>
                    </div>
                </div>
                <div className="p-[48px] bg-white rounded-2xl flex gap-8 items-start XL:p-8 LG:gap-4 LG:p-4 1.5SM:flex-col 1.5SM:p-8">
                    <Image src={iconThree} alt="third" />
                    <div className="flex flex-col gap-3">
                        <h5 className="text-[32px] font-medium XL:text-3xl LG:text-2xl 1.5SM:text-[26px]">Implement</h5>
                        <p className="LG:text-sm 1.5SM:text-base">
                            We seamlessly integrate your AI Agent with your current corporate web pages, mobile apps,
                            online chat to supercharge your business process.
                        </p>
                    </div>
                </div>
                <div className="bg-white row-start-1 row-end-4 col-start-2 rounded-2xl relative flex justify-center items-end MD:row-start-auto MD:row-end-auto MD:col-start-1">
                    <div className="z-50 relative pb-16 XL:pb-8 LG:pb-4">
                        <Image src={phone2} alt="" className="LG:max-w-72" />
                    </div>

                    <Image src={fog2} alt="" className="absolute bottom-0 left-0 rounded-b-2xl w-full z-40" />
                </div>
            </div>
        </section>
    );
}
