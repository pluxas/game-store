import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import styles from "../Catalog.module.scss";
import { addingProduct } from "../../../../../slices/addingProductByCart";

const Card = ({ game }) => {
    const { id, images, priceBecome, price, title, name } = game;

    const dispatch = useDispatch();
    const currency = useSelector((state) => state.changingCurrency.currency);
    const state = useSelector((state) => state.addingProduct.cart);

    return (
        <div key={id} className="relative">
            <div className={styles.img}>
                <Link to={"/" + name}>
                    <img
                        className="cursor-pointer h-[450px]"
                        src={images}
                        alt="game image"
                    />
                </Link>
                <button
                    onClick={() => dispatch(addingProduct(game))}
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
                        {price}
                    </p>
                </div>
            </div>
            <p className="line-clamp-2 font-secondFamily font-normal text-base text-white my-3">
                {title}
            </p>
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
    );
};

export default Card;
