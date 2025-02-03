import { configureStore } from "@reduxjs/toolkit";

import filterRange from "../slices/blockFilter/filterRange";
import filterSlider from "../slices/blockFilter/filterSlider";
import filterPrice from "../slices/blockFilter/filterPrice";
import filterSearch from "../slices/blockFilter/filterSearch";
import addProduct from "../slices/addingProductByCart";
import changeCurrency from "../slices/changeCurrency";
import changeLanguage from "../slices/changeLanguage";
import SignUp from "../slices/Signup";

export const store = configureStore({
    reducer: {
        filterBySlider: filterSlider,
        filterByRange: filterRange,
        filterByPrice: filterPrice,
        filterByName: filterSearch,
        addingProduct: addProduct,
        changingCurrency: changeCurrency,
        changingLanguage: changeLanguage,
        SignUpParameters: SignUp  
    },
    devTools: true,
});
