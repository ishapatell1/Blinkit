
import "../css/categorycard.css";
export const CategoryCard = ({category}) =>{
    const{name, category_image,id} = category;
    
   
    return(
        <>
        <div className="category-card"> 
        <img className = "category-image" src = {category_image}/>
        <div className="content">
        <strong>{name}</strong>
        </div>
        </div>
          
        </>
    )
}