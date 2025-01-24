import { CategoryList } from "../components/CategoryList"
import { Header } from "../components/Header"
import { ProductCard } from "../components/ProductCard"
import {data} from "../data/data"


export const Home = ()=>{
    return (
        <>
        <Header/>
      <CategoryList categories = {data.categories}/>
        </>
    )
}