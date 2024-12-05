import LanguageModal from "./LanguageModal";
import MoneyModal from "./MoneyModal";
import styles from "../Header.module.scss";

const Modal = ({miniModal, handleChangeLanguage, language, currency, handleChangeCurrency}) => {
  const languageType = ["Русский RU", "English EN"]
  const currencyType = ["$", "€", "₽"]

    return (
        <div
            className={
                miniModal ? styles["miniModal__active"] : styles.miniModal
            }
        >
            <div className="flex flex-col">
                {languageType.map((item, index) => (
                    <LanguageModal
                        key={index}
                        item={item}
                        selectedItem={language.language}
                        onClick={handleChangeLanguage}
                    />
                ))}
            </div>
            <div className="border border-solid border-[#171320] w-full my-2"></div>
            <div className="flex items-center gap-2">
                {currencyType.map((item, index) => (
                    <MoneyModal
                        key={index}
                        item={item}
                        selectedItem={currency}
                        onClick={() => handleChangeCurrency(item)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Modal;
