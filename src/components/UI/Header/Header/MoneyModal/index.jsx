const MoneyModal = ({ item, selectedItem, onClick }) => {
    return (
        <div
            onClick={() => onClick(item)}
            className=" py-1 px-4 rounded-md text-white"
            style={{
                backgroundColor: selectedItem === item ? "#77be1d" : "",
            }}
        >
            <p className="cursor-pointer">{item}</p>
        </div>
    );
};

export default MoneyModal;
