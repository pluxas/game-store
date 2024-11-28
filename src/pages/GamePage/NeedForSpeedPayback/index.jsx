import AllGameRouter from '../../../routers/AllGamesRoute';

import { SwiperGames } from '../../../games/need-for-speed-games';

const NeedForSpeedPayback = () => {
    const game = SwiperGames[2]

    return (
        <div className="mt-16">
            <AllGameRouter game={game}/>
        </div>
    );
}

export default NeedForSpeedPayback