import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Swiper.scss";

import { GlobalImages } from "../../../../assets/images/GlobalImages";

import { SwiperGames } from "../../../../games/need-for-speed-games";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Scroll = () => {
    const currency = useSelector((state) => state.changingCurrency.currency);

    const {t} = useTranslation()

    const changePrice = (key, dollar, become, euro) => {
        switch (key) {
            case "$":
                return dollar;
            case "₽":
                return become;
            case "€":
                return euro;
            default:
                break;
        }
    };

    const changePriceBecome = (key, dollar, rub, euro) => {
        switch(key) {
            case '$':
                return dollar
            case '₽':
                return rub
            case '€':
                return euro
        }
    }

    return (
        <Swiper
            className="mt-10 flex items-center w-full h-full"
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
        >
            {SwiperGames.map((game) => (
                <div key={game.id}>
                    <SwiperSlide>
                        <Link to={game.name} className={game.className}>
                            <GlobalImages id="needforspeed" />
                            <p className="font-fontFamily font-normal text-2xl text-white mt-5 w-[570px] text">
                                {t(`${game.title}`)}
                            </p>
                            <div className="flex items-center gap-5 mt-10">
                                <p className="font-fontFamily font-extrabold text-3xl text-white">
                                    {changePrice(currency, game.priceDollar, game.priceBecome, game.priceEuro)} {currency}
                                </p>
                                <p className="font-fontFamily font-extrabold text-xl text-green">
                                    -25%
                                </p>
                                <p className="font-fontFamily font-semibold text-xl text-clear price">
                                    {changePriceBecome(currency, game.priceBecomeDollar, game.price, game.priceBecomeEuro)} {currency}
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="bg-white px-10 py-6 font-fontFamily font-semibold text-lg mt-10 rounded-2xl duration-200 hover:bg-gray-300">
                                    {t('13')}
                                </button>
                                <button className="bg-clear px-10 py-6 font-fontFamily font-semibold text-lg mt-10 rounded-2xl text-white duration-200">
                                    {t('14')}
                                </button>
                            </div>
                        </Link>
                    </SwiperSlide>
                </div>
            ))}
        </Swiper>
    );
};

export default Scroll;
