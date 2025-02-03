import { GlobalImages } from "../../../../../assets/images/GlobalImages";
import { GlobalSvgIcons } from "../../../../../assets/icons/GlobalSvgIcons";
import { addingProduct } from "../../../../../slices/addingProductByCart";
import styles from "../TopFour.module.scss";

import { Link } from "react-router-dom";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getAuth } from "firebase/auth";

import { useTranslation } from "react-i18next";

const Card = ({ game }) => {
    const {
        id,
        images,
        priceBecome,
        priceDollar,
        priceEuro,
        price,
        priceBecomeDollar,
        priceBecomeEuro,
        title,
        radioButtonFirst,
        radioButtonSecond,
        name,
    } = game;
    const dispatch = useDispatch();
    const state = useSelector((state) => state.addingProduct.cart);
    const currency = useSelector((state) => state.changingCurrency.currency);
    const user = useSelector((state) => state.SignUpParameters.user);
    const auth = getAuth;

    const {t} = useTranslation()

    const stateToJson = JSON.stringify(state);

    useEffect(() => {
        localStorage.setItem("games", stateToJson);
    }, [state]);

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
        <div className="relative">
            <div className={styles.img}>
                <div className="absolute p-5 flex items-center gap-[134px]">
                    <div className="">
                        <GlobalImages id="top-four" />
                    </div>
                    <div className={styles.heart}>
                        <GlobalSvgIcons id="heart-one" />
                    </div>
                </div>
                <Link to={name}>
                    <img
                        className="cursor-pointer"
                        src={images}
                        alt="game image"
                    />
                </Link>
                {state.some((item) => item.id === id) ? (
                    <button className={styles.button}>
                        {t('24')}
                    </button>
                ) : user ? (
                    <button
                        onClick={() => dispatch(addingProduct(game))}
                        className={styles.button}
                    >
                        {t('13')}
                    </button>
                ) : (
                    <Link to="/Registration" className={styles.button}>
                        {t('13')}
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
                        <del>
                            {changingBecomePrice} {currency}
                        </del>
                    </p>
                </div>
            </div>
            <p className="line-clamp-2 font-secondFamily font-normal text-base text-white my-3">
                {t(`${title}`)}
            </p>
            <div className="flex items-center gap-5 ">
                <div className="flex items-center gap-2">
                    <input type="radio" name="drone" className={styles.input} />
                    <label className="font-fontFamily font-medium text-sm text-[#747474]">
                        {t(`${radioButtonFirst}`)}
                    </label>
                </div>
                <div className="flex items-center gap-2 z-50">
                    <input type="radio" name="drone" className={styles.input} />
                    <label className="font-fontFamily font-medium text-sm text-[#747474]">
                        {t(`${radioButtonSecond}`)}
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Card;
