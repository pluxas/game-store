import { Link } from "react-router-dom";
import { GlobalSvgIcons } from "../../../../assets/icons/GlobalSvgIcons";

import trustpilot from "../../../../assets/images/trustpilot.png";
import { useTranslation } from "react-i18next";

const Recall = () => {
    const {t} = useTranslation()

    return (
        <div className="mt-16">
            <div className="flex items-center justify-between">
                <h1 className="font-fontFamily font-medium text-3xl text-white">
                    {t('41')}
                </h1>
                <Link to='/Reviews' className="flex items-center gap-3 border border-solid border-border-after-header rounded-lg py-4 px-10 font-secondFamily font-medium text-base text-[#336edc]">
                    {t('42')} <GlobalSvgIcons id="needle" />
                </Link>
            </div>
            <div className="flex items-center gap-5 mt-14">
                <div className="flex flex-col items-center gap-y-4">
                    <p className="font-secondFamily font-medium text-2xl text-white">
                        Excellent
                    </p>
                    <GlobalSvgIcons id="group_stars" />
                    <p className="font-secondFamily font-normal text-base text-white">
                        Based on{" "}
                        <span className="underline">25,806 reviews</span>
                    </p>
                    <img src={trustpilot} alt="" />
                </div>
                <div className="flex items-center gap-5 ">
                    <GlobalSvgIcons id="button_left" />
                    <div className="flex items-center gap-10">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <GlobalSvgIcons id="mini_stars" />
                                <p className="font-secondFamily font-normal text-base text-[#969696]">
                                    7 days ago
                                </p>
                            </div>
                            <p className="font-secondFamily font-medium text-base text-white">
                                Cheap keys exist
                            </p>
                            <p className="font-secondFamily font-normal text-base text-white">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Etiam
                            </p>
                            <p className="font-secondFamily font-normal text-base text-[#969696]">
                                eLitee
                            </p>
                            <p className="font-secondFamily font-normal text-base text-white">
                                Showing out 4 & 5 stars reviews
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <GlobalSvgIcons id="mini_stars" />
                                <p className="font-secondFamily font-normal text-base text-[#969696]">
                                    7 days ago
                                </p>
                            </div>
                            <p className="font-secondFamily font-medium text-base text-white">
                                Cheap keys exist
                            </p>
                            <p className="font-secondFamily font-normal text-base text-white">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Etiam
                            </p>
                            <p className="font-secondFamily font-normal text-base text-[#969696]">
                                eLitee
                            </p>
                            <p className="font-secondFamily font-normal text-base text-white">
                                Showing out 4 & 5 stars reviews
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <GlobalSvgIcons id="mini_stars" />
                                <p className="font-secondFamily font-normal text-base text-[#969696]">
                                    7 days ago
                                </p>
                            </div>
                            <p className="font-secondFamily font-medium text-base text-white">
                                Cheap keys exist
                            </p>
                            <p className="font-secondFamily font-normal text-base text-white">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Etiam
                            </p>
                            <p className="font-secondFamily font-normal text-base text-[#969696]">
                                eLitee
                            </p>
                            <p className="font-secondFamily font-normal text-base text-white">
                                Showing out 4 & 5 stars reviews
                            </p>
                        </div>
                    </div>
                    <GlobalSvgIcons id="button_right" />
                </div>
            </div>
        </div>
    );
};

export default Recall;
