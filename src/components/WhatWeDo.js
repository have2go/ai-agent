import Image from "next/image";

import iconSmile from "/public/icon-smile.svg";
import iconThumb from "/public/icon-thumb.svg";
import iconArrow from "/public/icon-arrow.svg";

import mobIconSmile from "/public/m_icon-smile.svg";
import mobIconThumb from "/public/m_icon-thumb.svg";
import mobIconArrow from "/public/m_icon-arrow.svg";

export default function WhatWeDo() {
    return (
        <section
            className="py-[106px] flex flex-col gap-20 XL:gap-16 XL:py-20 LG:py-12 LG:gap-12 MD:py-6 MD:gap-6"
            id="what-we-do"
        >
            <h2 className="text-[75px] mx-auto w-fit bg-surface/accent bg-clip-text text-transparent font-medium XL:text-[64px] LG:text-6xl MD:text-4xl 1.5SM:text-[32px]">
                Что мы умеем?
            </h2>
            <div className="grid grid-cols-3 gap-8 LG:gap-4 MD:grid-cols-1">
                <div className="p-12 bg-white rounded-2xl flex flex-col gap-[35px] XL:px-6 XL:py-8 XL:gap-6 LG:gap-4 1.5SM:p-8">
                    <Image src={iconSmile} alt="icon-smile" className="XL:w-14 1.5SM:hidden" />
                    <Image src={mobIconSmile} alt="icon-smile" className="w-7 1.5sm:hidden" />
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[26px] font-medium XL:text-2xl LG:text-[18px] 1.5SM:text-[26px]">
                            Автономные сотрудники
                        </h4>
                        <p className="XL:text-[15px] LG:text-sm 1.5SM:text-base">
                            Мы обучили LLM понимать контекст бизнес-процессов. Это позволяет вести естественные
                            разговоры без привлечения оператора, а в конце дня вас ждет отчет о проделанной работе.
                        </p>
                    </div>
                </div>
                <div className="p-12 bg-white rounded-2xl flex flex-col gap-[35px] XL:px-6 XL:py-8 XL:gap-6 LG:gap-4">
                    <Image src={iconThumb} alt="icon-thumb" className="XL:w-14 1.5SM:hidden" />
                    <Image src={mobIconThumb} alt="icon-thumb" className="w-7 1.5sm:hidden" />
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[26px] font-medium XL:text-2xl LG:text-[18px] 1.5SM:text-[26px]">
                            Всё и сразу
                        </h4>
                        <p className="XL:text-[15px] LG:text-sm 1.5SM:text-base">
                            Выполняйте несколько задач паралельно, недожидаясь их окончания: делайте рассылку,
                            квалифицируйте лиды и даже развлекайте клиентов историями в своих соц. сетях.
                        </p>
                    </div>
                </div>
                <div className="p-12 bg-white rounded-2xl flex flex-col gap-[35px] XL:px-6 XL:py-8 XL:gap-6 LG:gap-4">
                    <Image src={iconArrow} alt="icon-arrow" className="XL:w-14 1.5SM:hidden" />
                    <Image src={mobIconArrow} alt="icon-arrow" className="w-7 1.5sm:hidden" />
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[26px] font-medium XL:text-2xl LG:text-[18px] 1.5SM:text-[26px]">
                            Эффект масштаба
                        </h4>
                        <p className="XL:text-[15px] LG:text-sm 1.5SM:text-base">
                            Brat AI работает с торговыми представителями, поддержкой и менеджерами, оптимизируя письма,
                            чаты и CRM с помощью релевантных сообщений на основе вашей внутренней базы знаний.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
