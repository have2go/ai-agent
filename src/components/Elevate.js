import Image from "next/image";
import Form from "@/components/Form";
import phone from "/public/phone.png";

export default function Elevate() {
    return(
        <section className="grid grid-cols-2 gap-8 pb-10 min-h-[744px] XL:min-h-[711px] LG:gap-4 LG:min-h-[644px] MD:grid-cols-1 MD:min-h-0">
                <div className=" flex flex-col items-center justify-between gap-[75px] bg-white rounded-2xl p-12 pb-0 z-20 XL:p-8 XL:pb-0 LG:px-4 LG:pt-6 LG:text-2xl MD:gap-8 1.5SM:pt-12">
                    <h3
                        className={`mx-auto text-[32px] leading-[130%] font-medium max-w-[450px] text-center XL:text-3xl LG:text-2xl 1.5SM:text-[22px]`}
                    >
                        Elevate your communication with<br className="lg:hidden 1.5SM:hidden" />{" "}
                        <span className="bg-surface/accent bg-clip-text text-transparent">AI Agent</span>
                    </h3>
                    <Image
                        src={phone}
                        alt="Elevate your communication with AI Agent"
                        className="max-w-[350px] LG:max-w-[300px]"
                    />
                </div>
                <div className="bg-white rounded-2xl p-12 z-20 XL:p-8 LG:px-4 ">
                    <Form />
                </div>
            </section>
    )
}