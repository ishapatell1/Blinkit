import { CategoryCard } from "./CategoryCard";
import "../css/categorycard.css";
export const CategoryList = ({ categories, handleClick}) => {
  return (
    <div className="category-list">

      {categories.map((category) => (
        <div key={category.id} onClick={()=>handleClick(category.id)} >
        <CategoryCard category={category} />
        </div>
      ))}
    
  
    </div>
  );
};