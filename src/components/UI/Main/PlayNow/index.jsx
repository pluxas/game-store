import { PlayNowGames } from "../../../../games/playNow";

import styles from "./PlayNow.module.scss";

import LazyLoad from "react-lazyload";

const PlayNow = () => {
    return (
        <div className="mt-24 grid grid-cols-2 gap-5">
            {PlayNowGames.map((game) => (
                <div key={game.id} className={styles[`${game.className}`]}>
                    <div>
                        <h1 className="font-fontFamily font-extrabold text-4xl text-white z-50">
                            Играй уже сейчас в <br /> {game.name}
                        </h1>
                        <div className="mt-5 flex items-center gap-5">
                            <p className="font-fontFamily font-extrabold text-2xl text-white">
                                {game.priceBecome} P
                            </p>
                            <p className="font-fontFamily font-extrabold text-xl text-[#ffe817]">
                                -25%
                            </p>
                            <p className="font-fontFamily font-extrabold text-xl text-clear">
                                {game.price}
                            </p>
                        </div>
                        <div className="mt-20 flex items-center gap-4">
                            <button className="px-10 py-5 bg-playNowButton rounded-2xl font-fontFamily font-extrabold text-lg text-white">
                                Купить
                            </button>
                            <button className="font-fontFamily font-semibold text-lg text-white">
                                В избранное
                            </button>
                        </div>
                    </div>
                    <LazyLoad height={200} offset={100}>
                        <img
                            className="absolute -top-10 -right-5"
                            src={game.image}
                            alt=""
                        />
                    </LazyLoad>
                    <LazyLoad height={200} offset={100}>
                        <img
                            className="absolute -top-28 -right-40 -z-10"
                            src={game.imageTwo}
                            alt=""
                        />
                    </LazyLoad>
                </div>
            ))}
        </div>
    );
};

export default PlayNow;
