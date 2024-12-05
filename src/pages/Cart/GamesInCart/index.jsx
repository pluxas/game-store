import { useSelector } from "react-redux";
import { AllGames } from "../../../games/allGames";
import { GlobalSvgIcons } from "../../../assets/icons/GlobalSvgIcons";

const GamesInCart = () => {
  const currency = useSelector((state) => state.changingCurrency.currency)

    return (
        <div className="mt-10 flex flex-col gap-8 w-[892px]">
            {AllGames.filter((game) => game.position === "TopFour").map(
                (game, index) => (
                    <div className="flex justify-between items-center" key={index}>
                        <div className="flex gap-8">
                            <img className="w-[200px] h-[270px]" src={game.images} alt="" />
                            <div>
                                <h1 className="font-fontFamily font-medium text-3xl text-white">{game.name}</h1>
                                <div className="flex items-center gap-5 mt-5">
                                    <p className="font-fontFamily font-medium text-3xl text-white">
                                        {game.priceBecome} {currency}
                                    </p>
                                    <p className="font-fontFamily font-medium text-2xl text-green">
                                        -15%
                                    </p>
                                    <div className="relative">
                                        <span className="border border-solid border-[#38353f] w-full absolute rotate-12 top-3"></span>
                                        <p className="font-fontFamily font-normal text-2xl text-clear">
                                            <del>
                                                {game.price}
                                                {localStorage.getItem("money")}
                                            </del>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 mt-10">
                                  <p className="font-fontFamily font-normal text-lg text-clear">Регион активации<span className="text-white"> Россия и страны СНГ</span></p>
                                  <p className="font-fontFamily font-normal text-lg text-clear">Сервис активации<span className="text-white"> Steam</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-10">
                          <div className="cursor-pointer"><GlobalSvgIcons id='trash'/></div>
                          <div className="flex items-center gap-3">
                            <button className="text-2xl text-white">-</button>
                            <p className="text-2xl text-white">1</p>
                            <button className="text-2xl text-white">+</button>
                          </div>
                          <div className="cursor-pointer"><GlobalSvgIcons id='heart'/></div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default GamesInCart;
