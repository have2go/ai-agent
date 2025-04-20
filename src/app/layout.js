import { Golos_Text } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const golos = Golos_Text({ subsets: ["cyrillic"] });

export const metadata = {
    title: "Brat AI",
    description: "AI-сотрудники, которые работают",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body className={`${golos.className} bg-[#f5f5f5] -z-50 overflow-x-hidden text-[#393939] tracking-tighter`}>
                <NextUIProvider className="overflow-x-hidden">
                    <Header />
                    {children}
                    <Footer />
                </NextUIProvider>
            </body>
        </html>
    );
}
