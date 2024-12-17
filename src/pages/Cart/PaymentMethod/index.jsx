import { useState } from "react";

import { paymentMethods } from "../../../games/paymentMethod";
import styles from "./PaymentMethod.module.scss";

const PaymentMethod = () => {
    const [card, setCard] = useState(0);

    return (
        <div className="grid grid-cols-2 mt-20 gap-5 w-[892px]">
            {paymentMethods.map((paymentMethod, index) => (
                <div
                    key={index}
                    className={
                        card === paymentMethod.id
                            ? styles["block-active"]
                            : styles.block
                    }
                    onClick={() => setCard(paymentMethod.id)}
                >
                    <p
                        className="font-fontFamily font-medium text-2xl text-white"
                        style={
                            card === paymentMethod.id
                                ? {color: '#77be1d'}
                                : {color: 'white'}
                        }
                    >
                        {paymentMethod.name}
                    </p>

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
