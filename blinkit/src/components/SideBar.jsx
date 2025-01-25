
import "../css/sidebar.css"
import {data} from "../utils/data"
import { Link } from 'react-router-dom';
export const SideBar = ({selectedCategory}) => {
  console.log(selectedCategory)
    const {categories} = data; 
  return (
    <aside className="sidebar">
       
      <ul>
      {categories.map((category)=>(
        <li key = {category.id}   className={selectedCategory?.id === category.id ? "active" : ""}>
              <Link to =  "/prdetail/${category.id}">
            <img src = {category.category_image}/>
            <p>{category.name}</p>
            </Link>
        </li>
       
      ))}
      </ul>
   
    </aside>
  )
}

