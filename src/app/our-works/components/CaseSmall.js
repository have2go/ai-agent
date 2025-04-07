import { Chip, Button } from "@nextui-org/react";
import Image from "next/image";
import pcSmall from "/public/pc-small.jpg";
import Link from "next/link";

export default function CaseSmall({ id, title, platforms }) {
    return (
        <div className="flex flex-col p-5 bg-white rounded-2xl">
            {/* Изображение */}
            <Image src={pcSmall} alt="" className="rounded-[10px]" />

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
                    <p className="text-[22px] font-medium leading-[140%] LG:text-xl LG:leading-normal">{title}</p>
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
                            {platforms.map((el, i) => (
                                <Image key={i} src={el.src} alt={el.alt} className="max-w-[39px]" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
