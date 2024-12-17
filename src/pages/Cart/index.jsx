import { useSelector } from "react-redux";

import Banner from "./Banner";
import GamesInCart from "./GamesInCart";
import ModalPlaceOrder from "./Modal";
import PaymentMethod from "./PaymentMethod";

import EmptyCart from "../../assets/images/empty cart.png";
import checkImg from "../../assets/images/check.png";

import { Link } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
    const state = useSelector((state) => state.addingProduct.cart);
    const totalGames = state.length;

    const [check, setCheck] = useState(false);

    return (
        <div className="mt-12">
            {totalGames === 0 ? (
                <Link to="/" className="flex flex-col items-center">
                    <img className="w-52 h-52" src={EmptyCart} alt="" />
                    <h1 className="font-fourthFamily font-semibold text-6xl text-green">
                        Корзина пустая
                    </h1>
                </Link>
            ) : (
                <div>
                    <h1 className="font-fontFamily font-bold text-5xl text-white">
                        Корзина <span className="text-green">{totalGames}</span>
                    </h1>
                    <Banner />
                    <GamesInCart state={state} />
                    <div className="flex items-center justify-between">
                        <PaymentMethod />
                        <ModalPlaceOrder setCheck={setCheck} />
                    </div>
                </div>
            )}
            {check ? (
                <div className="fixed top-0 left-0 flex flex-col items-center justify-center bg-[#0000007e] w-full h-full" onClick={() => setCheck(false)}>
                    <img className="w-52 h-52" src={checkImg} alt="" />
                    <h1 className="font-fontFamily font-semibold text-5xl text-white">
                        Заказ оформлен
                    </h1>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default Cart;
