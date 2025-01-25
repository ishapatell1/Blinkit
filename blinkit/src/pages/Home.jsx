import { CategoryList } from "../components/CategoryList"

import { ProductCard } from "../components/ProductCard"
import { SaleCoupounList} from "../components/SaleCoupounList"
import {data} from "../utils/data"


export const Home = ()=>{
    return (
        <>
        <SaleCoupounList/>
        <CategoryList categories = {data.categories}/>
        <ProductCard products = {data.categories.products}/>
        </>
    )
}