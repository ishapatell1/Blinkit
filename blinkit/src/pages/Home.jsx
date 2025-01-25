
import { CategoryList } from "../components/CategoryList"
import { Link, useNavigate } from "react-router-dom"
import { ProductCard } from "../components/ProductCard"
import { SaleCoupounList} from "../components/SaleCoupounList"
import {data} from "../utils/data"


export const Home = ()=>{
    const navigate = useNavigate()
    const handleClick = (categoryId)=> {
        console.log("Clicked")
        navigate(`/cn/${categoryId}`)
    }
    return (
        <>
        <Link to = "/cn/${categoryId}">
        <SaleCoupounList/>
        </Link>
  
        <CategoryList categories = {data.categories} handleClick = {handleClick}/>
        {/* <ProductCard/> */}
        </>
    )
}