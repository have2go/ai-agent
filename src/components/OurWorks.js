import Image from "next/image";
import Link from "next/link";

import {Chip, Button} from "@nextui-org/react";

import pcSmall from "/public/pc-small.jpg";

export default function OurWorks() {
    return (
        <section
            className="py-[106px] flex flex-col gap-16 XL:gap-16 XL:py-20 LG:py-12 LG:gap-12 MD:pt-8 MD:pb-10 MD:gap-6 1.5SM:gap-12">
            <div className="flex justify-between items-center LG:gap-10 1.5SM:flex-col 1.5SM:items-start 1.5SM:gap-6">
                <h2 className="text-[75px] w-fit font-medium XL:text-[64px] LG:text-6xl text-nowrap MD:text-4xl 1.5SM:text-[32px]">
                    Кейсы
                </h2>
                <p className="max-w-[572px] text-lg text-[#9594a7] LG:text-base MD:text-sm 1.5SM:text-base">
                    Мы создаем продукты, отражающие цели компании и наделенные индивидуальностью, позволяющие вашим
                    клиентам эмоционально связываться с вашим брендом.
                </p>
            </div>
            <div className="grid grid-cols-3 gap-8 LG:gap-4 MD:grid-cols-2 1.5SM:grid-cols-1">
                <div className="flex flex-col p-2 bg-white rounded-2xl">
                    <Image src={pcSmall} alt="" className="rounded-[10px]"/>
                    <div className="py-6 px-5 flex flex-col gap-3 LG:px-2 LG:py-4 LG:gap-2">
                        <p className="text-[26px] font-medium leading-[140%] LG:text-xl LG:leading-normal">
                            Как мы втрое увеличили конверсию продаж для гончарной студии
                        </p>
                        <Chip
                            variant="bordered"
                            classNames={{base: ["rounded-[6px]", "border", "border-[#524ef8]", "text-[#524ef8]"]}}
                        >
                            Кейс
                        </Chip>
                    </div>
                </div>
                <div className="flex flex-col p-2 bg-white rounded-2xl">
                    <Image src={pcSmall} alt="" className="rounded-[10px]"/>
                    <div className="py-6 px-5 flex flex-col gap-3 LG:px-2 LG:py-4 LG:gap-2">
                        <p className="text-[26px] font-medium leading-[140%] LG:text-xl LG:leading-normal">
                            Как мы помогли сети салонов красоты больше не упускать клиентов
                        </p>
                        <Chip
                            variant="bordered"
                            classNames={{base: ["rounded-[6px]", "border", "border-[#524ef8]", "text-[#524ef8]"]}}
                        >
                            Кейс
                        </Chip>
                    </div>
                </div>
                <div className="flex flex-col p-2 bg-white rounded-2xl">
                    <Image src={pcSmall} alt="" className="rounded-[10px]"/>
                    <div className="py-6 px-5 flex flex-col gap-3 LG:px-2 LG:py-4 LG:gap-2">
                        <p className="text-[26px] font-medium leading-[140%] LG:text-xl LG:leading-normal">
                            Как автоматизировать рассылки и обработку лидов на 300 товаров
                        </p>
                        <Chip
                            variant="bordered"
                            classNames={{base: ["rounded-[6px]", "border", "border-[#524ef8]", "text-[#524ef8]"]}}
                        >
                            Кейс
                        </Chip>
                    </div>
                </div>
            </div>
            <Link href="/our-works" className="mx-auto">
                <Button
                    className="bg-surface/accent text-white h-[52px] text-[18px] max-w-[154px] w-full LG:text-base mx-auto">
                    Узнать больше
                </Button><
            /Link>
        </section>
    );
}
