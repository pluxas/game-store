import { Route, Routes, useLocation } from "react-router-dom";
import routes from "../GameRouters";
import { useEffect } from "react";

const Routers = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Routes>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    element={<route.element />}
                />
            ))}
        </Routes>
    );
};

export default Routers;
