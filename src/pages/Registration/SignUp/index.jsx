import { GlobalSvgIcons } from "../../../assets/icons/GlobalSvgIcons";

const SignUp = ({page}) => {
    return (
        <div className="flex flex-col items-center w-[400px]">
            <h1 className="font-fontFamily font-semibold text-3xl text-white text-center">Создать аккаунт</h1>
            <p className="font-fontFamily font-medium text-base text-center text-slate-300 mt-3">Добавьте свои данные что бы создать аккаунт</p>
            <div className="flex items-center gap-4 mt-12">
                <div className="flex items-center gap-2 border border-solid border-gray-600 py-3 px-12 rounded-xl cursor-pointer">
                    <GlobalSvgIcons id="google" />
                    <p className="font-fontFamily font-medium text-lg text-white">Google</p>
                </div>
                <div className="flex items-center gap-2 border border-solid border-gray-600 py-3 px-12 rounded-xl cursor-pointer">
                    <GlobalSvgIcons id="github" />
                    <p className="font-fontFamily font-medium text-lg text-white">Github</p>
                </div>
            </div>
            <div>
                <div className="flex items-center my-7">
                    <div className="border border-solid border-gray-700 w-full"></div>
                    <p className="font-fontFamily font-medium text-xl text-gray-500 mx-2">Или</p>
                    <div className="border border-solid border-gray-700 w-full"></div>
                </div>
                <div className="flex items-center gap-5">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-fontFamily font-medium text-white text-xl">Имя</h1>
                        <input type="text" placeholder="имя или никнейм" className="w-full outline-none py-3 px-4 rounded-lg bg-gray-800 placeholder:text-gray-500 font-fontFamily font-semibold text-lg text-white"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="font-fontFamily font-medium text-white text-xl">Фамилия</h1>
                        <input type="text" placeholder="необязательно" className="w-full outline-none py-3 px-4 rounded-lg bg-gray-800 placeholder:text-gray-500 font-fontFamily font-semibold text-lg text-white"/>
                    </div>
                </div>
                <div className="flex flex-col gap-2 mt-6">
                    <h1 className="font-fontFamily font-medium text-white text-xl">Email</h1>
                    <input type="email" placeholder="example@gmail.com" className="w-full outline-none py-3 px-4 rounded-lg bg-gray-800 placeholder:text-white font-fontFamily font-semibold text-lg text-white"/>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <h1 className="font-fontFamily font-medium text-white text-xl">Пароль</h1>
                    <input type="text" placeholder="Ваш пароль" className="w-full placeholder:text-white outline-none py-3 px-4 rounded-lg bg-gray-800 font-fontFamily font-semibold text-lg text-white"/>
                </div>
                <button className="bg-white rounded-lg py-3 font-fontFamily font-bold text-base mt-8 w-full">Log in</button>
                <p className="mt-5 font-fontFamily font-semibold text-base text-center text-gray-500">
                    У вас есть аккаунта то <span className="text-white cursor-pointer" onClick={() => page(false)}>войдите</span>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
