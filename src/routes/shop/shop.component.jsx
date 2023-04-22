import { useContext } from "react";
import { ProductContext } from "../../context/product.context";
import ProductCard from "../../components/product-card/productcard.component";
import "./shop.style.scss";

const Shop=()=>{
    const {product} = useContext(ProductContext);
    console.log(product);
    return(
        <div className="products-container">
        {
            product.map((element)=>{
                return(
                <div key={element.id}>
                    <ProductCard products={element}/>
                </div>
                )
            })
        }
        </div>
    )
}

export default Shop;