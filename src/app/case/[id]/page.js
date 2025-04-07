import BackToCasesButton from "./components/BackToCases";
import pcBig from "/public/pc-big.jpg";
import Image from "next/image";

import { sales } from "@/cases/sales";
import { leads } from "@/cases/leads";
import { beauty } from "@/cases/beauty";
import CaseInfo from "./components/CaseInfo";

const casesData = [sales, leads, beauty];

export default function CasePage({ params }) {
    const { id } = params;
    const caseData = casesData.find(item => item.id === id);

    if (!caseData) {
        return <div>Кейс не найден</div>;
    }

    return (
        <main className="max-w-[1228px] mx-auto XL:px-8 LG:px-4 pb-28 MD:pb-6">
            <BackToCasesButton />
            <section className="grid grid-cols-[430px_1fr] w-full mx-auto LG:grid-cols-1 LG:max-w-[80%] MD:max-w-full gap-20 XL:gap-10">
                <div className="LG:hidden">
                    <CaseInfo caseData={caseData} />
                </div>
                <div className="flex flex-col gap-20 LG:gap-8">
                    <div className="rounded-2xl z-50 h-full">
                        <Image src={pcBig} alt="" className="rounded-[10px] h-full" />
                    </div>
                    <div className="lg:hidden">
                        <CaseInfo caseData={caseData} />
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col">
                            <p className="font-bold">Проблема</p>
                            <p className="tracking-normal leading-snug">{caseData.content.problem}</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold">Решение</p>
                            <p className="tracking-normal leading-snug">{caseData.content.solution}</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold">Результаты</p>
                            <ul className="tracking-normal leading-snug list-disc pl-8">
                                {caseData.content.results.map((res, id) => {
                                    return (
                                        <li key={id} className="">
                                            {res}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold">Отзыв клиента</p>
                            <p className="tracking-normal leading-snug">{caseData.content.review}</p>
                        </div>
                        <div className="flex flex-col pb-20 XL:pb-10 MD:pb-0">
                            <p className="font-bold">
                                {caseData.id === "sales"
                                    ? "Хотите масштабировать свой бизнес?"
                                    : "Хотите автоматизировать свой бизнес?"}
                            </p>
                            <p className="tracking-normal leading-snug">{caseData.content.want}</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export async function generateStaticParams() {
    const cases = [sales, leads, beauty];

    return cases.map(caseItem => ({
        id: caseItem.id,
    }));
}
