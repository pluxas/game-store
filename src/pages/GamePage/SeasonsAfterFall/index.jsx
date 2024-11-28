import AllGameRouter from "../../../routers/AllGamesRoute";

import { AllGames } from "../../../games/allGames";

const SeasonsAfterFall = () => {
    const game = AllGames[9]
    
    return (
        <div className="mt-16">
            <AllGameRouter game={game}/>
        </div>
    );
};

export default SeasonsAfterFall;