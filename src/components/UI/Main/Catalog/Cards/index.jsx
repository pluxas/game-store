import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { getAuth } from "firebase/auth";

import styles from "../Catalog.module.scss";
import { addingProduct } from "../../../../../slices/addingProductByCart";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Card = ({ game }) => {
    const {
        id,
        images,
        priceBecome,
        price,
        priceDollar,
        priceEuro,
        priceBecomeDollar,
        priceBecomeEuro,
        title,
        name,
    } = game;

    const dispatch = useDispatch();
    const currency = useSelector((state) => state.changingCurrency.currency);
    const state = useSelector((state) => state.addingProduct.cart);
    const user = useSelector((state) => state.SignUpParameters.user);
    const auth = getAuth;

    const {t} = useTranslation()

    useEffect(() => {
        return () => user;
    }, [auth]);

    let changingPrice = 0;
    let changingBecomePrice = 0;

    const changePrice = (key) => {
        switch (key) {
            case "$":
                return (changingPrice += priceDollar);
            case "₽":
                return (changingPrice += priceBecome);
            case "€":
                return (changingPrice += priceEuro);
            default:
                break;
        }
    };
    changePrice(currency);

    const changePriceBecome = (key) => {
        switch (key) {
            case "$":
                return (changingBecomePrice += priceBecomeDollar);
            case "₽":
                return (changingBecomePrice += price);
            case "€":
                return (changingBecomePrice += priceBecomeEuro);
        }
    };
    changePriceBecome(currency);

    return (
        <div key={id} className="relative">
            <div className={styles.img}>
                <Link to={"/" + name}>
                    <img
                        className="cursor-pointer "
                        src={images}
                        alt="game image"
                    />
                </Link>
                {state.some((item) => item.id === id) ? (
                    <button className={styles.button}>
                        Добавлен в корзину
                    </button>
                ) : user ? (
                    <button
                        onClick={() => dispatch(addingProduct(game))}
                        className={styles.button}
                    >
                        В корзину
                    </button>
                ) : (
                    <Link to="/Registration" className={styles.button}>
                        В корзину
                    </Link>
                )}
            </div>
            <div className="flex items-center gap-5 mt-5">
                <p className="font-fontFamily font-medium text-2xl text-white">
                    {changingPrice} {currency}
                </p>
                <p className="font-fontFamily font-medium text-lg text-green">
                    -15%
                </p>
                <div className="relative">
                    <span className="border border-solid border-[#38353f] w-full absolute rotate-12 top-3"></span>
                    <p className="font-fontFamily font-normal text-lg text-clear">
                        {changingBecomePrice} {currency}
                    </p>
                </div>
            </div>
            <p className="line-clamp-2 font-secondFamily font-normal text-base text-white my-3">
                {t(`${title}`)}
            </p>
            <div className="flex items-center gap-5 ">
                <div className="flex items-center gap-2">
                    <input
                        type="radio"
                        name="drone"
                        className={styles["input"]}
                    />
                    <label className="font-fontFamily font-medium text-sm text-[#747474]">
                        {t('16')}
                    </label>
                </div>
                <div className="flex items-center gap-2 z-50">
                    <input
                        type="radio"
                        name="drone"
                        className={styles["input"]}
                    />
                    <label className="font-fontFamily font-medium text-sm text-[#747474]">
                        {t('17')}
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Card;
