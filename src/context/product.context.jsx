import { createContext, useState } from "react";
import Product_data from "./../../src/shop-data.json";

export const ProductContext = createContext({
    products:[],
})

export const ProductsProvider = ({children})=>{
    const [product,setproduct] = useState(Product_data);
    const values = {product}
    return(
        <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
    )
}
