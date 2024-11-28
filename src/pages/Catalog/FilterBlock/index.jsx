import { useEffect } from "react";
import FilterAccountType from "./FilterAccountType";
import FilterRange from "./FilterRange";
import FilterToggleSwitch from "./FilterToggleSwitch";
import { useDispatch, useSelector } from "react-redux";
import { setInput } from "../../../slices/blockFilter/filterSearch";

const FilterBlock = () => {
    const state = useSelector((state) => state.filterByName.input)
    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.setItem('filterSearch', state)
    }, [state])

    return (
        <div className="">
            <input
                className="border border-solid border-border-after-header rounded-xl bg-transparent focus:outline px-5 py-3 font-fontFamily font-medium text-lg text-[#606367] placeholder:text-lg"
                type="text"
                placeholder="Я ищу.."
                onChange={(e) => dispatch(setInput(e.target.value))}
                value={state}
            />
            <FilterRange/>
            <FilterAccountType />
            <FilterAccountType />
            <FilterToggleSwitch />
            <FilterAccountType />
        </div>
    );
};

export default FilterBlock;
