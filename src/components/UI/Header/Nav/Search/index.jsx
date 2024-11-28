import SearchCards from "../SearchCards";

const Search = ({
    filterGames,
    searchModal,
    closeSearchModal,
    setSearch,
    search,
}) => {

    const renderGames = (search, filterGames) => {
        if (search.length === 0) {
            return <p className="text-white text-center text-3xl mt-5">Что вы хотите найти?</p>;
        }

        if (filterGames.length === 0) {
            return <p className="font-secondFamily font-bold text-4xl text-center mt-5 text-white">Игры не найдены</p>;
        }

        return filterGames.map((game) => (
            <SearchCards key={game.id} game={game} closeSearchModal={closeSearchModal}/>
        ));
    };

    return (
        <div
            style={
                searchModal
                    ? { display: "block", opacity: "1"}
                    : { display: "none", opacity: 0 }
            }
        >
            <div
                onClick={closeSearchModal}
                className="backdrop-blur inset-0 fixed bg-gray-600/30 w-[1900px] h-screen z-[98]"
            ></div>
            <div className="w-[1260px] h-[600px] bg-gray-600 rounded-3xl fixed z-[99]">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Поиск..."
                    className="my-6 mx-7 w-full border-none bg-transparent text-white focus:outline-none placeholder:text-gray-300"
                />
                <div className="w-full h-px border border-solid border-[#EEEEEE]"></div>
                <div className="overflow-y-auto max-h-[500px]">
                    {renderGames(search, filterGames)}
                </div>
            </div>
        </div>
    );
};

export default Search;
