import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "../../../slices/blockFilter/filterPrice";
import FilteredGames from "./FilteredGames";
import { useTranslation } from "react-i18next";

const FilterBlockGame = () => {
    const state = useSelector((state) => state.filterByPrice.type)
    const dispatch = useDispatch()

    const {t} = useTranslation()

    useEffect(() => {
        localStorage.setItem('filterByPrice', state)
    }, [state])

    return (
        <div className="w-full">
            <div className="flex items-center justify-between">
                <h1 className="font-secondFamily font-bold text-4xl text-white">{t('85')}</h1>
                <select className="py-4 px-7 rounded-xl bg-[#1b1729] text-white " onChange={(e) => dispatch(setPrice(e.target.value))} name="" id="">
                    {["86", "87"].map((item, index) => (
                        <option className="font-fontFamily font-normal text-base text-white border-none" key={index} value={item}>{t(`${item}`)}</option>
                    ))}
                </select>
            </div>
            <FilteredGames/>
        </div>
    );
};

export default FilterBlockGame;
