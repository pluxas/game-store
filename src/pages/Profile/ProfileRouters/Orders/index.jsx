import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux"

const Orders = () => {
  const myOrders = useSelector((state) => state.addingProduct.myOrders);

  const {t} = useTranslation()

  return (
    <div>
      {myOrders.map(game => (
        <div key={game.id}>
          <img src={game.images} alt="" />
          <div>
            <h1>{game.name}</h1>
            <p>{t(`${game.title}`)}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Orders