import { useTranslation } from "react-i18next"

const GameDescription = ({game}) => {
    const {title} = game

    const {t} = useTranslation()

  return (
    <div className="font-fontFamily font-normal text-xl text-[#9d9aa6] mt-10">{t(`${title}`)}</div>
  )
}

export default GameDescription