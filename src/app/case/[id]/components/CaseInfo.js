import Image from "next/image";
import { Chip } from "@nextui-org/react";

export default function CaseInfo({ caseData }) {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
                <Chip
                    variant="bordered"
                    classNames={{
                        base: [
                            "rounded-[6px]",
                            "border",
                            "border-[#524ef8]",
                            "text-[#524ef8]",
                            "text-base",
                            "px-2",
                            "py-1",
                        ],
                    }}
                >
                    Кейс
                </Chip>
                <h1 className="font-medium text-[26px] tracking-normal leading-none">{caseData.title}</h1>
                <p className="tracking-normal leading-tight">{caseData.text}</p>
            </div>
            <div className="flex gap-4 items-center">
                <p className="text-[#9594a7] text-lg">Платформы</p>
                <div className="flex gap-3">
                    {caseData.platforms.map((el, i) => {
                        return <Image key={i} src={el.src} alt={el.alt} className="max-w-[39px]" />;
                    })}
                </div>
            </div>
        </div>
    );
}
