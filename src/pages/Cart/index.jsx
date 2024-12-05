import Banner from "./Banner";
import GamesInCart from "./GamesInCart";
import ModalPlaceOrder from "./Modal";
import PaymentMethod from "./PaymentMethod";
import ToSendMassageForYourEmail from "./toSendMassage";

const Cart = () => {
    return (
        <div className="mt-12">
            <h1 className="font-fontFamily font-bold text-5xl text-white">
                Корзина <span className="text-green">4</span>
            </h1>
            <Banner />
            <GamesInCart />
            <div className="flex items-center justify-between">
                <div>
                    <PaymentMethod />
                    <ToSendMassageForYourEmail />
                </div>
                <ModalPlaceOrder/>
            </div>
        </div>
    );
};

export default Cart;
