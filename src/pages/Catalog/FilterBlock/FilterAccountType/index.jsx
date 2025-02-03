import { useState } from "react";

import styles from '../../Catalog.module.scss'

import { GlobalSvgIcons } from "../../../../assets/icons/GlobalSvgIcons";
import { GlobalImages } from "../../../../assets/images/GlobalImages";
import { useTranslation } from "react-i18next";

const FilterAccountType = () => {
    const [typesModal, setTypesModal] = useState(false);

    const {t} = useTranslation()

    const keys = ["79", "80", "81", "Steam"];

    const changeState = () => {
        setTypesModal(!typesModal)
    }

    return (
        <div className="mt-10">
            <div className="flex items-center justify-between cursor-pointer" onClick={changeState}>
                <p className="font-fontFamily font-semibold text-xl text-white">{t('78')}</p>
                {typesModal ? <GlobalImages id='down'/> : <GlobalSvgIcons id="up" />}
            </div>
            <div style={typesModal ? {display: "none"} : {display: "block"}}>
                {keys.map((item, index) => (
                    <label className={styles.checkbox_container} key={index}>
                        <input className="w-6 h-6" type="checkbox" />
                        <span className={styles.custom_checkbox}></span>
                        <p className="font-fontFamily font-normal text-lg text-white">{t(`${item}`)}</p>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default FilterAccountType;
