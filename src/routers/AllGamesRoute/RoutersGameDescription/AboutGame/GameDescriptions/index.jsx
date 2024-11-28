const GameDescription = ({game}) => {
    const {title} = game

  return (
    <div className="font-fontFamily font-normal text-xl text-[#9d9aa6] mt-10">{title}</div>
  )
}

export default GameDescription