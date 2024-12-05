const LanguageModal = ({ item, selectedItem, onClick }) => {
    return (
        <div
            onClick={() => onClick(item)}
            className="rounded-md py-1 px-3 w-32 font-fontFamily font-light text-xs text-white"
            style={{ backgroundColor: selectedItem === item ? "#77be1d" : "" }}
        >
            <p className="cursor-pointer">{item.slice(0, -2)}</p>
        </div>
    );
};

export default LanguageModal;
