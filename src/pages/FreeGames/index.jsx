import { useState } from "react"

import HeaderBlock from "./HeaderBlock"
import Raffle from "./Raffle"
import RaffleHistory from "./RaffleHistory"

const FreeGames = () => {
  const [history, setHistory] = useState(false)

  return (
    <div className="mt-12">
        <HeaderBlock/>
        <div className="mt-8 grid grid-cols-2 gap-5">
          <button onClick={() => setHistory(false)} className="p-6 font-fontFamily font-semibold text-2xl text-center text-green bg-registration rounded-xl border-solid border-green" style={!history ? {borderWidth: '1px'} : null}>Розыгрыш</button>
          <button onClick={() => setHistory(true)} className="p-6 font-fontFamily font-semibold text-2xl text-center text-green bg-registration rounded-xl border-solid border-green" style={history ? {borderWidth: '1px'} : null}>История розыгрышей</button>
        </div>
        {!history ? <Raffle/> : <RaffleHistory/>}
    </div>
  )
}

export default FreeGames