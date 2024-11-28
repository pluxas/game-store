import { useSelector } from "react-redux";
import FilterBlock from "./FilterBlock";
import FilterBlockGame from "./FilterBlockGame";
import { useEffect } from "react";

const CatalogPage = () => {
    const state = useSelector((state) => state.addingProduct.cart)

    const stateToJson = JSON.stringify(state)

    useEffect(() => {
        localStorage.setItem('games', stateToJson)
    }, [state])

    return (
        <div className='mt-20 flex gap-5'>
            <FilterBlock/>
            <FilterBlockGame/>
        </div>
    );
};

export default CatalogPage;
