import { GlobalSvgIcons } from "../../../assets/icons/GlobalSvgIcons";

import { descriptionGame } from "./textForGame";

import styles from "./GameAbout.module.scss";
import { useDispatch } from "react-redux";
import { addingProduct } from "../../../slices/addingProductByCart";

const AboutGame = ({ game }) => {
    const { images, name, priceBecome, price, className } = game;
    const dispatch = useDispatch()

    return (
        <>
            <div className={styles[className] || "hidden"}></div>
            <div className="flex items-center gap-16">
                <img className="w-[300px] h-[400px] rounded-xl" src={images} alt="" />
                <div>
                    <h1 className="font-fontFamily font-extrabold text-4xl text-white">
                        Купить {name}
                    </h1>
                    <p className="flex items-center gap-2 my-5 font-fontFamily font-normal text-sm text-white">
                        <div className="w-2 h-2 rounded-full bg-[#01cb62]"></div>
                        В наличии
                    </p>
                    <div className="flex items-center gap-5 ">
                        <h1 className="font-fontFamily font-bold text-3xl text-white">
                            {priceBecome} P
                        </h1>
                        <h2 className="font-fontFamily font-bold text-2xl text-green">
                            -25%
                        </h2>
                        <h2 className="font-fontFamily font-bold text-2xl text-clear">
                            {price}
                        </h2>
                    </div>
                    <div className="mt-5 flex items-center gap-2">
                        <button className="py-5 px-10 bg-green rounded-2xl font-fontFamily font-semibold text-lg text-white">
                            Купить
                        </button>
                        <button onClick={() => dispatch(addingProduct(game))} className="py-5 px-10 bg-transparent border-2 border-solid rounded-2xl border-border-after-header font-fontFamily font-semibold text-lg text-white">
                            В корзину
                        </button>
                        <button className="py-4 px-3.5 rounded-full bg-clear">
                            <GlobalSvgIcons id="heart" />
                        </button>
                    </div>
                    <div className="my-10 flex items-center gap-20">
                        {descriptionGame.map((item) => (
                            <div key={item.id} className="flex flex-col gap-2">
                                <p className="font-fontFamily font-normal text-lg text-white">
                                    {item.text}
                                </p>
                                <p className="font-fontFamily font-semibold text-xl text-white">
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-7">
                        <div className="bg-transparent border border-solid border-border-after-header rounded-xl py-5 px-6 font-fontFamily font-normal text-[#97e238]">
                            Моментальная доставка
                        </div>
                        <div className="flex items-center gap-3 font-fontFamily font-semibold text-xl text-white">
                            <div className="border border-solid border-border-after-header rounded-full p-2">
                                <GlobalSvgIcons id="check" />
                            </div>
                            Гарантия качества
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutGame;
