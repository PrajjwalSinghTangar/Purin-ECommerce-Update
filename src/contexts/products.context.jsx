import { createContext, useState } from "react";

import {popularProducts,hats,jeans,jackets,shoes,shirts} from '../data';

export const ProductsContext = createContext({
    products: [],
});


export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState({popularProducts,hats,jeans,jackets,shoes,shirts});
    const value = { products };
    return(
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}