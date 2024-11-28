import { Link } from "react-router-dom";

import styles from "./SearchCards.module.scss";
import { GlobalSvgIcons } from "../../../../../assets/icons/GlobalSvgIcons";

const SearchCards = ({ game, closeSearchModal }) => {
    const { id, images, priceBecome, price, title, name } = game;

    return (
        <div key={id} className="flex items-center justify-between">
            <div className="flex gap-5 my-4">
                <Link to={name} onClick={closeSearchModal}>
                    <img
                        className="cursor-pointer w-[114px] h-[143px]"
                        src={images}
                        alt="game image"
                    />
                </Link>
                <div className="flex flex-col gap-4">
                    <h1 className="font-fontFamily font-semibold text-xl text-white">{name}</h1>
                    <div className="flex items-center gap-5">
                        <p className="font-fontFamily font-medium text-2xl text-white">
                            {priceBecome} P
                        </p>
                        <p className="font-fontFamily font-medium text-lg text-green">
                            -15%
                        </p>
                        <div className="relative">
                            <span className="border border-solid border-[#ffffff] w-full absolute rotate-12 top-3"></span>
                            <p className="font-fontFamily font-normal text-lg text-clear">
                                {price}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 ">
                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="drone"
                                className={styles["input"]}
                            />
                            <label className="font-fontFamily font-medium text-sm text-[#747474]">
                                Ключ
                            </label>
                        </div>
                        <div className="flex items-center gap-2 z-50">
                            <input
                                type="radio"
                                name="drone"
                                className={styles["input"]}
                            />
                            <label className="font-fontFamily font-medium text-sm text-[#747474]">
                                Аккаунт Steam
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <div className="p-3 border border-solid border-[#E6E6E7] rounded-full w-11 h-11 cursor-pointer">
                    <GlobalSvgIcons id='cart-two'/>
                </div>
                <div className="py-3 px-2 border border-solid border-[#E6E6E7] rounded-full w-11 h-11 cursor-pointer">
                    <GlobalSvgIcons id='heart'/>
                </div>
            </div>
        </div>
    );
};

export default SearchCards;
