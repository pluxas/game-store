import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="bg-cart-bg p-7 bg-no-repeat mt-8">
            <h1 className="font-fontFamily font-extrabold text-3xl text-white">
                Войдите или зарегистрируйтесь
            </h1>
            <p className="mt-3 font-fontFamily font-medium text-xl text-white">
                Вы сможете накапливать
                <span className="font-extrabold">бонусные рубли</span>
                <br />и использовать их при оплате до
                <span className="font-extrabold">50%</span> стоимости товаров.
            </p>
            <Link to="/Registration">
                <button className="border border-solid bg-white rounded-2xl py-3 px-6 font-fontFamily font-normal text-base text-black mt-8">
                    Войти
                </button>
            </Link>
        </div>
    );
};

export default Banner;
