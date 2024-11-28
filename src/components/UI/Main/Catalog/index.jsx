import { Link } from "react-router-dom";
import { AllGames } from "../../../../games/allGames";

import Card from "./Cards";

const Catalog = () => {
    return (
        <div className="mt-20">
            <ul className="flex items-center gap-8 mb-5">
                <div className="relative">
                    <li className="font-fontFamily font-medium text-xl text-white cursor-pointer">
                        Новинки
                    </li>
                    <div className="border border-solid w-full absolute mt-5"></div>
                </div>
                {["Аккаунты", "Ключи", "Активация", "Прокачка"].map(
                    (item, idx) => (
                        <li
                            key={idx}
                            className="font-fontFamily font-medium text-xl text-[#868686] cursor-pointer"
                        >
                            {item}
                        </li>
                    )
                )}
            </ul>
            <div className="border border-solid border-[#13101B]"></div>
            <div className="grid grid-cols-4 gap-5 gap-y-16 mt-10">
                {AllGames.map((game) => (
                    <Card game={game} key={game.id} />
                ))}
            </div>
            <Link to='/Catalog'>
                <div className="cursor-pointer border border-solid border-border-after-header rounded-2xl mt-10 py-7 text-center font-fontFamily font-semibold text-lg text-[#366edc]">
                    Перейти в каталог
                </div>
            </Link>
        </div>
    );
};

export default Catalog;
