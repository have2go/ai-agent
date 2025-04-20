import { Chip, Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

import fog4 from "/public/fog4.png";
import fog5 from "../../../public/fog5.png";
import CaseBig from "./components/CaseBig";
import CaseSmall from "./components/CaseSmall";

import { sales } from "../../cases/sales";
import { beauty } from "../../cases/beauty";
import { leads } from "../../cases/leads";

import case1 from "/public/case-1-big.jpg";
import case2 from "/public/case-2-big.jpg";
import case3 from "/public/case-3-big.jpg";
import case4 from "/public/case-4-big.jpg";

import case1Small from "/public/case-1-sm.jpg";
import case2Small from "/public/case-2-sm.jpg";
import case3Small from "/public/case-3-sm.jpg";
import case4Small from "/public/case-4-sm.jpg";

import iconCroc from "/public/icon-croc.svg";
import iconX from "/public/icon-x.svg";

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
                        img={case1}
                        fog
                        type="ltr"
                    />
                    <CaseBigpcSmall
                        id={beauty.id}
                        title={beauty.title}
                        text={beauty.text}
                        platforms={beauty.platforms}
                        img={case2}
                        type="rtl"
                    />
                    <CaseBig
                        id={leads.id}
                        title={leads.title}
                        text={leads.text}
                        platforms={leads.platforms}
                        img={case3}
                        type="ltr"
                    />
                    <div className="grid grid-cols-[1fr_483px] gap-8 relative XL:grid-cols-[1fr_415px]">
                        <div className=" rounded-2xl z-50 h-full">
                            <div className="p-2 bg-white rounded-2xl z-50 h-full">
                                <Image src={case4} alt="" className="rounded-[10px] h-full" />
                            </div>
                        </div>
                        <div className="p-12 flex flex-col gap-20 justify-between bg-white rounded-2xl z-50 XL:p-8 XL:gap-12">
                            <div className="flex flex-col gap-4">
                                <Chip
                                    variant="bordered"
                                    classNames={{
                                        base: ["rounded-[6px]", "border", "border-[#524ef8]", "text-[#524ef8]"],
                                    }}
                                >
                                    Кейс
                                </Chip>
                                <p className="text-[26px] font-medium leading-[140%] XL:text-2xl">
                                    Как мы сделали бота для торговли мем-коинами
                                </p>
                                <p className="XL:text-sm">
                                    Мы создали торгового бота, который сам анализирует тренды в соц сетях и парсит
                                    данные с бирж. Бот научился автоматически находить лучшую точку для покупки и
                                    продаже на графике с win rate 73% успешных сделок
                                </p>
                            </div>
                            <div className="flex justify-between items-center">
                                {/* <Link href={`#`} passHref> */}
                                <Button
                                    className="bg-surface/accent text-white text-[18px] h-[48px] px-8 rounded-2xl opacity-55 cursor-not-allowed"
                                    classNames={{
                                        base: "flex items-center justify-center",
                                    }}
                                    disabled
                                >
                                    Скоро
                                </Button>
                                {/* </Link> */}
                                <div className="flex gap-4 items-center">
                                    <div className="flex gap-3">
                                        {/* {platforms.map((el, i) => {
                                            return <Image key={i} src={el.src} alt={el.alt} className="max-w-[39px]" />;
                                        })} */}
                                        <Image src={iconCroc} alt={"#"} className="max-w-[39px]" />
                                        <Image src={iconX} alt={"#"} className="max-w-[39px]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Mobile*/}
                <div className="lg:hidden grid grid-cols-3 gap-8 LG:gap-4 LG:grid-cols-2 1.5SM:grid-cols-1">
                    <CaseSmall
                        id={sales.id}
                        title={sales.title}
                        text={sales.text}
                        platforms={sales.platforms}
                        img={case1Small}
                    />
                    <CaseSmall
                        id={beauty.id}
                        title={beauty.title}
                        text={beauty.text}
                        platforms={beauty.platforms}
                        img={case2Small}
                    />
                    <CaseSmall
                        id={leads.id}
                        title={leads.title}
                        text={leads.text}
                        platforms={leads.platforms}
                        img={case3Small}
                    />
                    <div className="flex flex-col p-5 bg-white rounded-2xl">
                        {/* Изображение */}
                        <Image src={case4Small} alt="" className="rounded-[10px]" />

                        {/* Основной контент */}
                        <div className="flex flex-col justify-between h-full">
                            {/* Верхний контент */}
                            <div className="py-6 flex flex-col gap-4">
                                <Chip
                                    variant="bordered"
                                    classNames={{
                                        base: ["rounded-[6px]", "border", "border-[#524ef8]", "text-[#524ef8]"],
                                    }}
                                >
                                    Кейс
                                </Chip>
                                <p className="text-[22px] font-medium leading-[140%] LG:text-xl LG:leading-normal">
                                    Как мы сделали бота для торговли мем-коинами
                                </p>
                            </div>

                            <div className="flex justify-between items-center">
                                <Link href={`#`} passHref>
                                    <Button
                                        className="bg-surface/accent text-white text-[18px] h-[48px] px-8 rounded-2xl opacity-55 cursor-not-allowed"
                                        classNames={{
                                            base: "flex items-center justify-center",
                                        }}
                                        disabled
                                    >
                                        Скоро
                                    </Button>
                                </Link>

                                <div className="flex gap-4 items-center">
                                    <div className="flex gap-3">
                                        {/* {platforms.map((el, i) => (
                                            <Image key={i} src={el.src} alt={el.alt} className="max-w-[39px]" />
                                        ))} */}
                                        <Image src={iconCroc} alt={"#"} className="max-w-[39px]" />
                                        <Image src={iconX} alt={"#"} className="max-w-[39px]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                <Link href="https://t.me/CEOBRAT" target="_blank">
                    <Button className="bg-surface/accent text-white h-[52px] text-[18px] px-8 z-50 font-light">
                        Обсудить внедрение
                    </Button>
                </Link>
            </section>
        </main>
    );
}
