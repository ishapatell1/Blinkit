
import { CategoryList } from "../components/CategoryList"
import { Link } from "react-router-dom"
import { ProductCard } from "../components/ProductCard"
import { SaleCoupounList} from "../components/SaleCoupounList"
import {data} from "../utils/data"


export const Home = ()=>{
    return (
        <>
        <Link to = "/cn">
        <SaleCoupounList/>
        </Link>
  
        <CategoryList categories = {data.categories}/>
        <ProductCard/>
        </>
    )
}