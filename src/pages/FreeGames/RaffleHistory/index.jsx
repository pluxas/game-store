import { RaffleGamesHistory } from "../../../games/RaffleGamesHistory";
import userLogo from "../../../assets/images/user_logo.png";

const RaffleHistory = () => {
    return (
        <div className="flex flex-col gap-7 mt-10">
            {RaffleGamesHistory.map((game) => (
                <div key={game.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-10">
                        <img src={game.image} alt="" />
                        <div>
                            <p className="font-fontFamily font-semibold text-2xl text-white">{game.name}</p>
                            <div className="flex items-center gap-10 mt-5">
                                <p className="font-fontFamily font-semibold text-xl text-clear">Раздача в <span className="text-white">{game.when}</span></p>
                                <p className="font-fontFamily font-semibold text-xl text-clear">Участники <span className="text-white">{game.members}</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <img className="w-16 h-16" src={userLogo} alt="" />
                        <div>
                            <p className="font-fontFamily font-normal text-lg text-clear">Победитель</p>
                            <p className="font-fontFamily font-normal text-xl text-white">Hanzed Whalen</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RaffleHistory;
