import { useEffect, useState } from "react";

import { GlobalSvgIcons } from "../../../../assets/icons/GlobalSvgIcons";
import { GlobalImages } from "../../../../assets/images/GlobalImages";
import Modal from "./Modal";

import { setCurrency } from "../../../../slices/changeCurrency";
import { setLanguage, setType } from "../../../../slices/changeLanguage";
import { setUser, setUserName } from "../../../../slices/Signup";

import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useTranslation } from "react-i18next";

const HeaderBlock = () => {
    const auth = getAuth();
    const dispatch = useDispatch();

    const [miniModal, setMiniModal] = useState(false);
    const { t, i18n } = useTranslation()

    const currency = useSelector((state) => state.changingCurrency.currency);
    const language = useSelector((state) => state.changingLanguage);
    const name = useSelector((state) => state.SignUpParameters.userName);

    const user = auth.currentUser
    const userLogo = user?.photoURL
    const firstLetterOfName = name[0]?.toUpperCase()

    const navigate = useNavigate();

    const globalLanguage = language.language;
    const typeOfLanguage = language.type;

    useEffect(() => {
        return () => name;
    }, [name]);

    useEffect(() => {
        localStorage.setItem("currency", currency);
    }, [currency]);

    useEffect(() => {
        localStorage.setItem("language", globalLanguage);
        localStorage.setItem("typeOfLanguage", typeOfLanguage);
    }, [language]);


    const words = [
        {
            id: 1,
            title: "second",
        },
        {
            id: 2,
            title: "third",
            router: "Catalog",
        },
        {
            id: 3,
            title: "fourth",
            router: "Support",
        },
        {
            id: 4,
            title: "fifth",
            router: "OurAdvantages",
        },
    ];

    const handleChangeLanguage = (language) => {
        setMiniModal(false);
        dispatch(setLanguage(language));
        dispatch(setType(language.slice(-2)));
        i18n.changeLanguage(language.slice(-2).toLowerCase())
        .then(() => {
            console.log('Language successfully changed to:', language.slice(-2));
        })
        .catch((error) => {
            console.error('Error changing language:', error);
        });
    };

    const handleChangeCurrency = (currency) => {
        dispatch(setCurrency(currency));
        setMiniModal(false);
    };

    const signOutF = () => {
        signOut(auth)
            .then(() => {
                navigate("/");
                document.location.reload();
            })
            .catch((error) => {
                console.error(error.massage);
            });
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
                    {t('first')}
                </p>
                <ul className="flex items-center gap-8">
                    {words.map((item, index) => (
                        <Link
                            to={item.router}
                            key={index}
                            className="font-fontFamily font-semibold text-base text-white cursor-pointer border-b-2 border-transparent hover:border-white transition duration-300"
                        >
                            {t(`${item.title}`)}
                        </Link>
                    ))}
                </ul>
            </div>
            {user ? (
                <Link
                    to="/Profile"
                    className="flex items-center gap-6 cursor-pointer"
                >
                    <h1 className="font-fontFamily font-semibold text-base text-white">
                        {name}
                    </h1>
                    {userLogo !== null ?
                        <div><GlobalImages id="user_logo" /></div> : <div className="font-fontFamily font-semibold text-xl text-black py-2 px-4 rounded-full bg-white">{firstLetterOfName}</div>
                    }
                </Link>
            ) : (
                <Link
                    to="/Registration"
                    className="font-fontFamily font-semibold text-xl text-white bg-green py-2 px-5 rounded-xl"
                >
                    Войти
                </Link>
            )}
        </header>
    );
};

export default HeaderBlock;
