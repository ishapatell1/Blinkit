import { CategoryCard } from "./CategoryCard";
import "../css/categorycard.css";
import { Link } from "react-router-dom";
export const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">

      {categories.map((category) => (
        <Link 
        to={`/cn/${category.id}`} > 
        <CategoryCard key={category.id} category={category} />
        </Link>
      ))}
    
  
    </div>
  );
};