import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";

import { store } from "./store/index.js";
import App from "./App.jsx";
import "./index.scss";
import './Firebase'
import './config/i18next.js'

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router basename='/game-stor'>
            <Provider store={store}>
                <App/>
            </Provider>
        </Router>
    </StrictMode>
);
