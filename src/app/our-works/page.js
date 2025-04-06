import {Chip, Button} from "@nextui-org/react";
import Image from "next/image";

import pcBig from "/public/pc-big.jpg";
import pcSmall from "/public/pc-small.jpg";
import yclients from "/public/icon-yclients.svg";
import whatsapp from "/public/icon-whatsapp.svg";
import google from "/public/icon-google.svg";
import excel from "/public/icon-excel.svg";
import amo from "/public/icon-amo.svg";
import colors from "/public/icon-colors.svg";
import fog3 from "/public/fog3.png";
import fog4 from "/public/fog4.png";
import fog5 from "../../../public/fog5.png";

export default function OurWorks() {
    return (
        <main
            className="max-w-[1228px] flex flex-col gap-[106px] pt-[120px] pb-[146px] mx-auto XL:px-8 XL:py-20 XL:gap-20 LG:px-4 LG:gap-14 1.5SM:py-10">
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
                    <div className="grid grid-cols-[483px_1fr] gap-8 relative XL:grid-cols-[415px_1fr]">
                        <div
                            className="p-12 flex flex-col gap-20 justify-between bg-white rounded-2xl z-50 XL:p-8 XL:gap-12">
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
                                    Как мы втрое сократили работу отдела продаж
                                </p>
                                <p className="XL:text-sm">
                                    Внедрили ИИ-агента для быстрых ответов и записи на мастер-классы. Это ускорило путь
                                    клиента к покупке, увеличило число записей и разгрузило сотрудников.
                                </p>
                            </div>
                            <div className="flex justify-between items-center">
                                <Button
                                    className="bg-surface/accent text-white text-[18px] h-[48px] px-8 rounded-2xl"
                                    classNames={{
                                        base: "flex items-center justify-center",
                                    }}
                                >
                                    Читать
                                </Button>
                                <div className="flex gap-4 items-center">
                                    <p className="text-[#9594a7] text-lg">Платформы</p>
                                    <div className="flex gap-3">
                                        <Image src={yclients} alt="yclients"/>
                                        <Image src={whatsapp} alt="whatsapp"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" rounded-2xl z-50">
                            <div className="p-2 bg-white rounded-2xl z-50">
                                <Image src={pcBig} alt="" className="rounded-[10px]"/>
                            </div>
                        </div>
                        <Image src={fog3} alt="" className="absolute top-0 right-0 w-[1000px] -mr-80 -mt-52 z-20"/>
                    </div>
                    <div className="grid grid-cols-[1fr_483px] gap-8 relative XL:grid-cols-[1fr_415px]">
                        <div className=" rounded-2xl z-50 h-full">
                            <div className="p-2 bg-white rounded-2xl z-50 h-full">
                                <Image src={pcBig} alt="" className="rounded-[10px] h-full"/>
                            </div>
                        </div>
                        <div
                            className="p-12 flex flex-col gap-20 justify-between bg-white rounded-2xl z-50 XL:p-8 XL:gap-12">
                            <div className="flex flex-col gap-4">
                                <Chip
                                    variant="bordered"
                                    classNames={{
                                        base: ["rounded-[6px]", "border", "border-[#524ef8]", "text-[#524ef8]"],
                                    }}
                                >
                                    Retail
                                </Chip>
                                <p className="text-[26px] font-medium leading-[140%] XL:text-2xl">
                                    Как мы помогли сети салонов красоты больше не упускать клиентов
                                </p>
                                <p className="XL:text-sm">
                                    Автоматизировали клиентский сервис: быстрые ответы, запись 24/7, единый стандарт
                                    обслуживания. Это упростило работу сотрудников и повысило качество сервиса.
                                </p>
                            </div>
                            <div className="flex justify-between items-center">
                                <Button
                                    className="bg-surface/accent text-white text-[18px] h-[48px] px-8 rounded-2xl"
                                    classNames={{
                                        base: "flex items-center justify-center", // Убедитесь, что flex работает корректно
                                    }}
                                >
                                    Читать
                                </Button>
                                <div className="flex gap-4 items-center">
                                    <p className="text-[#9594a7] text-lg">Платформы</p>
                                    <div className="flex gap-3">
                                        <Image src={colors} alt="colors"/>
                                        <Image src={amo} alt="amo" className="max-w-[39px]"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[483px_1fr] gap-8 relative XL:grid-cols-[415px_1fr]">
                        <div
                            className="p-12 flex flex-col gap-20 justify-between bg-white rounded-2xl z-50 XL:p-8 XL:gap-12 h-full">
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
                                    Как автоматизировать рассылки и обработку лидов на 300 товаров.
                                </p>
                                <p className="XL:text-sm">
                                    Внедрили AI-агента для обработки запросов и запуска рассылок, снизив нагрузку на
                                    70%. Это ускорило работу в 2 раза, увеличило повторные заказы на 50% и повысило
                                    удовлетворенность клиентов.
                                </p>
                            </div>
                            <div className="flex justify-between items-center">
                                <Button
                                    className="bg-surface/accent text-white text-[18px] h-[48px] px-8 rounded-2xl"
                                    classNames={{
                                        base: "flex items-center justify-center",
                                    }}
                                >
                                    Читать
                                </Button>
                                <div className="flex gap-4 items-center">
                                    <p className="text-[#9594a7] text-lg">Платформы</p>
                                    <div className="flex gap-3">
                                        <Image src={excel} alt="excel"/>
                                        <Image src={google} alt="google"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl z-50 h-full">
                            <div className="p-2 bg-white rounded-2xl z-50 h-full">
                                <Image src={pcBig} alt="" className="rounded-[10px] h-full"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Mobile*/}
                <div className="lg:hidden grid grid-cols-3 gap-8 LG:gap-4 LG:grid-cols-2 1.5SM:grid-cols-1">
                    <div className="flex flex-col p-5 bg-white rounded-2xl">
                        <Image src={pcSmall} alt="" className="rounded-[10px]"/>
                        <div className="flex flex-col justify-between h-full">
                            {/* Верхний контент */}
                            <div className="py-6 flex flex-col gap-4">
                                <Chip
                                    variant="bordered"
                                    classNames={{
                                        base: [
                                            "rounded-[6px]",
                                            "border",
                                            "border-[#524ef8]",
                                            "text-[#524ef8]",
                                        ],
                                    }}
                                >
                                    Кейс
                                </Chip>
                                <p className="text-[22px] font-medium leading-[140%] LG:text-xl LG:leading-normal">
                                    Как мы втрое сократили работу отдела продаж
                                </p>
                            </div>
                            {/* Нижний блок с кнопкой */}
                            <div className="flex justify-between items-center">
                                <Button
                                    className="bg-surface/accent text-white text-[18px] h-[48px] px-8 rounded-2xl"
                                    classNames={{
                                        base: "flex items-center justify-center",
                                    }}
                                >
                                    Читать
                                </Button>
                                <div className="flex gap-4 items-center">
                                    <div className="flex gap-3">
                                        <Image src={yclients} alt="yclients"/>
                                        <Image src={whatsapp} alt="whatsapp"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col p-5 bg-white rounded-2xl">
                        <Image src={pcSmall} alt="" className="rounded-[10px]"/>
                        <div className="flex flex-col justify-between h-full">
                            {/* Верхний контент */}
                            <div className="py-6 flex flex-col gap-4">
                                <Chip
                                    variant="bordered"
                                    classNames={{
                                        base: [
                                            "rounded-[6px]",
                                            "border",
                                            "border-[#524ef8]",
                                            "text-[#524ef8]",
                                        ],
                                    }}
                                >
                                    Кейс
                                </Chip>
                                <p className="text-[22px] font-medium leading-[140%] LG:text-xl LG:leading-normal">
                                    Как мы помогли сети салонов красоты больше не упускать клиентов
                                </p>
                            </div>
                            {/* Нижний блок с кнопкой */}
                            <div className="flex justify-between items-center">
                                <Button
                                    className="bg-surface/accent text-white text-[18px] h-[48px] px-8 rounded-2xl"
                                    classNames={{
                                        base: "flex items-center justify-center",
                                    }}
                                >
                                    Читать
                                </Button>
                                <div className="flex gap-4 items-center">
                                    <div className="flex gap-3">
                                        <Image src={colors} alt="colors"/>
                                        <Image src={amo} alt="amo" className="max-w-[39px]"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col p-5 bg-white rounded-2xl">
                        <Image src={pcSmall} alt="" className="rounded-[10px]"/>
                        <div className="flex flex-col justify-between h-full">
                            {/* Верхний контент */}
                            <div className="py-6 flex flex-col gap-4">
                                <Chip
                                    variant="bordered"
                                    classNames={{
                                        base: [
                                            "rounded-[6px]",
                                            "border",
                                            "border-[#524ef8]",
                                            "text-[#524ef8]",
                                        ],
                                    }}
                                >
                                    Кейс
                                </Chip>
                                <p className="text-[22px] font-medium leading-[140%] LG:text-xl LG:leading-normal">
                                    Как автоматизировать рассылки и обработку лидов на 300 товаров
                                </p>
                            </div>
                            {/* Нижний блок с кнопкой */}
                            <div className="flex justify-between items-center">
                                <Button
                                    className="bg-surface/accent text-white text-[18px] h-[48px] px-8 rounded-2xl"
                                    classNames={{
                                        base: "flex items-center justify-center",
                                    }}
                                >
                                    Читать
                                </Button>
                                <div className="flex gap-4 items-center">
                                    <div className="flex gap-3">
                                        <Image src={excel} alt="excel"/>
                                        <Image src={google} alt="google"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="bg-white rounded-2xl py-[106px] flex flex-col gap-10 items-center relative MD:py-20 MD:px-4">
                <Image
                    src={fog4}
                    alt=""
                    className="absolute top-0 left-0 w-full contain rounded-2xl SM:hidden block"
                />
                <Image
                    src={fog5}
                    alt=""
                    className="absolute top-0 left-0 w-full contain rounded-2xl SM:block hidden"
                />
                <h2 className="font-medium text-[75px] leading-[80px] tracking-tighter z-50 LG:text-6xl MD:text-4xl 1.5SM:text-[32px] text-center">
                    Незаменимых<br className="1.5sm:hidden"/> больше нет
                </h2>
                <p className="max-w-[543px] w-full text-center text-lg">
                    Соберите команду из AI-агентов, которые решат любые задачи!а! В нашей библиотеке готовых решений можно выбрать нужного работника и быстро встроить его в ваши процессы.
                </p>
                <Button className="bg-surface/accent text-white h-[52px] text-[18px] max-w-[186px] w-full">
                    Узнать больше
                </Button>
            </section>
        </main>
    );
}
