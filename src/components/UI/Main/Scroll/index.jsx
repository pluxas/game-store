import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { GlobalImages } from "../../../../assets/images/GlobalImages";

import { SwiperGames } from "../../../../games/need-for-speed-games";

import "./Swiper.scss";
import { Link } from "react-router-dom";


const Scroll = () => {
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
                                {game.title}
                            </p>
                            <div className="flex items-center gap-5 mt-10">
                                <p className="font-fontFamily font-extrabold text-3xl text-white">
                                    {game.priceBecome} P
                                </p>
                                <p className="font-fontFamily font-extrabold text-xl text-green">
                                    -25%
                                </p>
                                <p className="font-fontFamily font-semibold text-xl text-clear price">
                                    {game.price}
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="bg-white px-10 py-6 font-fontFamily font-semibold text-lg mt-10 rounded-2xl duration-200 hover:bg-gray-300">
                                    В корзину
                                </button>
                                <button className="bg-clear px-10 py-6 font-fontFamily font-semibold text-lg mt-10 rounded-2xl text-white duration-200">
                                    В избранное
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
