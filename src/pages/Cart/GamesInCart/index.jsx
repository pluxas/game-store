import { useEffect } from "react";
import { GlobalSvgIcons } from "../../../assets/icons/GlobalSvgIcons";
import {
    decreaseQuantity,
    increaseQuantity,
    removeProduct,
} from "../../../slices/addingProductByCart";

import { useDispatch, useSelector } from "react-redux";

import { useTranslation } from "react-i18next";

const GamesInCart = () => {
    const currency = useSelector((state) => state.changingCurrency.currency);
    const state = useSelector((state) => state.addingProduct.cart);
    const dispatch = useDispatch();

    const { t } = useTranslation()

    const deleteGameInCart = (game) => {
        if (state.map(game => game.id === game.id)) {
            dispatch(removeProduct(game));
        }
    };

    const IncreaseGameQuantity = (game) => {
        dispatch(increaseQuantity(game));
    };

    const decreaseGameQuantity = (game) => {
        if (game.quantity > 1) {
            dispatch(decreaseQuantity(game));
        } else {
            dispatch(removeProduct(game));
        }
    };

    useEffect(() => {
        localStorage.setItem("games", JSON.stringify(state));
    }, [state]);

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
        <div className="mt-10 flex flex-col gap-8 w-[892px]">
            {state.map(game => (
                <div className="flex justify-between items-center" key={game.id}>
                    <div className="flex gap-8">
                        <img
                            className="w-[200px] h-[270px]"
                            src={game.images}
                            alt=""
                        />
                        <div>
                            <h1 className="font-fontFamily font-medium text-3xl text-white">
                                {game.name}
                            </h1>
                            <div className="flex items-center gap-5 mt-5">
                                <p className="font-fontFamily font-medium text-3xl text-white">
                                    {changePrice(currency, game.priceDollar, game.priceBecome, game.priceEuro)} {currency}
                                </p>
                                <p className="font-fontFamily font-medium text-2xl text-green">
                                    -15%
                                </p>
                                <div className="relative">
                                    <span className="border border-solid border-[#38353f] w-full absolute rotate-12 top-3"></span>
                                    <p className="font-fontFamily font-normal text-2xl text-clear">
                                        <del>
                                            {game.price}
                                            {localStorage.getItem("money")}
                                        </del>
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 mt-10">
                                <p className="font-fontFamily font-normal text-lg text-clear">
                                    {t('125')}
                                    <span className="text-white">
                                        {t('126')}
                                    </span>
                                </p>
                                <p className="font-fontFamily font-normal text-lg text-clear">
                                    {t('127')}
                                    <span className="text-white"> Steam</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-10">
                        <div
                            onClick={() => deleteGameInCart(game)}
                            className="cursor-pointer"
                        >
                            <GlobalSvgIcons id="trash" />
                        </div>
                        <div className="flex items-center gap-3">
                            <button onClick={() => decreaseGameQuantity(game)} className="text-2xl text-white">-</button>
                            <p className="text-2xl text-white">
                                {game.quantity}
                            </p>
                            <button
                                onClick={() => IncreaseGameQuantity(game)}
                                className="text-2xl text-white"
                            >
                                +
                            </button>
                        </div>
                        <div className="cursor-pointer">
                            <GlobalSvgIcons id="heart" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GamesInCart;
