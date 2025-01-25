import "../css/banner.css"; 

export const CategoryBanner = ()=>{
    return (
       <div className="category-banner">
        <p>Vegetable</p>
        <div className="category-filter">
            <select>
                <option>Relevance</option>
                <option>Price(High to Low)</option>
                <option>Price (Low to High)</option>
                <option>Discount</option>
            </select>
        </div>
       </div>
    )
}

export const NavCategory = () =>{
    return (
        <div>
            <h1>This is season</h1>
        </div>
    )
}