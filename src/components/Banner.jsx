import "../css/banner.css"; 

export const CategoryBanner = ({setChange})=>{

    const handleChange = (val)=>{
        setChange(val)
        console.log(val)
    }
    return (
       <div className="category-banner">
        <div className="category-filter">
            <select onChange={(e)=>handleChange(e.target.value)}>
                <option value="relevance">Relevance</option>
                <option value= "hightolow">Price(High to Low)</option>
                <option value= "lowtohigh">Price (Low to High)</option>
                <option value= "maxdiscount">Discount</option>
                <option value = "instock">In Stock</option>
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