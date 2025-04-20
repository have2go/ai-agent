import { Chip, Button } from "@nextui-org/react";
import Image from "next/image";
import fog3 from "/public/fog3.png";
import Link from "next/link";

export default function CaseBig({ id, title, text, platforms, fog = false, type, img }) {
    switch (type) {
        case "ltr": {
            return (
                <div className="grid grid-cols-[483px_1fr] gap-8 relative XL:grid-cols-[415px_1fr]">
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
                            <p className="text-[26px] font-medium leading-[140%] XL:text-2xl">{title}</p>
                            <p className="XL:text-sm">{text}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <Link href={`/case/${id}`} passHref>
                                <Button
                                    className="bg-surface/accent text-white text-[18px] h-[48px] px-8 rounded-2xl"
                                    classNames={{
                                        base: "flex items-center justify-center",
                                    }}
                                >
                                    Читать
                                </Button>
                            </Link>

                            <div className="flex gap-4 items-center">
                                <div className="flex gap-3">
                                    {platforms.map((el, i) => {
                                        return <Image key={i} src={el.src} alt={el.alt} className="max-w-[39px]" />;
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-2xl z-50 h-full">
                        <div className="p-2 bg-white rounded-2xl z-50 h-full">
                            <Image src={img} alt="" className="rounded-[10px] h-full" />
                        </div>
                    </div>
                    {fog && (
                        <Image src={fog3} alt="" className="absolute top-0 right-0 w-[1000px] -mr-80 -mt-52 z-20" />
                    )}
                </div>
            );
        }

        case "rtl": {
            return (
                <div className="grid grid-cols-[1fr_483px] gap-8 relative XL:grid-cols-[1fr_415px]">
                    <div className=" rounded-2xl z-50 h-full">
                        <div className="p-2 bg-white rounded-2xl z-50 h-full">
                            <Image src={img} alt="" className="rounded-[10px] h-full" />
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
                            <p className="text-[26px] font-medium leading-[140%] XL:text-2xl">{title}</p>
                            <p className="XL:text-sm">{text}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <Link href={`/case/${id}`} passHref>
                                <Button
                                    className="bg-surface/accent text-white text-[18px] h-[48px] px-8 rounded-2xl"
                                    classNames={{
                                        base: "flex items-center justify-center",
                                    }}
                                >
                                    Читать
                                </Button>
                            </Link>
                            <div className="flex gap-4 items-center">
                                <div className="flex gap-3">
                                    {platforms.map((el, i) => {
                                        return <Image key={i} src={el.src} alt={el.alt} className="max-w-[39px]" />;
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
