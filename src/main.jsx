import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.scss";
import { Provider } from "react-redux";
import { store } from "./stor/index.js";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router>
            <Provider store={store}>
                <App/>
            </Provider>
        </Router>
    </StrictMode>
);
