import AboutGame from "./Game";
import RecommendedGames from "./RecommendedGames";
import RouterAboutGame from "./RoutersGameDescription/AboutGame";

const AllGameRouter = ({game}) => {

    return (
        <div>
            <AboutGame game={game}/>
            <RouterAboutGame game={game}/>
            <RecommendedGames game={game}/>
        </div>
    );
};

export default AllGameRouter;