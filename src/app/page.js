"use client";

import Main from "@/components/Main";
import Elevate from "@/components/Elevate";
import WhatWeDo from "@/components/WhatWeDo";
import HowItWorks from "@/components/HowItWorks";
import OurWorks from "@/components/OurWorks";
import NoMore from "@/components/NoMore";

export default function Home() {
    return (
        <>
            <main className="max-w-[1228px] mx-auto XL:px-8 LG:px-4">
                <Main/>
                <Elevate/>
                <WhatWeDo/>
                <HowItWorks/>
                <OurWorks/>
            </main>
            <NoMore />
        </>
    );
}
