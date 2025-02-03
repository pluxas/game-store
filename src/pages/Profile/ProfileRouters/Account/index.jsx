import { useSelector } from "react-redux";

import { GlobalImages } from "../../../../assets/images/GlobalImages";
import changeProduct from "../../../../assets/images/changeProduct.png";
import { getAuth } from "firebase/auth";
import { useTranslation } from "react-i18next";

const Account = () => {
    const userInformation = useSelector((state) => state.SignUpParameters.user);
    const phoneNumber = userInformation?.phoneNumber || ''
    const email = userInformation?.email

    const auth = getAuth()

    const name = auth.currentUser?.displayName || 'Guest';
    const userLogo = auth.currentUser?.photoURL 
    const firstLetterOfName = name[0].toUpperCase()

    const {t} = useTranslation()

    return (
        <div className="bg-slate-900 py-6 px-5 w-full relative">
            <h1 className="font-fontFamily font-semibold text-3xl text-white mb-6">
                {t('162')}
            </h1>
            <div className="border border-solid border-white absolute w-full left-0"></div>
            <div>
                <div className="flex items-center justify-between mt-14">
                    {userLogo !== null ? <div className="relative flex">
                        <GlobalImages id="user_logo" />
                        <img
                            className="absolute w-10 h-10"
                            src={changeProduct}
                            alt=""
                        />
                    </div> : <div className="font-fontFamily font-semibold text-3xl text-black py-4 px-6 rounded-full bg-white">{firstLetterOfName}</div>}
                    <div className="flex items-center gap-5">
                        <img className="w-10 h-10" src={changeProduct} alt="" />
                        <h1 className="font-fontFamily font-semibold text-xl text-blue-500">
                            {t('168')}
                        </h1>
                    </div>
                </div>
                <div className="mt-7">
                    <h1 className="font-fontFamily font-semibold text-xl text-white">
                        Name
                    </h1>
                    <p className="font-fontFamily font-medium text-lg text-gray-400 bg-black py-3 px-5 mt-3 w-96 rounded-xl">
                        {name}
                    </p>
                </div>
                <div className="mt-10">
                    <h1 className="font-fontFamily font-semibold text-xl text-white">
                        Phone number
                    </h1>
                    <p className="font-fontFamily font-medium text-lg text-gray-400 bg-black py-3 px-5 mt-3 w-96 rounded-xl">
                        {phoneNumber !== '' ? phoneNumber : 'Телефон номер не задан'}
                    </p>
                </div>
                <div className="mt-10">
                    <h1 className="font-fontFamily font-semibold text-xl text-white">
                        Email
                    </h1>
                    <p className="font-fontFamily font-medium text-lg text-gray-400 bg-black py-3 px-5 mt-3 w-96 rounded-xl">
                        {email}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Account;
