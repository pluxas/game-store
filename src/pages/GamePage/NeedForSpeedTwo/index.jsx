import AllGameRouter from '../../../routers/AllGamesRoute';

import { SwiperGames } from '../../../games/need-for-speed-games';

const NeedForSpeedTwo = () => {
    const game = SwiperGames[1]

    return (
        <div className="mt-16">
            <AllGameRouter game={game}/>
        </div>
    );
}

export default NeedForSpeedTwo