import AllGameRouter from "../../../routers/AllGamesRoute";

import { AllGames } from "../../../games/allGames";

const Honokum = () => {
    const game = AllGames[2]
    
    return (
        <div className="mt-16">
            <AllGameRouter game={game}/>
        </div>
    );
};

export default Honokum;