import { useState } from "react";

import styles from '../../Catalog.module.scss'

import { GlobalSvgIcons } from "../../../../assets/icons/GlobalSvgIcons";
import { GlobalImages } from "../../../../assets/images/GlobalImages";

const FilterAccountType = () => {
    const [typesModal, setTypesModal] = useState(false);

    const keys = ["Аккаунт", "Лицинзионный ключ", "Активация", "Steam"];

    const changeState = () => {
        setTypesModal(!typesModal)
    }

    return (
        <div className="mt-10">
            <div className="flex items-center justify-between cursor-pointer" onClick={changeState}>
                <p className="font-fontFamily font-semibold text-xl text-white">Тип аккаунта</p>
                {typesModal ? <GlobalImages id='down'/> : <GlobalSvgIcons id="up" />}
            </div>
            <div style={typesModal ? {display: "none"} : {display: "block"}}>
                {keys.map((item, index) => (
                    <label className={styles.checkbox_container} key={index}>
                        <input className="w-6 h-6" type="checkbox" />
                        <span className={styles.custom_checkbox}></span>
                        <p className="font-fontFamily font-normal text-lg text-white">{item}</p>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default FilterAccountType;
