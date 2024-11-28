import AllGameRouter from "../../../routers/AllGamesRoute";

import { AllGames } from "../../../games/allGames";

const Minecraft = () => {
    const game = AllGames[11]

  return (
    <div className="mt-16">
        <AllGameRouter game={game}/>
    </div>
  )
}

export default Minecraft