import AllGameRouter from "../../../routers/AllGamesRoute";

import { AllGames } from "../../../games/allGames";

const AShirtHike = () => {
    const game = AllGames[8]
    
    return (
        <div className="mt-16">
            <AllGameRouter game={game}/>
        </div>
    );
};

export default AShirtHike;