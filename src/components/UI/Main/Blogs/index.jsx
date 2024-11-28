import img from "../../../../assets/images/another.png";

const Blogs = () => {
    return (
        <div>
            <h1 className="font-fontFamily font-semibold text-3xl text-white mb-5">
                Свежее в блоге
            </h1>
            <div className="grid grid-cols-3 gap-5">
                <div className="flex flex-col items-center">
                    <img src={img} alt="" />
                    <div>
                        <p className="font-fontFamily font-semibold text-xl text-white mt-5">
                            Да как так-то борются с пиратством?
                        </p>
                        <p className="font-fontFamily font-normal text-lg text-white mt-3">
                            Скримеры — только верхушка айсберга <br /> ужаса
                        </p>
                        <p className="font-fontFamily font-normal text-base text-[#63656a] mt-5">
                            14 Октября 2021
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img src={img} alt="" />
                    <div>
                        <p className="font-fontFamily font-semibold text-xl text-white mt-5">
                            Да как так-то борются с пиратством?
                        </p>
                        <p className="font-fontFamily font-normal text-lg text-white mt-3">
                            Скримеры — только верхушка айсберга <br /> ужаса
                        </p>
                        <p className="font-fontFamily font-normal text-base text-[#63656a] mt-5">
                            14 Октября 2021
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img src={img} alt="" />
                    <div>
                        <p className="font-fontFamily font-semibold text-xl text-white mt-5">
                            Да как так-то борются с пиратством?
                        </p>
                        <p className="font-fontFamily font-normal text-lg text-white mt-3">
                            Скримеры — только верхушка айсберга <br /> ужаса
                        </p>
                        <p className="font-fontFamily font-normal text-base text-[#63656a] mt-5">
                            14 Октября 2021
                        </p>
                    </div>
                </div>
            </div>
            <div className="cursor-pointer border border-solid border-border-after-header rounded-2xl mt-10 py-7 text-center font-fontFamily font-semibold text-lg text-[#366edc]">
                Все публикации
            </div>
        </div>
    );
};

export default Blogs;
