import { paymentMethods } from "../../../games/paymentMethod";

const PaymentMethod = () => {
    return (
        <div className="grid grid-cols-2 mt-20 gap-5 w-[892px]">
            {paymentMethods.map((paymentMethod, index) => (
                <div key={index} className="p-9 border border-solid border-border-after-header rounded-3xl w-full">
                    <div className="flex items-center gap-5">
                        <input type="radio" />
                        <label className="font-fontFamily font-medium text-2xl text-white">{paymentMethod.name}</label>
                    </div>
                    <div className="flex items-center gap-3 mt-28">
                      <img src={paymentMethod.image_one} alt="" />
                      <img src={paymentMethod.image_two} alt="" />
                      <img src={paymentMethod.image_three} alt="" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PaymentMethod;
