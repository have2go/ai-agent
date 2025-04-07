import { Button } from "@nextui-org/react";
import Image from "next/image";

import fog4 from "/public/fog4.png";
import fog5 from "../../../public/fog5.png";
import CaseBig from "./components/CaseBig";
import CaseSmall from "./components/CaseSmall";

import { sales } from "../../cases/sales";
import { beauty } from "../../cases/beauty";
import { leads } from "../../cases/leads";

export default function OurWorks() {
    return (
        <main className="max-w-[1228px] flex flex-col gap-[106px] pt-[120px] pb-[146px] mx-auto XL:px-8 XL:py-20 XL:gap-20 LG:px-4 LG:gap-14 1.5SM:py-10">
            <section className=" flex flex-col gap-[106px] XL:gap-20 LG:gap-14 items-center 1.5SM:gap-10">
                <div className="max-w-[610px] w-full flex flex-col gap-10 mx-auto items-center 1.5SM:gap-6">
                    <h1 className="bg-surface/accent bg-clip-text text-transparent font-medium text-[75px] leading-[80px] tracking-tighter XL:text-6xl 1.5SM:text-4xl">
                        Кейсы
                    </h1>
                    <p className="text-center text-[#9594a7] text-base XL:max-w-[500px] tracking-normal">
                        Мы создаем продукты, отражающие компании и наделенные индивидуальностью, позволяющие вашим
                        клиентам эмоционально связываться с вашим брендом.
                    </p>
                </div>
                <div className="flex flex-col gap-[106px] XL:gap-20 items-center LG:hidden">
                    <CaseBig
                        id={sales.id}
                        title={sales.title}
                        text={sales.text}
                        platforms={sales.platforms}
                        fog
                        type="ltr"
                    />
                    <CaseBig
                        id={beauty.id}
                        title={beauty.title}
                        text={beauty.text}
                        platforms={beauty.platforms}
                        type="rtl"
                    />
                    <CaseBig
                        id={leads.id}
                        title={leads.title}
                        text={leads.text}
                        platforms={leads.platforms}
                        type="ltr"
                    />
                </div>
                {/*Mobile*/}
                <div className="lg:hidden grid grid-cols-3 gap-8 LG:gap-4 LG:grid-cols-2 1.5SM:grid-cols-1">
                    <CaseSmall id={sales.id} title={sales.title} text={sales.text} platforms={sales.platforms} />
                    <CaseSmall id={beauty.id} title={beauty.title} text={beauty.text} platforms={beauty.platforms} />
                    <CaseSmall id={leads.id} title={leads.title} text={leads.text} platforms={leads.platforms} />
                </div>
            </section>
            <section className="bg-white rounded-2xl py-[106px] flex flex-col gap-10 items-center relative MD:py-20 MD:px-4">
                <Image src={fog4} alt="" className="absolute top-0 left-0 w-full contain rounded-2xl SM:hidden block" />
                <Image src={fog5} alt="" className="absolute top-0 left-0 w-full contain rounded-2xl SM:block hidden" />
                <h2 className="font-medium text-[75px] leading-[80px] tracking-tighter z-50 LG:text-6xl MD:text-4xl 1.5SM:text-[32px] text-center">
                    Незаменимых
                    <br className="1.5sm:hidden" /> больше нет
                </h2>
                <p className="max-w-[543px] w-full text-center text-lg">
                    Соберите команду из AI-агентов, которые решат любые задачи!а! В нашей библиотеке готовых решений
                    можно выбрать нужного работника и быстро встроить его в ваши процессы.
                </p>
                <Button className="bg-surface/accent text-white h-[52px] text-[18px] max-w-[186px] w-full">
                    Узнать больше
                </Button>
            </section>
        </main>
    );
}
