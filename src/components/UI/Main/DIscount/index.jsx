import { DiscountGames } from "../../../../games/discount";

import styles from "./Discount.module.scss";

import coca from "../../../../assets/images/cocacola.png"

import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Discount = () => {
    const currency = useSelector((state) => state.changingCurrency.currency);

    const {t} = useTranslation()

    const changePrice = (key, dollar, become, euro) => {
        switch (key) {
            case '$':
                return dollar
            case '₽':
                return become
            case '€':
                return euro
            default:
                break;
        }
    }

    return (
        <>
            <div className="mt-20">
                <h1 className="font-fontFamily font-semibold text-3xl text-white">
                    {t('36')} <span className="text-green">%</span>
                </h1>
                <div className="grid grid-cols-2 mt-5 gap-5 gap-y-16">
                    {DiscountGames.map((game) => (
                        <div key={game.id}>
                            <img src={game.images} alt="" />
                            <div className="flex items-center gap-5 mt-8">
                                <p className="font-fontFamily font-medium text-2xl text-white">
                                    {changePrice(currency, game.dollar, game.price, game.euro)} {currency}
                                </p>
                                <p className="py-2 px-3 bg-[#77be1d] rounded-lg font-fontFamily font-semibold text-lg text-white">
                                    -15%
                                </p>
                                <div className="relative">
                                    <span className="border border-solid border-[#38353f] w-full absolute rotate-12 top-3"></span>
                                    <p className="font-fontFamily font-normal text-lg text-clear">
                                        {changePrice(currency, game.dollar, game.price, game.euro)} {currency}
                                    </p>
                                </div>
                            </div>
                            <p className="font-secondFamily font-normal text-base text-white my-5">
                                Minecraft
                            </p>
                            <div className="flex items-center gap-5 ">
                                <div className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="drone"
                                        className={styles["input_one"]}
                                    />
                                    <label className="font-fontFamily font-medium text-sm text-[#747474]">
                                        {t('16')}
                                    </label>
                                </div>
                                <div className="flex items-center gap-2 z-50">
                                    <input
                                        type="radio"
                                        name="drone"
                                        className={styles["input_two"]}
                                    />
                                    <label className="font-fontFamily font-medium text-sm text-[#747474]">
                                        {t('17')}
                                    </label>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <img className="my-20" src={coca} alt="" />
        </>
    );
};

export default Discount;
