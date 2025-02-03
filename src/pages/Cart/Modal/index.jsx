import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../../slices/addingProductByCart";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ModalPlaceOrder = ({ setCheck }) => {
    const store = useSelector((state) => state.addingProduct.cart);
    const currency = useSelector((state) => state.changingCurrency.currency);
    const dispatch = useDispatch();

    const {t} = useTranslation()

    const auth = getAuth();
    const navigate = useNavigate()

    const quantityGamesInCart = store.length;

    const totalAmountGamesInCart = (key) => {
        switch (key) {
            case "$":
                return store.reduce((sum, item) => (sum + item.priceDollar * item.quantity), 0);
            case "€":
                return store.reduce((sum, item) => (sum += item.priceEuro * item.quantity), 0);
            case "₽":
                return store.reduce((sum, item) => (sum += item.priceBecome * item.quantity), 0);
        }
    };

    const clearCarted = () => {
        if (auth.currentUser) {
            setCheck(true);
            dispatch(clearCart());
        } else {
            navigate('/Registration')
        }
    };

    return (
        <>
            <div className="p-7 border border-solid border-[#77be1d] rounded-3xl w-80">
                <p className="font-fontFamily font-bold text-xl text-center text-white">
                    {quantityGamesInCart}{" "}
                    {quantityGamesInCart > 1 ? `${t('132')}s` : `${t('132')}`}
                </p>
                <h1 className="font-fontFamily font-semibold text-4xl text-center text-white my-6">
                    {totalAmountGamesInCart(currency)} {currency}
                </h1>
                <button
                    className="w-full py-5 bg-green rounded-2xl font-fontFamily font-semibold text-lg text-white"
                    onClick={clearCarted}
                >
                    {t('133')}
                </button>
                <p className="mt-8 font-fontFamily font-medium text-base text-clear">
                    {t('134')}
                    <span className="text-[#4885fc] cursor-pointer">
                        {t('131')}
                    </span>
                </p>
            </div>
        </>
    );
};

export default ModalPlaceOrder;
