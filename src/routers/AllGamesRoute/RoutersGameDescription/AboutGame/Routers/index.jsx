import { NavLink } from "react-router-dom";

import { routerText } from "./RouterText";

const Routers = () => {
    return (
        <div className="mt-16 flex items-center gap-11">
            {routerText.map((item, index) => (
                <NavLink
                    to={item.path}
                    key={index}
                    end
                    className={({ isActive }) =>
                        isActive
                            ? "border-b border-solid text-white font-fontFamily font-normal text-xl"
                            : "text-white font-fontFamily font-normal text-xl"
                    }
                >
                    {item.text}
                </NavLink>
            ))}
        </div>
    );
};

export default Routers;
