import paypal from "../../../assets/images/footerImages/2560px-PayPal_logo 1.png";
import mastercard from "../../../assets/images/footerImages/2.png";
import visa from "../../../assets/images/footerImages/3.png";
import mup from "../../../assets/images/footerImages/4.png";
import webmoney from "../../../assets/images/footerImages/5.png";
import verified from "../../../assets/images/footerImages/6.png";
import safegoogle from "../../../assets/images/footerImages/7.png";
import { GlobalSvgIcons } from "../../../assets/icons/GlobalSvgIcons";

import { useState } from "react";

const Footer = () => {
    const [vk, setVk] = useState(false);
    const [discord, setDiscord] = useState(false);
    const [twitter, setTwitter] = useState(false);
    const [instagram, setInstagram] = useState(false);

    return (
        <div className="max-w-1200 w-full mx-auto mt-32">
            <ul className="flex items-center gap-12">
                <img src={paypal} alt="" />
                <img src={mastercard} alt="" />
                <img src={visa} alt="" />
                <img src={mup} alt="" />
                <img src={webmoney} alt="" />
                <img src={paypal} alt="" />
                <img src={paypal} alt="" />
            </ul>
            <div className="grid grid-cols-4 mt-16">
                <div className="flex flex-col gap-y-7">
                    <h1 className="font-fontFamily font-semibold text-xl text-white">
                        О компании
                    </h1>
                    <div className="flex flex-col gap-y-5">
                        <p className="font-fontFamily font-normal text-lg text-[#cdcdcf]">
                            О нас
                        </p>
                        <p className="font-fontFamily font-normal text-lg text-[#cdcdcf]">
                            Вакансии
                        </p>
                        <p className="font-fontFamily font-normal text-lg text-[#cdcdcf]">
                            Реквизиты
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-7">
                    <h1 className="font-fontFamily font-semibold text-xl text-white">
                        Договор оферты
                    </h1>
                    <div className="flex flex-col gap-y-5">
                        <p className="font-fontFamily font-normal text-lg text-[#cdcdcf]">
                            Каталог
                        </p>
                        <p className="font-fontFamily font-normal text-lg text-[#cdcdcf]">
                            Акции
                        </p>
                        <p className="font-fontFamily font-normal text-lg text-[#cdcdcf]">
                            Личный кабинет
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-7">
                    <h1 className="font-fontFamily font-semibold text-xl text-white">
                        Договор оферты
                    </h1>
                    <div className="flex flex-col gap-y-5">
                        <p className="font-fontFamily font-normal text-lg text-[#cdcdcf]">
                            Каталог
                        </p>
                        <p className="font-fontFamily font-normal text-lg text-[#cdcdcf]">
                            Акции
                        </p>
                        <p className="font-fontFamily font-normal text-lg text-[#cdcdcf]">
                            Личный кабинет
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-7">
                    <img src={verified} alt="" />
                    <img src={safegoogle} alt="" />
                </div>
            </div>
            <p className="font-thirdFamily font-normal text-base text-[#63686d] mt-10">
                Все продаваемые ключи закупаются у официальных дистрибьюторови
                издателей. В том числе у 1С-СофтКлаб, Бука, Новый Диск и Enaza
            </p>
            <div className="flex items-center justify-between mt-14">
                <p className="font-thirdFamily font-normal text-lg text-[#4277ff]">Правовая информация</p>
                <p className="font-thirdFamily font-normal text-lg text-[#63686d]">Интернет-магазин игр «Playnchill» © 2024 </p>
                <div className="flex items-center gap-6">
                    <div className="cursor-pointer" onMouseEnter={() => setVk(true)} onMouseLeave={() => setVk(false)}>
                        {vk ? <GlobalSvgIcons id="vk-hover" /> : <GlobalSvgIcons id="vk" />}
                    </div>
                    <div className="cursor-pointer" onMouseEnter={() => setDiscord(true)} onMouseLeave={() => setDiscord(false)}>
                        {discord ? <GlobalSvgIcons id="discord-hover" /> : <GlobalSvgIcons id="discord" />}
                    </div>
                    <div className="cursor-pointer" onMouseEnter={() =>setTwitter(true)} onMouseLeave={() =>setTwitter(false)}>
                        {twitter ? <GlobalSvgIcons id="twitter-hover" /> : <GlobalSvgIcons id="twitter" />}
                    </div>
                    <div className="cursor-pointer" onMouseEnter={() => setInstagram(true)} onMouseLeave={() => setInstagram(false)}>
                        {instagram ? <GlobalSvgIcons id="instagram-hover" /> : <GlobalSvgIcons id="instagram" />}
                    </div>
                </div>
            </div>
            <h1 className="font-fourthFamily text-4xl font-bold text-white text-center mt-32 mb-7">Ravshan's product</h1>
        </div>
    );
};

export default Footer;
