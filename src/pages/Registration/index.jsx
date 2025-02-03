import { useEffect, useState } from "react";

import styles from "./Registration.module.scss";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import { useTranslation } from "react-i18next";

const Registration = () => {
    const [page, setPage] = useState(JSON.parse(localStorage.getItem('loginPageOrRegister')));

    const {t} = useTranslation()

    useEffect(() => {
        localStorage.setItem('loginPageOrRegister', JSON.stringify(page))
    }, [page])

    return (
        <div className="flex items-center justify-between gap-48 mt-10 max-w-1200 w-full mx-auto">
            <div className={styles.block}>
                <div className="absolute bottom-16 flex flex-col items-center gap-5">
                    <p className="font-fontFamily font-medium text-xl text-white text-center">
                        PlayChill
                    </p>
                    <h1 className="font-fontFamily font-semibold text-2xl text-white text-center w-[600px]">
                        {t('159')}
                    </h1>
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-3 bg-white py-3 px-2 rounded-xl cursor-pointer">
                            <p className="bg-black px-2 rounded-full font-fontFamily font-semibold text-white">
                                1
                            </p>
                            <p className="font-fontFamily font-extrabold text-lg">
                                {t('144')}
                            </p>
                        </div>
                        <div className="flex items-center gap-3 bg-white py-3 px-2 rounded-xl cursor-pointer">
                            <p className="bg-black px-2 rounded-full font-fontFamily font-semibold text-white">
                                2
                            </p>
                            <p className="font-fontFamily font-extrabold text-lg">
                                {t('160')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {page ? (
                    <SignUp page={setPage} />
                ) : (
                    <LogIn setPage={setPage} />
                )}
            </div>
        </div>
    );
};

export default Registration;
