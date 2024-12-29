import { GlobalImages } from "../../../../../assets/images/GlobalImages";
import { GlobalSvgIcons } from "../../../../../assets/icons/GlobalSvgIcons";

import { addingProduct } from "../../../../../slices/addingProductByCart";

import styles from "../TopFour.module.scss";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Card = ({ game }) => {
    const {
        id,
        images,
        priceBecome,
        priceDollar,
        priceEuro,
        price,
        title,
        radioButtonFirst,
        radioButtonSecond,
        name,
    } = game;
    const dispatch = useDispatch();
    const state = useSelector((state) => state.addingProduct.cart);
    const currency = useSelector((state) => state.changingCurrency.currency);

    const addProduct = (item) => {
        dispatch(addingProduct(item));
    };

    const stateToJson = JSON.stringify(state);

    useEffect(() => {
        localStorage.setItem("games", stateToJson);
    }, [state]);

    // let changingPrice = 0

    // const changePrice = (key) => {
    //     switch (key) {
    //         case '$':
    //             return changingPrice += priceDollar
    //         case '₽':
    //             return changingPrice += priceBecome
    //         case '€':
    //             return changingPrice += priceEuro
    //         default:
    //             break;
    //     }
    // }

    // changePrice(currency)

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
                <button
                    onClick={() => addProduct(game)}
                    className={styles.button}
                >
                    {state.some((item) => item.id === id)
                        ? "Добавлен в корзину"
                        : "В корзину"}
                </button>
            </div>
            <div className="flex items-center gap-5 mt-5">
                <p className="font-fontFamily font-medium text-2xl text-white">
                    {priceBecome} {currency}
                </p>
                <p className="font-fontFamily font-medium text-lg text-green">
                    -15%
                </p>
                <div className="relative">
                    <span className="border border-solid border-[#38353f] w-full absolute rotate-12 top-3"></span>
                    <p className="font-fontFamily font-normal text-lg text-clear">
                        <del>
                            {price}
                            {localStorage.getItem("money")}
                        </del>
                    </p>
                </div>
            </div>
            <p className="line-clamp-2 font-secondFamily font-normal text-base text-white my-3">
                {title}
            </p>
            <div className="flex items-center gap-5 ">
                <div className="flex items-center gap-2">
                    <input type="radio" name="drone" className={styles.input} />
                    <label className="font-fontFamily font-medium text-sm text-[#747474]">
                        {radioButtonFirst}
                    </label>
                </div>
                <div className="flex items-center gap-2 z-50">
                    <input type="radio" name="drone" className={styles.input} />
                    <label className="font-fontFamily font-medium text-sm text-[#747474]">
                        {radioButtonSecond}
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Card;
