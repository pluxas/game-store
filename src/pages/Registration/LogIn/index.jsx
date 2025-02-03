import { useState } from "react";

import { GlobalSvgIcons } from "../../../assets/icons/GlobalSvgIcons";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LogIn = ({ setPage }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const {t} = useTranslation()

    const LogIn = () => {
        const auth = getAuth();
        if ((email || password) !== 0) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log(userCredential);
                    setEmail("");
                    setPassword("");
                    navigate("/Profile");
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            document.getElementById("input1").style.borderWidth = "2px";
            document.getElementById("input2").style.borderWidth = "2px";
        }
    };

    return (
        <div className="flex flex-col w-[400px]">
            <h1 className="font-fontFamily font-semibold text-3xl text-white text-center">
                {t('138')}
            </h1>
            <p className="font-fontFamily font-medium text-base text-center text-slate-300 mt-3">
                {t('139')}
            </p>
            <div className="flex items-center gap-8 mt-12 relative">
                <button className="flex items-center gap-2 border border-solid border-gray-600 py-3 px-12 rounded-xl">
                    <GlobalSvgIcons id="google" />
                    <p
                        className="font-fontFamily font-medium text-lg text-white"
                        onClick={() =>
                            alert(t('156'))
                        }
                    >
                        Google
                    </p>
                    <p className="absolute font-fontFamily font-semibold text-lg text-gray-500 top-12 left-0">
                        {t('140')}
                    </p>
                </button>
                <button className="flex items-center gap-2 border border-solid border-gray-600 py-3 px-12 rounded-xl">
                    <GlobalSvgIcons id="github" />
                    <p
                        className="font-fontFamily font-medium text-lg text-white"
                        onClick={() =>
                            alert(t('156'))
                        }
                    >
                        Github
                    </p>
                    <p className="absolute font-fontFamily font-semibold text-lg text-gray-500 top-12 right-0">
                        {t('140')}
                    </p>
                </button>
            </div>
            <div className="flex items-center my-7">
                <div className="border border-solid border-gray-700 w-full"></div>
                <p className="font-fontFamily font-medium text-xl text-gray-500 mx-2">
                    {t('141')}
                </p>
                <div className="border border-solid border-gray-700 w-full"></div>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="font-fontFamily font-medium text-white text-xl">
                    Email
                </h1>
                <input
                    required
                    style={
                        email.endsWith("@gmail.com")
                            ? { borderWidth: "0px" }
                            : {}
                    }
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    id="input1"
                    placeholder="example@gmail.com"
                    className="w-full outline-none py-3 px-4 rounded-lg bg-gray-800 placeholder:text-gray-500 font-fontFamily font-semibold text-lg text-white border-0 border-solid border-red-600"
                />
            </div>
            <form onSubmit={LogIn} className="flex flex-col gap-2 mt-4">
                <h1 className="font-fontFamily font-medium text-white text-xl">
                    {t('151')}
                </h1>
                <input
                    required
                    style={password.length >= 6 ? { borderWidth: "0px" } : {}}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    id="input2"
                    placeholder={t('142')}
                    className="w-full placeholder:text-gray-500 outline-none py-3 px-4 rounded-lg bg-gray-800 font-fontFamily font-semibold text-lg text-white border-0 border-solid border-red-600"
                />
            </form>
            <button
                className="bg-white rounded-lg py-3 font-fontFamily font-bold text-base mt-8"
                onClick={LogIn}
            >
                Log in
            </button>
            <input type="submit" />
            <p className="mt-5 font-fontFamily font-semibold text-base text-center text-gray-500">
                {t('143')}
                <span
                    onClick={() => setPage(true)}
                    className="text-white cursor-pointer"
                >
                    {t('144')}
                </span>
            </p>
        </div>
    );
};

export default LogIn;
