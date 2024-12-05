import { useEffect, useState } from "react";

import { GlobalSvgIcons } from "../../../../assets/icons/GlobalSvgIcons";
import { GlobalImages } from "../../../../assets/images/GlobalImages";
import Modal from "./Modal";

import { setCurrency } from "../../../../slices/changeCurrency";
import { setLanguage, setType } from "../../../../slices/changeLanguage";

import { useDispatch, useSelector } from "react-redux";

const HeaderBlock = () => {
    const [miniModal, setMiniModal] = useState(false);

    const dispatch = useDispatch();
    const currency = useSelector((state) => state.changingCurrency.currency);
    const language = useSelector((state) => state.changingLanguage);

    const globalLanguage = language.language;
    const typeOfLanguage = language.type;

    useEffect(() => {
        localStorage.setItem("currency", currency);
    }, [currency]);

    useEffect(() => {
        localStorage.setItem("language", globalLanguage);
        localStorage.setItem("typeOfLanguage", typeOfLanguage);
    }, [language]);

    const handleChangeLanguage = (language) => {
        setMiniModal(false);
        dispatch(setLanguage(language));
        dispatch(setType(language.slice(-2)));
    };

    const handleChangeCurrency = (currency) => {
        dispatch(setCurrency(currency));
        setMiniModal(false);
    };

    return (
        <header className="flex items-center justify-between mt-5">
            <div className="flex items-center gap-20 relative">
                <div
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={() => setMiniModal(!miniModal)}
                >
                    <h1 className="font-fontFamily font-semibold text-base text-white">
                        {language.type}
                        <span className="text-flesh mx-0.5">/</span>
                        {currency}
                    </h1>
                    {miniModal ? (
                        <GlobalSvgIcons id="up" />
                    ) : (
                        <GlobalImages id="down" />
                    )}
                </div>
                <Modal
                    miniModal={miniModal}
                    handleChangeCurrency={handleChangeCurrency}
                    handleChangeLanguage={handleChangeLanguage}
                    language={language}
                    currency={currency}
                />
                <p className="font-fontFamily font-semibold text-base text-white cursor-pointer">
                    Накопительный счет
                </p>
                <ul className="flex items-center gap-8">
                    {[
                        "Отзывы",
                        "Гарантии",
                        "Как купить",
                        "Накопительная",
                        "Заработай",
                    ].map((item, index) => (
                        <li
                            key={index}
                            className="font-fontFamily font-semibold text-base text-white cursor-pointer border-b-2 border-transparent hover:border-white transition duration-300"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center gap-6 cursor-pointer">
                <h1 className="font-fontFamily font-semibold text-base text-white">
                    Hanzed Rules
                </h1>
                <GlobalImages id="user_logo" />
            </div>
        </header>
    );
};

export default HeaderBlock;
