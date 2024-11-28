import { useState } from "react";

import GameDescription from "./GameDescriptions";
import SystemRequirements from "../SystemRequirements";

const RouterAboutGame = ({ game }) => {
    const [systemRequired, setSystemRequired] = useState("");
    const { system_required } = game;

    const changeState = (state) => {
        setSystemRequired(state);
    };

    return (
        <div>
            <div className="flex items-center mt-16 gap-10">
                <h1
                    onClick={() => changeState("")}
                    className="font-fontFamily font-normal text-2xl text-white cursor-pointer"
                    style={{
                        color: systemRequired === "" ? "#FFF" : "#868686",
                    }}
                >
                    Описание товара
                </h1>
                <h1
                    onClick={() => changeState("second")}
                    className="font-fontFamily font-normal text-2xl text-white cursor-pointer"
                    style={{
                        color: systemRequired === "second" ? "#fff" : "#868686",
                    }}
                >
                    Системные требования
                </h1>
            </div>
            {systemRequired === "second" ? (
                <SystemRequirements game={system_required} />
            ) : (
                <GameDescription game={game} />
            )}
        </div>
    );
};

export default RouterAboutGame;
