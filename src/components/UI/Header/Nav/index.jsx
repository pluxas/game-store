import { useState } from "react";

import { GlobalSvgIcons } from "../../../../assets/icons/GlobalSvgIcons";
import { GlobalImages } from "../../../../assets/images/GlobalImages";

import { AllGames } from "../../../../games/allGames";

import { Link } from "react-router-dom";

import styles from "../Header/Header.module.scss";
import Search from "./Search";
import { useSelector } from "react-redux";


const Nav = () => {
    const [search, setSearch] = useState("");
    const [searchModal, setSearchModal] = useState(false);
    const state = useSelector((state) => state.addingProduct.cart)

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
        <>
            {searchModal && <Search search={search} setSearch={setSearch} closeSearchModal={closeSearchModal} searchModal={searchModal} filterGames={filterGames} />}
            <nav className="flex items-center justify-between mt-5">
                <Link
                    to={"/"}
                    className="flex items-center gap-3 cursor-pointer"
                >
                    <GlobalImages id="logo" />
                    <h1 className="font-fontFamily font-extrabold text-3xl text-white">
                        Playnchill
                    </h1>
                </Link>
                <div className="flex items-center gap-9">
                    <div className="cursor-pointer">
                        <GlobalSvgIcons id="lines" />
                    </div>
                    <div onClick={openSearchModal} className="flex items-start justify-between py-4 px-7 bg-input rounded-xl w-input cursor-pointer relative">
                        <div className="text-white">Поиск</div>
                        <GlobalSvgIcons id="lupv" />
                    </div>
                </div>
                <p className="font-fontFamily font-medium text-base text-green cursor-pointer">
                    Бесплатно
                </p>
                <div className="flex items-center gap-6">
                    <div className="cursor-pointer">
                        <GlobalSvgIcons id="heart" />
                    </div>
                    <div className="relative cursor-pointer">
                        <span className={styles["span"]}>{lengthCart}</span>
                        <GlobalSvgIcons id="cart" />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
