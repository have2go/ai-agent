import Image from "next/image";

import iconSmile from "/public/icon-smile.svg";
import iconThumb from "/public/icon-thumb.svg";
import iconArrow from "/public/icon-arrow.svg";

import mobIconSmile from "/public/m_icon-smile.svg";
import mobIconThumb from "/public/m_icon-thumb.svg";
import mobIconArrow from "/public/m_icon-arrow.svg";

export default function WhatWeDo() {
    return(
        <section className="py-[106px] flex flex-col gap-20 XL:gap-16 XL:py-20 LG:py-12 LG:gap-12 MD:py-6 MD:gap-6">
                <h2 className="text-[75px] mx-auto w-fit bg-surface/accent bg-clip-text text-transparent font-medium XL:text-[64px] LG:text-6xl MD:text-4xl 1.5SM:text-[32px]">
                    What we do?
                </h2>
                <div className="grid grid-cols-3 gap-8 LG:gap-4 MD:grid-cols-1">
                    <div className="p-12 bg-white rounded-2xl flex flex-col gap-[35px] XL:px-6 XL:py-8 XL:gap-6 LG:gap-4 1.5SM:p-8">
                        <Image src={iconSmile} alt="icon-smile" className="XL:w-14 1.5SM:hidden"/>
                        <Image src={mobIconSmile} alt="icon-smile" className="w-7 1.5sm:hidden"/>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-[26px] font-medium XL:text-2xl LG:text-[18px] 1.5SM:text-[26px]">Autonomous AI partner</h4>
                            <p className="XL:text-[15px] LG:text-sm 1.5SM:text-base">
                                Spawn one or more digital autonomous agents that will work on resolving your problem.
                                Enable them with web access, plugins and more to accomplish any your goal.
                            </p>
                        </div>
                    </div>
                    <div className="p-12 bg-white rounded-2xl flex flex-col gap-[35px] XL:px-6 XL:py-8 XL:gap-6 LG:gap-4">
                        <Image src={iconThumb} alt="icon-thumb" className="XL:w-14 1.5SM:hidden"/>
                        <Image src={mobIconThumb} alt="icon-thumb" className="w-7 1.5sm:hidden"/>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-[26px] font-medium XL:text-2xl LG:text-[18px] 1.5SM:text-[26px]">Get the job done</h4>
                            <p className="XL:text-[15px] LG:text-sm 1.5SM:text-base">
                                You can run as many GPT tasks as you want, all in parallel: write blog posts, review
                                docs, answer customer’s questions, coach them, and even entertain with stories and
                                jokes. No more waiting for one task to be completed before starting the next.
                            </p>
                        </div>
                    </div>
                    <div className="p-12 bg-white rounded-2xl flex flex-col gap-[35px] XL:px-6 XL:py-8 XL:gap-6 LG:gap-4">
                        <Image src={iconArrow} alt="icon-arrow" className="XL:w-14 1.5SM:hidden"/>
                        <Image src={mobIconArrow} alt="icon-arrow" className="w-7 1.5sm:hidden"/>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-[26px] font-medium XL:text-2xl LG:text-[18px] 1.5SM:text-[26px]">Scale team efficiency</h4>
                            <p className="XL:text-[15px] LG:text-sm 1.5SM:text-base">
                                Our AI agent works in tandem with sales reps, support and management teams, utilizing
                                your internal knowledge base to optimize emails, slide decks, business cases and more
                                with hyper-relevant messaging.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
    )
}