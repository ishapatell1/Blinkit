
import "../css/sidebar.css"
import {data} from "../utils/data"
import { useNavigate } from 'react-router-dom';

export const SideBar = ({selectedCategory}) => {
  const navigate = useNavigate()
  console.log(selectedCategory)
    const {categories} = data; 
    const handleClick = (categoryId)=> {
      console.log("Clicked")
      navigate(`/cn/${categoryId}`)
  }
  return (
    <aside className="sidebar">
      <ul>
      {categories.map((category)=>(
        <li key = {category.id}   className={selectedCategory?.id === category.id ? "active" : ""} onClick={()=>handleClick(category.id)}>
              {/* <Link to =  "/prdetail/${category.id}"> */}
            <img src = {category.category_image}/>
            <p>{category.name}</p>
            {/* </Link> */}
        </li>
       
      ))}
      </ul>
   
    </aside>
  )
}

