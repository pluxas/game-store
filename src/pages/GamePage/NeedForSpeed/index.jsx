import AllGameRouter from '../../../routers/AllGamesRoute';

import { SwiperGames } from '../../../games/need-for-speed-games';

const NeedForSpeed = () => {
    const game = SwiperGames[0]

    return (
        <div className="mt-16">
            <AllGameRouter game={game}/>
        </div>
    );
}

export default NeedForSpeed