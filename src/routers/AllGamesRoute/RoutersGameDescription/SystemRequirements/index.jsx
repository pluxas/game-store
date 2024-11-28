const SystemRequirements = ({ game }) => {
    const { OC, CPU, RAM, videoCard } = game;

    const systemFields = [
        { label: "Операционная система", value: OC },
        { label: "Процессор", value: CPU },
        { label: "Оперативная память", value: RAM },
        { label: "Видеокарта", value: videoCard },
    ];

    return (
        <div className="mt-5">
            {systemFields.map((item, index) => (
                <div key={index} className="flex items-center gap-5 my-1">
                    <p className="font-fontFamily font-normal text-base text-[#9d9aa6]">
                        {item.label}
                    </p>
                    <p className="font-fontFamily font-normal text-xl text-[#d0ced8]">
                        {item.value}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default SystemRequirements;
