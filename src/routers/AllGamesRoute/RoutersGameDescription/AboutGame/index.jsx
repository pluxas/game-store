import { useState } from "react";

import GameDescription from "./GameDescriptions";
import SystemRequirements from "../SystemRequirements";
import { useTranslation } from "react-i18next";

const RouterAboutGame = ({ game }) => {
    const [systemRequired, setSystemRequired] = useState("");

    const {t} = useTranslation()

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
                    {t('66')}
                </h1>
                <h1
                    onClick={() => changeState("second")}
                    className="font-fontFamily font-normal text-2xl text-white cursor-pointer"
                    style={{
                        color: systemRequired === "second" ? "#fff" : "#868686",
                    }}
                >
                    {t('67')}
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
