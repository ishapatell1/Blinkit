import { useState } from "react"
import { ProductCard } from "../components/ProductCard"
import {data} from "../utils/data"
import { useSearchParams } from "react-router-dom"


export const Search = ()=> {
    const {categories} = data;
    const [searchParams]= useSearchParams();
    const query = searchParams.get("q")?.toLowerCase()||"" ;
    
    const filteredProducts = categories.flatMap(category => 
        category.products.filter(product =>
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        )
    );
    return(
        <>
        <h3>Did you mean? <strong>{query}</strong></h3>
        {filteredProducts.length>0? ( <ProductCard products={filteredProducts}/> ): (<h1>Can't Find Any Result for <strong>{query}</strong></h1>)}
       
        </>
    )
}