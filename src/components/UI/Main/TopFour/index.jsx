import { useTranslation } from "react-i18next"
import { GlobalImages } from "../../../../assets/images/GlobalImages"

import { AllGames } from "../../../../games/allGames"
import Card from "./Card"


const TopFour = () => {
  const {t} = useTranslation()

  return (
    <div className="mt-5">
        <div className="flex items-center gap-3 mb-5">
            <h1 className="font-fontFamily font-semibold text-3xl text-[#4277ff]">{t('15')}</h1>
            <GlobalImages id='lightning'/>
        </div>
        <div className="grid grid-cols-4 gap-5 relative">
            {AllGames.filter(game => game.position === 'TopFour').map((game, index) => (
                <Card key={index} game={game}/>
            ))}
        </div>
    </div>
  )
}

export default TopFour