import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Banner = () => {
    const {t} = useTranslation()

    return (
        <div className="bg-cart-bg p-7 bg-no-repeat mt-8">
            <h1 className="font-fontFamily font-extrabold text-3xl text-white">
                {t('135')}
            </h1>
            <p className="mt-3 font-fontFamily font-medium text-xl text-white">
                {t('136')}
            </p>
            <Link to="/Registration">
                <button className="border border-solid bg-white rounded-2xl py-3 px-6 font-fontFamily font-normal text-base text-black mt-8">
                    {t('137')}
                </button>
            </Link>
        </div>
    );
};

export default Banner;
