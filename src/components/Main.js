import Image from "next/image";

import { Button } from "@nextui-org/react";

import iconCheckmark from "/public/icon-checkmark.svg";
import diagonal from "/public/diagonal.png";
import fog1 from "/public/fog1.png";

export default function Main() {
    return (
        <section className="grid grid-cols-2 py-10 XL:py-6 MD:grid-cols-1 MD:py-10">
            <div className="flex flex-col justify-center LG:mx-auto">
                <h1
                    className={`font-medium text-[75px] leading-[80px] max-w-[580px] tracking-tighter text- XL:text-[64px] LG:text-5xl LG:leading-[3.5rem] MD:text-center MD:text-4xl 1.5SM:text-[32px] 1.5SM:leading-[130%]`}
                >
                    Create your
                    <br className="MD:hidden" />
                    {` `}
                    digital
                    <br className="md:hidden" />
                    {` `}
                    <span className="bg-surface/accent bg-clip-text text-transparent">employee</span>
                </h1>
                <p className="text-[#9594a7] mt-10 mb-[76px] max-w-[360px] XL:mt-8 XL:mb-12 XL:text-[15px] LG:text-sm LG:mt-6 LG:mb-8 MD:max-w-none MD:text-center 1.5SM:text-[18px] 1.5SM:leading-7">
                    Transform your daily work with revolutionary
                    <br className="1.5SM:hidden" />
                    and intuitive AI tools powered by GPT4-Turbo.
                </p>
                <div className="flex gap-6 items-center LG:gap-3 MD:mx-auto 1.5SM:flex-col 1.5SM:gap-8">
                    <Button className="bg-surface/accent text-white h-[52px] text-[18px] max-w-[156px] w-full XL:text-base XL:h-12 XL:max-w-32 LG:text-sm LG:h-10 1.5SM:text-[18px] 1.5SM:max-w-[156px] 1.5SM:h-[52px]" radius="lg">
                        Get Started
                    </Button>
                    <div className="flex gap-5 font-bold XL:text-base XL:gap-3 LG:text-sm 1.5SM:gap-4">
                        <div className="flex gap-2 items-center LG:gap-0">
                            <Image src={iconCheckmark} alt="checkmark" />
                            <p className="">Agents</p>
                        </div>
                        <div className="flex gap-2 items-center LG:gap-0">
                            <Image src={iconCheckmark} alt="checkmark" />
                            <p className="">Plugins</p>
                        </div>
                        <div className="flex gap-2 items-center LG:gap-0">
                            <Image src={iconCheckmark} alt="checkmark" />
                            <p className="">Chats</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative flex justify-center MD:hidden">
                <Image src={diagonal} alt="Possibilities" className="z-20 h-[100%] object-contain XL:h-[95%]" />
                <div className="w-[1000px] absolute -bottom-[350px] -right-72 z-10 XL:-bottom-[450px] XL:-right-96 LG:-bottom-[550px] LG:-right-[450px]">
                    <Image loading="eager" src={fog1} alt="#" className="object-contain" />
                </div>
            </div>
        </section>
    );
}
