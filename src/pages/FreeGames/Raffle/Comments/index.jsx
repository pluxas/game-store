import { useTranslation } from "react-i18next";

const Comments = () => {
    const {t} = useTranslation()

    return (
        <div>
            <h1 className="font-fontFamily font-semibold text-4xl text-white">
                {t('118')} <span className="text-2xl text-clear">3</span>
            </h1>
            <div className="mt-16 flex flex-col gap-20">
                <div className="flex flex-col items-start gap-5">
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-full bg-[#8F6DEE]"></div>
                        <h1 className="font-fontFamily font-medium text-2xl text-green">
                            Юлия В.
                        </h1>
                    </div>
                    <p className="font-fontFamily font-normal text-xl text-white">
                        {t('119')}
                    </p>
                </div>
                <div className="flex flex-col items-start gap-5">
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-full bg-[#8F6DEE]"></div>
                        <h1 className="font-fontFamily font-medium text-2xl text-green">
                            Юлия В.
                        </h1>
                    </div>
                    <p className="font-fontFamily font-normal text-xl text-white">
                        {t('119')}
                    </p>
                </div>
                <div className="flex flex-col items-start gap-5">
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-full bg-[#8F6DEE]"></div>
                        <h1 className="font-fontFamily font-medium text-2xl text-green">
                            Юлия В.
                        </h1>
                    </div>
                    <p className="font-fontFamily font-normal text-xl text-white">
                        {t('119')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Comments;
