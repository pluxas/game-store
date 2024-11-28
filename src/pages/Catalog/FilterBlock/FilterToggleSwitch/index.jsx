import { useEffect, useMemo } from "react";

import { useDispatch, useSelector } from "react-redux";

import { toggleFilter } from "../../../../slices/blockFilter/filterSlider";

import styles from "./Index.module.scss";

const FilterToggleSwitch = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.filterBySlider)


    const filter = useMemo(() => state.map(item => item.checked), [state])

    useEffect(() => {
        filter.map((item, index) => {
            localStorage.setItem(`filter_${index + 1}`, item)
        })
    }, [filter]);

    const changeSlider = (item) => {
        dispatch(toggleFilter(item))
    };

    return (
        <div>
            {state.map((item, index) => (
                <div className="flex items-center justify-between my-4" key={index}>
                    <p className="font-fontFamily font-bold text-xl text-white">
                        {item.title}
                    </p>
                    <div
                        style={
                            item.checked === true
                                ? { background: "#77be1d" }
                                : { background: "#1e1c27" }
                        }
                        onClick={() => changeSlider(item)}
                        className={styles.switch}
                    >
                        <input type="checkbox" className={styles.input} />
                        <div className={item.checked === true ? styles.slider_checked : styles.slider}></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FilterToggleSwitch;
