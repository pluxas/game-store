import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { GlobalSvgIcons } from "../../../../assets/icons/GlobalSvgIcons";
import { GlobalImages } from "../../../../assets/images/GlobalImages";
import { AllGames } from "../../../../games/allGames";
import styles from "../Header/Header.module.scss";
import Search from "./Search";
import { useTranslation } from "react-i18next";


const Nav = () => {
    const [search, setSearch] = useState("");
    const [searchModal, setSearchModal] = useState(false);
    const state = useSelector((state) => state.addingProduct.cart)

    const { t } = useTranslation()

    const filterGames = AllGames.filter((game) => {
        return game.name.toLowerCase().includes(search.toLowerCase())
    });

    const openSearchModal = () => {
        setSearchModal(true);
    }

    const closeSearchModal = () => {
        setSearchModal(false);
    }

    const lengthCart = state.length

    return (
        <div>
            {searchModal && <Search search={search} setSearch={setSearch} closeSearchModal={closeSearchModal} searchModal={searchModal} filterGames={filterGames} />}
            <div>
                
            </div>
            <nav className="flex items-center justify-between mt-5">
                <div className="cursor-pointer block p-3 smallSize:hidden">
                    <GlobalSvgIcons id="lines" />
                </div>
                <Link
                    to={"/"}
                    className="flex items-center gap-3 cursor-pointer"
                >
                    <GlobalImages id="logo" />
                    <h1 className="font-fontFamily font-extrabold text-xl mr-14 text-white smallSize:text-3xl smallSize:mr-0">
                        Playnchill
                    </h1>
                </Link>
                <div className="hidden smallSize:block">
                    <div onClick={openSearchModal} className="flex items-start justify-between py-4 px-7 bg-gray-900 rounded-xl w-[300px] lg:w-input cursor-pointer relative tabletSize:w-[450px]   ">
                        <div className="text-white">{t('sixth')}</div>
                        <GlobalSvgIcons id="lupv" />
                    </div>
                </div>
                <div className="block cursor-pointer smallSize:hidden" onClick={openSearchModal}>
                    <GlobalSvgIcons id="lupv_two" />
                </div>
                <Link to='/Free' className="font-fontFamily font-medium text-base text-green cursor-pointer hidden smallSize:block">
                    {t('eighth')}
                </Link>
                <div className="flex items-center gap-6">
                    <div className="cursor-pointer hidden smallSize:block">
                        <GlobalSvgIcons id="heart" />
                    </div>
                    <Link to={"/Cart"} className="relative cursor-pointer mr-4 lg:mr-0">
                        <span className={styles["span"]}>{lengthCart}</span>
                        <GlobalSvgIcons id="cart" />
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
