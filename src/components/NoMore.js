import Image from "next/image";
import fog4 from "../../public/fog4.png";
import fog5 from "../../public/fog5.png";
import {Button} from "@nextui-org/react";
import google from "/public/icon-google.svg";
import excel from "/public/icon-excel.svg";
import amo from "/public/icon-amo.svg";
import telegram from "/public/icon-telegram.svg";
import instagram from "/public/icon-instagram.svg";
import vk from "/public/icon-vk.svg";
import colors from "/public/icon-colors.svg";
import whatsapp from "/public/icon-whatsapp.svg";
import facebook from "/public/icon-facebook.svg";
import hh from "/public/icon-hh.svg";

export default function NoMore() {
    return (
        <section className="py-[106px] relative MD:py-20 MD:px-4 overflow-hidden text-text-and-icons/base">
            <div className="flex flex-col gap-14 items-center max-w-[1228px] mx-auto text-lg">
                <Image
                    src={fog4}
                    alt=""
                    className="absolute top-0 left-0 w-full contain rounded-tl-[40px] rounded-tr-[40px] SM:hidden block"
                />
                <Image
                    src={fog5}
                    alt=""
                    className="absolute top-0 left-0 w-full contain rounded-tl-[40px] rounded-tr-[40px] SM:block hidden"
                />
                <div className="flex flex-col items-center gap-8 z-50">
                    <h2
                        className="font-medium text-[75px] leading-[80px] tracking-tighter z-50 LG:text-6xl MD:text-4xl 1.5SM:text-[32px] text-center">
                        Незаменимых больше&nbsp;нет
                    </h2>
                    <p className="max-w-[543px] w-full text-center z-50 SM:hidden block">
                        Соберите команду из AI-агентов, которые решат любые задачи. В нашей библиотеке готовых решений
                        можно
                        выбрать нужного работника и быстро встроить его в ваши процессы.
                    </p>
                    <p className="max-w-[543px] w-full text-center z-50 SM:block hidden">Нет идей? Не проблема! У нас
                        есть библиотека готовых AI-сотрудников под разные задачи и сферы, которые помогут вам быстро
                        встроить его в ваши процессы.</p>
                </div>
                <div className="grid grid-cols-2 grid-rows-3 gap-4 z-50 MD:grid-cols-1">
                    {/* Ячейка 1 */}
                    <div
                        className="bg-surface/base/primary border-1 border-stroke/base rounded-2xl flex flex-col justify-between py-8 px-9 SM:p-6">
                        <div>
                            <h5 className="mb-4 text-[26px] SM:text-[22px]">Генерация лидов</h5>
                            <p className="text-text-and-icons/secondary">
                                Создай компания по генерации лидов, нацеленную на владельцев компании в регионе MENA и
                                склонять их к{" "}
                                <span className="bg-surface/accent bg-clip-text text-transparent">
                                    &#123;желаемое&nbsp;действие&#125;.
                                </span>
                            </p>
                        </div>
                        <div className="flex items-center text-text-and-icons/secondary gap-[11px] pt-6">
                            <p>Сервисы</p>
                            <Image src={google} alt="google" className="max-w-[39px]"/>
                            <Image src={excel} alt="excel" className="max-w-[39px]"/>
                        </div>
                    </div>

                    {/* Ячейка 2 */}
                    <div
                        className="bg-surface/base/primary border-1 border-stroke/base rounded-2xl flex flex-col justify-between py-8 px-9">
                        <div>
                            <h5 className="mb-4 text-[26px] SM:text-[22px]">Операционный директор</h5>
                            <p className="text-text-and-icons/secondary">
                                Проведи обзор текущих бизнес-операций, сосредоточившись на выявлении узких мест и
                                неэффективности.
                            </p>
                        </div>
                        <div className="flex items-center text-text-and-icons/secondary gap-[11px] pt-6">
                            <p>Сервисы</p>
                            <Image src={amo} alt="amo" className="max-w-[39px]"/>
                            <Image src={telegram} alt="telegram" className="max-w-[39px]"/>
                        </div>
                    </div>

                    {/* Ячейка 3 */}
                    <div
                        className="bg-surface/base/primary border-1 border-stroke/base rounded-2xl flex flex-col justify-between py-8 px-9">
                        <div>
                            <h5 className="mb-4 text-[26px] SM:text-[22px]">Медиа менеджер 2.0</h5>
                            <p className="text-text-and-icons/secondary">
                                Выложи{" "}
                                <span className="bg-surface/accent bg-clip-text text-transparent">
                                    &#123;фото&nbsp;и&nbsp;описание&#125;
                                </span>{" "}
                                и ответь на все комментарии под постом используя{" "}
                                <span className="bg-surface/accent bg-clip-text text-transparent">
                                    &#123;база&nbsp;знаний&#125;.
                                </span>
                            </p>
                        </div>
                        <div className="flex items-center text-text-and-icons/secondary gap-[11px] pt-6">
                            <p>Сервисы</p>
                            <Image src={instagram} alt="instagram" className="max-w-[39px]"/>
                            <Image src={telegram} alt="telegram" className="max-w-[39px]"/>
                            <Image src={vk} alt="vk" className="max-w-[39px]"/>
                        </div>
                    </div>

                    {/* Ячейка 4 */}
                    <div
                        className="bg-surface/base/primary border-1 border-stroke/base rounded-2xl flex flex-col justify-between py-8 px-9">
                        <div>
                            <h5 className="mb-4 text-[26px] SM:text-[22px]">Служба поддержки</h5>
                            <p className="text-text-and-icons/secondary">
                                Помогай клиентам с запросами и претензиями, а также создайте билеты поддержки.
                            </p>
                        </div>
                        <div className="flex items-center text-text-and-icons/secondary gap-[11px] pt-6">
                            <p>Сервисы</p>
                            <Image src={colors} alt="colors" className="max-w-[39px]"/>
                            <Image src={whatsapp} alt="whatsapp" className="max-w-[39px]"/>
                        </div>
                    </div>

                    {/* Ячейка 5 */}
                    <div
                        className="bg-surface/base/primary border-1 border-stroke/base rounded-2xl flex flex-col justify-between py-8 px-9">
                        <div>
                            <h5 className="mb-4 text-[26px] SM:text-[22px]">Маркетолог</h5>
                            <p className="text-text-and-icons/secondary">
                                Сделайте несколько вариантов креативов для{" "}
                                <span className="bg-surface/accent bg-clip-text text-transparent">
                                    &#123;продукт&#125;
                                </span>
                                . Запустите рекламные таргеты для{" "}
                                <span className="bg-surface/accent bg-clip-text text-transparent">
                                    &#123;аудитория&#125;
                                </span>{" "}
                                и выберите лучший результат.
                            </p>
                        </div>
                        <div className="flex items-center text-text-and-icons/secondary gap-[11px] pt-6">
                            <p>Сервисы</p>
                            <Image src={vk} alt="vk" className="max-w-[39px]"/>
                            <Image src={facebook} alt="facebook" className="max-w-[39px]"/>
                            <Image src={excel} alt="excel" className="max-w-[39px]"/>
                        </div>
                    </div>

                    {/* Ячейка 6 */}
                    <div
                        className="bg-surface/base/primary border-1 border-stroke/base rounded-2xl flex flex-col justify-between py-8 px-9">
                        <div>
                            <h5 className="mb-4 text-[26px] SM:text-[22px]">HR-менеджер</h5>
                            <p className="text-text-and-icons/secondary">
                                Создайте полное описание работы для{" "}
                                <span className="bg-surface/accent bg-clip-text text-transparent">
                                    &#123;роль&nbsp;в&nbsp;компании&#125;
                                </span>
                                , включая ключевые обязанности и желаемые навыки. Затем найдите 10 кандидатов, которые
                                подходят больше всего.
                            </p>
                        </div>
                        <div className="flex items-center text-text-and-icons/secondary gap-[11px] pt-6">
                            <p>Сервисы</p>
                            <Image src={hh} alt="hh" className="max-w-[39px]"/>
                            <Image src={whatsapp} alt="whatsapp" className="max-w-[39px]"/>
                        </div>
                    </div>
                </div>
                <Button className="bg-surface/accent text-white h-[52px] text-[18px] max-w-[186px] w-full z-50">
                    Узнать больше
                </Button>
            </div>
        </section>
    );
}