import { useTranslation } from "react-i18next";
import { GlobalSvgIcons } from "../../assets/icons/GlobalSvgIcons";
import supportImg from "../../assets/images/supportImg.png";

import styles from "./Support.module.scss";

const Support = () => {
    const {t} = useTranslation()
    
    return (
        <div>
            <div className="flex items-center mt-11">
                <h1 className="font-fontFamily font-extrabold text-6xl text-white absolute">
                    {t('88')}
                </h1>
                <img className="ml-[690px]" src={supportImg} alt="" />
            </div>
            <div className={styles.block}></div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-24 border border-solid border-[#13101b] rounded-2xl px-10 py-12">
                    <div>
                        <p className="font-fontFamily font-medium text-xl text-clear">
                            {t('89')}
                        </p>
                        <h1 className="font-fontFamily font-semibold text-4xl text-white mt-2">
                            Support.Gmail.com
                        </h1>
                    </div>
                    <div>
                        <GlobalSvgIcons id="copy" />
                    </div>
                </div>
                <div className="flex items-center gap-24 border border-solid border-[#13101b] rounded-2xl px-10 py-12">
                    <div>
                        <p className="font-fontFamily font-medium text-xl text-clear">
                            {t('89')}
                        </p>
                        <h1 className="font-fontFamily font-semibold text-4xl text-white mt-2">
                            Support.Gmail.com
                        </h1>
                    </div>
                    <div>
                        <GlobalSvgIcons id="copy" />
                    </div>
                </div>
            </div>
            <h1 className="font-fontFamily font-semibold text-5xl text-white mt-20">
                FAQ
            </h1>
            <div className="py-6 px-10">
                <div className="flex items-center justify-between cursor-pointer mt-6">
                    <h1 className="font-fontFamily font-extrabold text-lg text-white">
                        {t('90')}
                    </h1>
                    <div className="w-[25px] h-[25px] text-clear">+</div>
                </div>
                <div className="flex items-center justify-between cursor-pointer mt-8">
                    <h1 className="font-fontFamily font-extrabold text-lg text-white">
                        {t('90')}
                    </h1>
                    <div className="w-[25px] h-[25px] text-clear">+</div>
                </div>
                <div className="flex items-center justify-between cursor-pointer mt-8">
                    <h1 className="font-fontFamily font-extrabold text-lg text-white">
                        {t('90')}
                    </h1>
                    <div className="w-[25px] h-[25px] text-clear">+</div>
                </div>
                <div className="flex items-center justify-between cursor-pointer mt-8">
                    <h1 className="font-fontFamily font-extrabold text-lg text-white">
                        {t('90')}
                    </h1>
                    <div className="w-[25px] h-[25px] text-clear">+</div>
                </div>
            </div>
        </div>
    );
};

export default Support;
