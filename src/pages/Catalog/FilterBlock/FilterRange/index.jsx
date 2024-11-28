import { useDispatch, useSelector } from 'react-redux';

import { setRange } from '../../../../slices/blockFilter/filterRange';
import styles from '../../Catalog.module.scss';
import { useEffect } from 'react';

const FilterRange = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.filterByRange.item)

    useEffect(() => {
        localStorage.setItem('range', state)
    })

    return (
        <div className="mt-10">
            <p className="font-fontFamily font-bold text-xl text-white">
                Цена P
            </p>
            <div className="flex items-center">
                <div className="w-[121px] flex flex-col gap-3">
                    <p className="font-fontFamily font-normal text-lg text-white ml-5">
                        от
                    </p>
                    <p className="font-fontFamily font-normal text-lg text-white border border-solid border-[#1e1c27] rounded-lg rounded-r-none py-3 px-5">
                        500
                    </p>
                </div>
                <div className="w-[121px] flex flex-col gap-3">
                    <p className="font-fontFamily font-normal text-lg text-white ml-5">
                        до
                    </p>
                    <p className="font-fontFamily font-normal text-lg text-white border border-solid border-[#1e1c27] rounded-lg rounded-l-none py-3 px-5">
                        2 500
                    </p>
                </div>
            </div>
            <input
                type="range"
                id="volume"
                name="volume"
                min="500"
                max="2500"
                value={state}
                onChange={(e) => dispatch(setRange(e.target.value))}
                className={styles.slider}
            />
        </div>
    );
};

export default FilterRange;
