import React from "react";
import "./directory.styles.scss"
import Category from "../categoryitem/category.component";

const Directory = ({items}) =>{
    return(
     <div className="App">
        <Category category={items}/>
     </div>
    )
}

export default Directory;