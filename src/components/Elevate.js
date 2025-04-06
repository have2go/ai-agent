import Image from "next/image";
// import Form from "@/components/Form";
import phone from "/public/phone.png";
import phoneMob from "/public/phone-mob.png";
import logo from "/public/logo.svg";
import avito from "/public/icon-avito.svg";
import gmail from "/public/icon-gmail.svg";
import ozon from "/public/icon-ozon.svg";
import amo from "/public/icon-amo.svg";
import vk from "/public/icon-vk.svg";

export default function Elevate() {
    return (
        <section className="grid grid-cols-2 gap-8 pb-10 LG:gap-4 MD:grid-cols-1">
            <div className="flex flex-col items-center justify-between gap-[50px] bg-white rounded-2xl p-12 pb-0 z-20 XL:p-8 XL:pb-0 LG:px-4 LG:pt-6 LG:text-2xl MD:gap-8 1.5SM:pt-12 SM:pt-8">
                <div className="flex flex-col gap-4 max-w-[450px]">
                    <h3
                        className={`mx-auto text-[32px] leading-[130%] font-medium max-w-[95%] text-center XL:text-3xl LG:text-2xl 1.5SM:text-[22px] XXSM:text-lg`}
                    >
                        Сделайте продажи вашей сильной стороной с{" "}
                        <span className="bg-surface/accent bg-clip-text text-transparent">Brat&nbsp;AI</span>
                    </h3>
                </div>

                <Image
                    src={phone}
                    alt="Elevate your communication with AI Agent"
                    className="max-w-[350px] LG:max-w-[250px] MD:hidden"
                />
                <Image
                    src={phoneMob}
                    alt="Elevate your communication with AI Agent"
                    className="max-w-[350px] LG:max-w-[250px] hidden MD:block"
                />
            </div>
            <div className="bg-white rounded-2xl p-12 pb-16 z-20 XL:p-8 XL:pb-12 LG:px-4 flex flex-col items-center justify-between gap-10">
                <div className="flex flex-col gap-4 LG:gap-2 max-w-[450px] items-center">
                    <Image src={logo} alt="Brat Ai" className="w-36 LG:w-28" />
                    <p className="text-lg XL:text-[15px] LG:text-base XXSM:text-sm SM:max-w-[300px] mx-auto text-center">
                        В Telegram, WhatsApp, Instagram, Авито, Ozon,
                        <br className="SM:hidden" />
                        Wildberries, E-mail, на вашем сайте и даже в CRM.
                    </p>
                </div>

                <div className="grid grid-rows-2 gap-6 justify-items-center">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="w-20 h-20 SM:w-16 SM:h-16">
                            <Image src={avito} alt="Avito" />
                        </div>
                        <div className="w-20 h-20 SM:w-16 SM:h-16">
                            <Image src={gmail} alt="Gmail" />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                        <div className="w-20 h-20 SM:w-16 SM:h-16">
                            <Image src={ozon} alt="Ozon" />
                        </div>
                        <div className="w-20 h-20 SM:w-16 SM:h-16">
                            <Image src={amo} alt="AmoCRM" />
                        </div>
                        <div className="w-20 h-20 SM:w-16 SM:h-16">
                            <Image src={vk} alt="VK" />
                        </div>
                    </div>
                </div>
                {/* <Form /> */}
            </div>
        </section>
    );
}
