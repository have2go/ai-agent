import { Chip, Button } from "@nextui-org/react";
import Image from "next/image";

import pcBig from "/public/pc-big.jpg";
import pcSmall from "/public/pc-small.jpg";
import iconGoogle from "/public/icon-google.svg";
import iconBoolio from "/public/icon-boolio.svg";
import fog3 from "/public/fog3.png";
import fog4 from "/public/fog4.png";

export default function OurWorks() {
    return (
        <main className="max-w-[1228px] flex flex-col gap-[106px] pt-[120px] pb-[146px] mx-auto XL:px-8 XL:py-20 XL:gap-20 LG:px-4 LG:gap-14 1.5SM:py-10">
            <section className=" flex flex-col gap-[106px] XL:gap-20 LG:gap-14 items-center 1.5SM:gap-10">
                <div className="max-w-[610px] w-full flex flex-col gap-10 mx-auto items-center 1.5SM:gap-6">
                    <h1 className="bg-surface/accent bg-clip-text text-transparent font-medium text-[75px] leading-[80px] tracking-tighter XL:text-6xl 1.5SM:text-4xl">
                        Our Works
                    </h1>
                    <p className="text-center text-[#9594a7] text-lg XL:text-base XL:max-w-[500px] ">
                        We create products that reflect the company&apos;s brand and imbued with personality, sense of
                        humor and empathy, allowing your customers to emotionally connect and actively interact with
                        your brand.
                    </p>
                </div>
                <div className="flex flex-col gap-[106px] XL:gap-20 items-center LG:hidden">
                    <div className="grid grid-cols-[483px_1fr] gap-8 relative XL:grid-cols-[415px_1fr]">
                        <div className="p-12 flex flex-col gap-20 justify-between bg-white rounded-2xl z-50 XL:p-8 XL:gap-12">
                            <div className="flex flex-col gap-4">
                                <Chip
                                    variant="bordered"
                                    classNames={{
                                        base: ["rounded-[6px]", "border", "border-[#524ef8]", "text-[#524ef8]"],
                                    }}
                                >
                                    Retail
                                </Chip>
                                <p className="text-[26px] font-medium leading-[140%] XL:text-2xl">
                                    Delivering exceptional customer service for $4.6 relailer{" "}
                                </p>
                                <p className="XL:text-sm">
                                    Spawn one or more digital autonomous agents that will work on resolving your
                                    problem. Enable them with web access, plugins and more to accomplish any your goal.
                                </p>
                            </div>
                            <div className="flex justify-between items-center">
                                <Button className="bg-surface/accent text-white h-[52px] text-[18px] max-w-[186px] w-full XL:max-w-[160px]">
                                    Learn More
                                </Button>
                                <div className="flex gap-4 items-center">
                                    <p className="text-[#9594a7] text-lg">Plugins</p>
                                    <div className="flex gap-3">
                                        <Image src={iconBoolio} alt="boolio" />
                                        <Image src={iconGoogle} alt="google" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" rounded-2xl z-50">
                            <div className="p-2 bg-white rounded-2xl z-50">
                                <Image src={pcBig} alt="" className="rounded-[10px]" />
                            </div>
                        </div>
                        <Image src={fog3} alt="" className="absolute top-0 right-0 w-[1000px] -mr-80 -mt-52 z-20" />
                    </div>
                    <div className="grid grid-cols-[1fr_483px] gap-8 relative XL:grid-cols-[1fr_415px]">
                        <div className=" rounded-2xl z-50">
                            <div className="p-2 bg-white rounded-2xl z-50">
                                <Image src={pcBig} alt="" className="rounded-[10px]" />
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
                                    Retail
                                </Chip>
                                <p className="text-[26px] font-medium leading-[140%] XL:text-2xl">
                                    Delivering exceptional customer service for $4.6 relailer{" "}
                                </p>
                                <p className="XL:text-sm">
                                    Spawn one or more digital autonomous agents that will work on resolving your
                                    problem. Enable them with web access, plugins and more to accomplish any your goal.
                                </p>
                            </div>
                            <div className="flex justify-between items-center">
                                <Button className="bg-surface/accent text-white h-[52px] text-[18px] max-w-[186px] w-full XL:max-w-[160px]">
                                    Learn More
                                </Button>
                                <div className="flex gap-4 items-center">
                                    <p className="text-[#9594a7] text-lg">Plugins</p>
                                    <div className="flex gap-3">
                                        <Image src={iconBoolio} alt="boolio" />
                                        <Image src={iconGoogle} alt="google" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:hidden grid grid-cols-3 gap-8 LG:gap-4 MD:grid-cols-2 1.5SM:grid-cols-1">
                    <div className="flex flex-col p-2 bg-white rounded-2xl">
                        <Image src={pcSmall} alt="" className="rounded-[10px]" />
                        <div className="py-6 px-5 flex flex-col gap-3 LG:px-2 LG:py-4 LG:gap-3">
                            <Chip
                                variant="bordered"
                                classNames={{ base: ["rounded-[6px]", "border", "border-[#524ef8]", "text-[#524ef8]"] }}
                            >
                                Retail
                            </Chip>
                            <p className="text-[26px] font-medium leading-[140%] LG:text-xl LG:leading-normal">
                                Delivering exceptional customer service for $4.6 relailer{" "}
                            </p>
                            <Button className="bg-surface/accent text-white h-11 text-base  w-1/2 max-w-[140px]">
                                Learn More
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col p-2 bg-white rounded-2xl">
                        <Image src={pcSmall} alt="" className="rounded-[10px]" />
                        <div className="py-6 px-5 flex flex-col gap-3 LG:px-2 LG:py-4 LG:gap-3">
                            <Chip
                                variant="bordered"
                                classNames={{ base: ["rounded-[6px]", "border", "border-[#524ef8]", "text-[#524ef8]"] }}
                            >
                                Retail
                            </Chip>
                            <p className="text-[26px] font-medium leading-[140%] LG:text-xl LG:leading-normal">
                                Delivering exceptional customer service for $4.6 relailer{" "}
                            </p>
                            <Button className="bg-surface/accent text-white h-11 text-base  w-1/2 max-w-[140px]">
                                Learn More
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col p-2 bg-white rounded-2xl">
                        <Image src={pcSmall} alt="" className="rounded-[10px]" />
                        <div className="py-6 px-5 flex flex-col gap-3 LG:px-2 LG:py-4 LG:gap-3">
                            <Chip
                                variant="bordered"
                                classNames={{ base: ["rounded-[6px]", "border", "border-[#524ef8]", "text-[#524ef8]"] }}
                            >
                                Retail
                            </Chip>
                            <p className="text-[26px] font-medium leading-[140%] LG:text-xl LG:leading-normal">
                                Delivering exceptional customer service for $4.6 relailer{" "}
                            </p>
                            <Button className="bg-surface/accent text-white h-11 text-base  w-1/2 max-w-[140px]">
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white rounded-2xl py-[106px] flex flex-col gap-10 items-center relative MD:py-20 MD:px-4">
                <Image src={fog4} alt="" className="absolute top-0 left-0 w-full contain rounded-2xl" />
                <h2 className="font-medium text-[75px] leading-[80px] tracking-tighter z-50 LG:text-6xl MD:text-4xl 1.5SM:text-[32px] text-center">
                    Discover<br className="1.5sm:hidden" />the possibilities
                </h2>
                <p className="max-w-[543px] w-full text-center text-lg">
                    No idea? No problem! We have  a library of prompts and plugins to help you get started and learn
                    along the way.
                </p>
                <Button className="bg-surface/accent text-white h-[52px] text-[18px] max-w-[186px] w-full">
                    Get started
                </Button>
            </section>
        </main>
    );
}
