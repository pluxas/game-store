import { Reviews } from "../../../games/Reviews"
import checked from '../../../assets/images/галочка.png'
import { useTranslation } from "react-i18next"

const ReviewsGames = () => {
    const {t} = useTranslation()

  return (
    <div className="grid grid-cols-3 gap-14 mt-24">
        {Reviews.map(game => (
            <div key={game.id}>
                <img src={game.images} alt="" />
                <p className="font-fontFamily font-normal text-base text-[#b1b1b1] my-5">{game.name}-{t('16')} Steam</p>
                <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                        <p className="font-fontFamily font-semibold text-xl text-green">{t('100')}</p>
                        <img className="w-6 h-6 border border-solid border-border-after-header rounded-xl p-1" src={checked} alt="" />
                    </div>
                    <p className="font-thirdFamily font-normal text-sm text-[#747474]">{game.when}</p>
                </div>
                <p className="font-fontFamily font-normal text-lg text-white mt-3">{t(`${game.comment}`)}</p>
            </div>
        ))}
    </div>
  )
}

export default ReviewsGames