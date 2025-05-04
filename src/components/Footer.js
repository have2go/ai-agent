import Link from "next/link";
import Image from "next/image";
import logoBlack from "/public/logo-black.svg";

export default function Footer() {
    return (
        <footer className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)]">
            <div className="flex justify-between items-center h-[70px] max-w-[1228px] mx-auto XL:px-8 LG:px-4 MD:flex-col MD:h-auto MD:py-8 MD:gap-4">
                <Link href="/" className="MD:w-24 1.5SM:w-32">
                    <Image src={logoBlack} alt="Ai Agent" />
                </Link>
                <div className="flex gap-3 MD:flex-col MD:items-center MD:justify-center">
                    <div className="flex flex-col justify-center items-end text-sm MD:text-xs MD:items-center">
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
                    <div className="flex  gap-10 font-medium LG:gap-5 LG:text-[15px] MD:text-sm MD:gap-2 MD:flex-col items-center 1.5SM:text-[#9594a7] 1.5SM:gap-4 tracking-normal">
                        <Link href="/#about-us">О нас</Link>
                        <Link href="/#what-we-do">Что мы умеем</Link>
                        <Link href="/our-works">Кейсы</Link>
                        <Link href="#no-more">Возможности</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
