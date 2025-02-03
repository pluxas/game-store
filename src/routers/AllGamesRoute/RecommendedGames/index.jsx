import { useTranslation } from "react-i18next";
import { AllGames } from "../../../games/allGames";
import CardGames from "./CardGames";

const RecommendedGames = ({game}) => {
    const {id} = game;

    const {t} = useTranslation()

    const firstSlicesGame = (idGame) => {
      if(idGame >= 8) {
        return idGame - 2
      }else {
        return idGame
      } 
    }

    const secondSlicesGame = (idGame) => {
      if(idGame >= 8) {
        return idGame + 2
      }else {
        return idGame + 4
      }
    }

    const recommendedGames = AllGames.slice(firstSlicesGame(id), secondSlicesGame(id))
    
  return (
    <div>
        <h1 className="font-fontFamily font-semibold text-3xl text-white mt-16">{t('68')}</h1>
        <div className="grid grid-cols-4 gap-5 gap-y-16 mt-5">
            {recommendedGames.map(game => (
                <CardGames key={game.id} game={game}/>
            ))}
        </div>
    </div>
  )
}

export default RecommendedGames