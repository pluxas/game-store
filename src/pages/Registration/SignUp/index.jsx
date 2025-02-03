import { useEffect, useState } from "react";

import { GlobalSvgIcons } from "../../../assets/icons/GlobalSvgIcons";
import {
    setEmail,
    setFirstName,
    setLastName,
    setPassword,
    setUser,
    setUserName,
} from "../../../slices/Signup";

import {
    createUserWithEmailAndPassword,
    getAuth,
    sendEmailVerification,
    updateProfile,
} from "firebase/auth";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SignUp = ({ page }) => {
    const dispatch = useDispatch();
    const email = useSelector((state) => state.SignUpParameters.email);
    const password = useSelector((state) => state.SignUpParameters.password);
    const name = useSelector((state) => state.SignUpParameters.firstName);
    const lastName = useSelector((state) => state.SignUpParameters.lastName);

    const {t} = useTranslation()
    // const [error, setError] = useState('')
    // const [images, setImages] = useState([]);

    const navigate = useNavigate();

    // const handleFileChange = (e) => {
    //     const files = Array.from(e.target.files);
    //     const imageFiles = files.map((file) => ({
    //         url: URL.createObjectURL(file),
    //     }));
    //     setImages(imageFiles);
    // };


    const authentication = () => {
        const auth = getAuth();
        if (email.length !== 0 && password.length !== 0 && name.length !== 0) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: `${name}`,
                    });
                    sendEmailVerification(user);

                    dispatch(setEmail(""));
                    dispatch(setPassword(""));
                    dispatch(setFirstName(""));
                    navigate("/Profile");
                })
                .catch();
        } else {
            alert("Пожалуйста, заполните все обязательные поля!");
        }
    };

    // useEffect(() => {
    //     return () => images.forEach((img) => URL.revokeObjectURL(img.url));
    // }, [images]);

    // error !== '' ? alert(error) : ''

    return (
        <div className="flex flex-col items-center w-[400px]">
            <h1 className="font-fontFamily font-semibold text-3xl text-white text-center">
                {t('146')}
            </h1>
            <p className="font-fontFamily font-medium text-base text-center text-slate-300 mt-3">
                {t('145')}
            </p>
            <div className="flex items-center gap-4 mt-12 relative">
                <div
                    className="flex items-center gap-2 border border-solid border-gray-600 py-3 px-12 rounded-xl cursor-pointer"
                    onClick={() =>
                        alert(t('156'))
                    }
                >
                    <GlobalSvgIcons id="google" />
                    <p className="font-fontFamily font-medium text-lg text-white">
                        Google
                    </p>
                    <p className="absolute font-fontFamily font-semibold text-lg text-gray-500 top-12 left-0">
                        {t('140')}
                    </p>
                </div>
                <div
                    className="flex items-center gap-2 border border-solid border-gray-600 py-3 px-12 rounded-xl cursor-pointer"
                    onClick={() =>
                        alert(t('156'))
                    }
                >
                    <GlobalSvgIcons id="github" />
                    <p className="font-fontFamily font-medium text-lg text-white">
                        Github
                    </p>
                    <p className="absolute font-fontFamily font-semibold text-lg text-gray-500 top-12 right-0">
                        {t('140')}
                    </p>
                </div>
            </div>
            <div>
                <div className="flex items-center my-7">
                    <div className="border border-solid border-gray-700 w-full"></div>
                    <p className="font-fontFamily font-medium text-xl text-gray-500 mx-2">
                        {t('141')}
                    </p>
                    <div className="border border-solid border-gray-700 w-full"></div>
                </div>
                <div className="flex items-center gap-5">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-fontFamily font-medium text-white text-xl">
                            {t('147')}
                        </h1>
                        <input
                            required
                            onChange={(e) =>
                                dispatch(setFirstName(e.target.value))
                            }
                            style={
                                name.length >= 3 ? { borderWidth: "0px" } : {}
                            }
                            value={name}
                            type="text"
                            id="input"
                            placeholder={t('157')}
                            className="w-full outline-none py-3 px-4 rounded-lg bg-gray-800 placeholder:text-gray-500 font-fontFamily font-semibold text-lg text-white border-0 border-solid border-red-600"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="font-fontFamily font-medium text-white text-xl">
                            {t('148')}
                        </h1>
                        <input
                            required
                            onChange={(e) =>
                                dispatch(setLastName(e.target.value))
                            }
                            value={lastName}
                            type="text"
                            placeholder={t('158')}
                            className="w-full outline-none py-3 px-4 rounded-lg bg-gray-800 placeholder:text-gray-500 font-fontFamily font-semibold text-lg text-white"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2 mt-6">
                    <h1 className="font-fontFamily font-medium text-white text-xl">
                        {t('149')}
                    </h1>
                    <button className="w-full outline-none py-3 px-4 rounded-lg bg-gray-800 font-fontFamily font-semibold text-lg text-white">{t('150')}</button>
                    {/* <input
                        placeholder="Загрузить фото"
                        type="file"
                        multiple
                        className="opacity-0 -mt-14 w-full p-2"
                        onChange={handleFileChange}
                    /> */}
                    {/* {images.map((item, index) => (
                        <img
                            className="w-44 h-44 rounded-full mt-5"
                            key={index}
                            src={item.url}
                        />
                    ))} */}
                </div>
                <div className="flex flex-col gap-2 mt-6">
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
                        onChange={(e) => dispatch(setEmail(e.target.value))}
                        value={email}
                        id="input1"
                        type="email"
                        placeholder="example@gmail.com"
                        className="w-full outline-none py-3 px-4 rounded-lg bg-gray-800 placeholder:text-gray-500 font-fontFamily font-semibold text-lg text-white border-red-600"
                    />
                </div>
                <form
                    onSubmit={authentication}
                    className="flex flex-col gap-2 mt-4"
                >
                    <h1 className="font-fontFamily font-medium text-white text-xl">
                        {t('151')}
                    </h1>
                    <input
                        required
                        style={
                            password.length >= 5 ? { borderWidth: "0px" } : {}
                        }
                        onChange={(e) => dispatch(setPassword(e.target.value))}
                        value={password}
                        id="input2"
                        type="password"
                        placeholder={t('142')}
                        className="w-full placeholder:text-gray-500 outline-none py-3 px-4 rounded-lg bg-gray-800 font-fontFamily font-semibold text-lg text-white border-red-600"
                    />
                </form>
                <button
                    className="bg-white rounded-lg py-3 font-fontFamily font-bold text-base mt-8 w-full"
                    onClick={authentication}
                >
                    {t('152')}
                </button>
                <input type="submit" />
                <p className="mt-5 font-fontFamily font-semibold text-base text-center text-gray-500">
                    {t('153')}
                    <span
                        className="text-white cursor-pointer"
                        onClick={() => page(false)}
                    >
                        {t('154')}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
