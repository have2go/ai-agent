"use client";
import { useRouter } from "next/navigation";
import chevronLeft from "/public/chevron-left.svg";
import Image from "next/image";

export default function BackToCasesButton() {
    const router = useRouter();

    const handleBack = () => {
        if (window.history.length > 1) {
            router.back();
        } else {
            router.push("/our-works");
        }
    };

    return (
        <button onClick={handleBack} className="flex gap-3 text-text-and-icons/secondary hover:underline pt-28 pb-10 pl-2 XL:pt-10 MD:pt-6">
            <Image src={chevronLeft} alt="Назад к кейсам" />
            Назад к кейсам
        </button>
    );
}
