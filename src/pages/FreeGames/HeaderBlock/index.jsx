import styles from "./HeaderBlock.module.scss";
import userImg from "../../../assets/images/user.png";
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const HeaderBlock = () => {
    const targetDate = new Date("2024-12-21T23:59:59");
    const { t } = useTranslation()

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate - now;

        if (difference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [targetDate])

    return (
        <div className="bg-freeGameBg w-[1800px] h-[680px] bg-cover -ml-[270px] px-[270px] py-12 flex items-start justify-between">
            <div className={styles.block}>
                <p className="font-fontFamily font-semibold text-2xl text-clear">
                    #5966
                    <span className="text-green font-extrabold">
                        Cities in Motion 2
                    </span>
                </p>
                <h1 className="font-fontFamily font-extrabold text-5xl text-white my-5">
                    {t('105')}
                </h1>
                <p className="font-fontFamily font-medium text-lg text-white my-5">
                    {t('106')}
                </p>
                <div className="grid grid-cols-4 gap-2.5">
                    <div className="flex flex-col items-center gap-2.5">
                        <p className="font-fontFamily font-medium text-sm text-white">
                            {t('108')}
                        </p>
                        <h1 className="bg-clear rounded-lg h-16 p-3 py-6 font-fontFamily font-extrabold text-5xl leading-3 text-white">
                            {timeLeft.days}
                        </h1>
                    </div>
                    <div className="flex flex-col items-center gap-2.5">
                        <p className="font-fontFamily font-medium text-sm text-white">
                            {t('109')}
                        </p>
                        <h1 className="bg-clear rounded-lg h-16 p-3 py-6 font-fontFamily font-extrabold text-5xl leading-3 text-white">
                            {timeLeft.hours}
                        </h1>
                    </div>
                    <div className="flex flex-col items-center gap-2.5">
                        <p className="font-fontFamily font-medium text-sm text-white">
                            {t('110')}
                        </p>
                        <h1 className="bg-clear rounded-lg h-16 p-3 py-6 font-fontFamily font-extrabold text-5xl leading-3 text-white">
                            {timeLeft.minutes}
                        </h1>
                    </div>
                    <div className="flex flex-col items-center gap-2.5">
                        <p className="font-fontFamily font-medium text-sm text-white">
                            {t('111')}
                        </p>
                        <h1 className="bg-clear rounded-lg h-16 p-3 py-6 font-fontFamily font-extrabold text-5xl leading-3 text-white">
                            {timeLeft.seconds}
                        </h1>
                    </div>
                </div>
                <button className="w-full py-6 bg-registration rounded-2xl font-fontFamily font-semibold text-lg text-green mt-5">
                    {t('112')}
                </button>
            </div>
            <div className="flex items-center gap-2.5 bg-[#06030F] rounded-xl py-4 px-6">
                <img src={userImg} alt="" />
                <p className="font-fontFamily font-extrabold text-2xl text-white">
                    199
                </p>
            </div>
        </div>
    );
};

export default HeaderBlock;
