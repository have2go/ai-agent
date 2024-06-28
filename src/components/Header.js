import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import logo from "/public/logo.svg";

export default function Header() {
    return (
        <header className="shadow-sm">
            <div className="flex justify-between items-center h-[70px] max-w-[1228px] mx-auto XL:px-8 LG:px-4">
                <Link href="/" className="MD:w-24 1.5SM:w-32">
                    <Image src={logo} alt="Ai Agent" />
                </Link>
                <div className="flex gap-10 font-medium LG:gap-5 LG:text-[15px] MD:text-sm MD:gap-2 1.5SM:hidden">
                    <Link href="#">About</Link>
                    <Link href="#">What we do</Link>
                    <Link href="/our-works">Our works</Link>
                    <Link href="#">Possibilities</Link>
                </div>
                <Button className="text-[#524EF8] bg-transparent border border-[#524EF8] h-[52px] rounded-[13px] max-w-[114px] w-full MD:h-10 MD:max-w-24 1.5SM:max-w-[114px]">
                    Get Started
                </Button>
            </div>
        </header>
    );
}
