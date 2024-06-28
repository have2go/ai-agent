import Link from "next/link";
import Image from "next/image";
import logoBlack from "/public/logo-black.svg";

export default function Footer() {
    return (
        <footer className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)]">
            <div className="flex justify-between items-center h-[70px] max-w-[1228px] mx-auto XL:px-8 LG:px-4 1.5SM:flex-col 1.5SM:h-auto 1.5SM:py-8 1.5SM:gap-4">
                <Link href="/" className="MD:w-24 1.5SM:w-32">
                    <Image src={logoBlack} alt="Ai Agent" />
                </Link>
                <div className="flex gap-10 font-medium LG:gap-5 LG:text-[15px] MD:text-sm MD:gap-2 1.5SM:flex-col 1.5SM:items-center 1.5SM:text-[#9594a7] 1.5SM:gap-4">
                    <Link href="#">About</Link>
                    <Link href="#">What we do</Link>
                    <Link href="/our-works">Our works</Link>
                    <Link href="#">Possibilities</Link>
                </div>
            </div>
        </footer>
    );
}
