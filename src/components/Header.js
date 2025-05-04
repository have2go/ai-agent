import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import logo from "/public/logo.svg";

export default function Header() {
    return (
        <header className="shadow-sm">
            <div className="flex justify-between items-center h-[70px] max-w-[1228px] mx-auto XL:px-8 LG:px-4">
                <Link href="/" className="MD:w-24 1.5SM:w-32">
                    <Image src={logo} alt="Brat Ai" />
                </Link>
                <div className="flex gap-10 font-medium LG:gap-5 LG:text-[15px] MD:text-sm MD:hidden">
                    <Link href="/#about-us">О нас</Link>
                    <Link href="/#what-we-do">Что мы умеем</Link>
                    <Link href="/our-works">Кейсы</Link>
                    <Link href="/#no-more">Возможности</Link>
                </div>
                <div className="flex gap-3">
                    <div className="flex flex-col justify-center items-end text-sm MD:text-xs">
                        <a href="tel:+79990270029" className="hover:underline cursor-pointer">
                            +7(999)027-00-29
                        </a>
                        <Link
                            href="https://t.me/CEOBRAT"
                            target="_blank"
                            className="bg-surface/accent bg-clip-text text-transparent"
                        >
                            @CEOBRAT
                        </Link>
                    </div>
                    <Link href="https://t.me/CEOBRAT" target="_blank">
                        <Button className="text-[#524EF8] bg-transparent border border-[#524EF8] h-[52px] rounded-[13px] MD:h-10 ">
                            Начать
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
