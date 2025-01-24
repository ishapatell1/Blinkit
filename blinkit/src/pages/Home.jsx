import { CategoryList } from "../components/CategoryList"
import { Header } from "../components/Header"
import { ProductCard } from "../components/ProductCard"
import { SaleCoupounList} from "../components/SaleCoupounList"
import {data} from "../utils/data"


export const Home = ()=>{
    return (
        <>
        <Header/>
        <SaleCoupounList/>
        <CategoryList categories = {data.categories}/>
        <ProductCard products = {data.categories.products}/>
        </>
    )
}