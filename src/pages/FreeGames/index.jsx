import { useState } from "react"

import HeaderBlock from "./HeaderBlock"
import Raffle from "./Raffle"
import RaffleHistory from "./RaffleHistory"
import { useTranslation } from "react-i18next"

const FreeGames = () => {
  const [history, setHistory] = useState(false)

  const {t} = useTranslation()

  return (
    <div className="mt-12">
        <HeaderBlock/>
        <div className="mt-8 grid grid-cols-2 gap-5">
          <button onClick={() => setHistory(false)} className="p-6 font-fontFamily font-semibold text-2xl text-center text-green bg-registration rounded-xl border-solid border-green" style={!history ? {borderWidth: '1px'} : null}>{t('113')}</button>
          <button onClick={() => setHistory(true)} className="p-6 font-fontFamily font-semibold text-2xl text-center text-green bg-registration rounded-xl border-solid border-green" style={history ? {borderWidth: '1px'} : null}>{t('120')}</button>
        </div>
        {!history ? <Raffle/> : <RaffleHistory/>}
    </div>
  )
}

export default FreeGames