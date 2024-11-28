import AllGameRouter from "../../../routers/AllGamesRoute";

import { AllGames } from "../../../games/allGames";

const Eastshade = () => {
    const game = AllGames[5]
    
    return (
        <div className="mt-16">
            <AllGameRouter game={game}/>
        </div>
    );
};

export default Eastshade;