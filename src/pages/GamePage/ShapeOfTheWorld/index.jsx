import AllGameRouter from "../../../routers/AllGamesRoute";

import { AllGames } from "../../../games/allGames";

const ShapeOfTheWorld = () => {
    const game = AllGames[4]
    
    return (
        <div className="mt-16">
            <AllGameRouter game={game}/>
        </div>
    );
};

export default ShapeOfTheWorld;