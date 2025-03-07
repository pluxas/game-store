import { useState } from "react"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Saidbar = () => {
    const [arrowLanguage, setArrowLanguage] = useState(false)
    const [arrowCurrenncy, setArrowCurrency] = useState(false)

    const { t } = useTranslation()

    const words = [
        {
            id: 1,
            title: "second",
        },
        {
            id: 2,
            title: "third",
            router: "Catalog",
        },
        {
            id: 3,
            title: "fourth",
            router: "Support",
        },
        {
            id: 4,
            title: "fifth",
            router: "OurAdvantages",
        },
    ];

    return (
        <div>
            <div>

            </div>
            {words.map(item => (
                <Link key={item.id} to={item.router} className="font-fontFamily font-semibold text-base text-white cursor-pointer border-b-2 border-transparent hover:border-white transition duration-300">
                    {t(`${item.title}`)}
                </Link>
            ))}
        </div>
    )
}

export default Saidbar