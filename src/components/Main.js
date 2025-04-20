import Image from "next/image";
import Link from "next/link";

import { Button } from "@nextui-org/react";

import iconCheckmark from "/public/icon-checkmark.svg";
import diagonal from "/public/diagonal.png";
import fog1 from "/public/fog1.png";

export default function Main() {
    return (
        <section className="grid grid-cols-2 py-10 XL:py-6 MD:grid-cols-1 MD:pt-8 MD:pb-10">
            <div className="flex flex-col justify-center LG:mx-auto">
                <span className="bg-surface/accent bg-clip-text text-transparent">
                    <h1
                        className={`font-medium text-[68px] leading-[80px] max-w-[580px] tracking-tighter text- XL:text-[64px] LG:text-5xl LG:leading-[3.5rem] MD:text-center MD:text-4xl 1.5SM:text-[32px] 1.5SM:leading-[130%] XXSM:text-2xl`}
                    >
                        AI-сотрудники, <br className="" />
                        которые работают
                    </h1>
                </span>
                <p className="text-[#9594a7] mt-10 mb-[76px] max-w-[360px] XL:mt-8 XL:mb-12 XL:text-[15px] LG:text-base LG:mt-6 LG:mb-8 MD:max-w-none MD:text-center 1.5SM:leading-5">
                    Самый простой способ создать AI-сотрудника, <br className="1.5SM:hidden" />
                    который генерит лиды, общается c клиентом и закрывает сделки.
                </p>
                <div className="flex gap-6 items-center LG:gap-3 MD:mx-auto 1.5SM:flex-col 1.5SM:gap-8">
                    <Link
                        href="https://t.me/CEOBRAT"
                        target="_blank"
                        className="h-[52px] XL:h-12 LG:h-10 1.5SM:h-[52px] "
                    >
                        <Button
                            className="bg-surface/accent text-white text-[18px] XL:text-base LG:text-sm 1.5SM:text-[18px] w-full h-full px-8"
                            radius="lg"
                        >
                            Начать
                        </Button>
                    </Link>

                    <div className="flex gap-5 font-medium XL:text-base XL:gap-3 MD:gap-5 LG:text-sm 1.5SM:gap-4">
                        <div className="flex gap-2 items-center LG:gap-0">
                            <Image src={iconCheckmark} alt="checkmark" />
                            <p className="">Агенты</p>
                        </div>
                        <div className="flex gap-2 items-center LG:gap-0">
                            <Image src={iconCheckmark} alt="checkmark" />
                            <p className="">Боты</p>
                        </div>
                        <div className="flex gap-2 items-center LG:gap-0">
                            <Image src={iconCheckmark} alt="checkmark" />
                            <p className="">Плагины</p>
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
