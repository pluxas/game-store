import { GlobalImages } from "../../../assets/images/GlobalImages";
import { Routers } from "./Routers";

import { NavLink } from "react-router-dom";

import { getAuth } from "firebase/auth";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const RouteBlock = () => {
    const name = useSelector((state) => state.SignUpParameters.userName)
    const auth = getAuth();

    const userLogo = auth.currentUser?.photoURL
    const firstLetterOfName = name[0]?.toUpperCase()

    const {t} = useTranslation()

    return (
        <div className="w-72">
            <div className="flex items-center gap-5 bg-slate-900 p-4">
                {userLogo !== null ? <GlobalImages id="user_logo" /> : <div className="font-fontFamily font-semibold text-xl text-black py-2 px-4 rounded-full bg-white">{firstLetterOfName}</div>}
                <div className="flex flex-col gap-">
                    <p className="font-fontFamily font-normal text-sm text-white">
                        {t('169')}
                    </p>
                    <h1 className="font-fontFamily font-semibold text-2xl text-white">
                        {name}
                    </h1>
                </div>
            </div>
            <div className="mt-8 flex flex-col bg-slate-900">
                {Routers.map((item) => (
                    <NavLink
                        style={({ isActive }) => ({
                            backgroundColor: isActive ? "blue" : "transparent",
                        })}
                        to={item.route}
                        className="font-fontFamily font-bold text-xl text-white py-3 px-5 cursor-pointer"
                        key={item.id}
                    >
                        {t(`${item.text}`)}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default RouteBlock;
