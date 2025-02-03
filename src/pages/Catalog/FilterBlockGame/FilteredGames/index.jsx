import { AllGames } from "../../../../games/allGames";
import Card from "../../../../components/UI/Main/Catalog/Cards";
import { useSelector } from "react-redux";

const FilteredGames = () => {
    const searchGamesByName = useSelector((state) => state.filterByName.input);
    const filterByRange = useSelector((state) => state.filterByRange.item);
    const filterByPrice = useSelector((state) => state.filterByPrice.type);

    const filteredGames = AllGames
    .filter((item) =>
        item.name.toLowerCase().includes(searchGamesByName.toLowerCase()) &&
        item.priceBecome <= filterByRange
        
    ).sort((a, b) => filterByPrice === '86' ? a.priceBecome - b.priceBecome : b.priceBecome - a.priceBecome)

    return (
        <>
            {filteredGames.length === 0 ? (
                <p className="font-secondFamily font-bold text-6xl text-center mt-40 text-green">
                    Игра не найдена
                </p>
            ) : (
                <div className="grid grid-cols-3 gap-5 relative mt-11">
                    {filteredGames.map((game) => (
                        <Card key={game.id} game={game} />
                    ))}
                </div>
            )}
        </>
    );
};

export default FilteredGames;
