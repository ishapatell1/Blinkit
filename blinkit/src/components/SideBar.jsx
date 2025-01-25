import React from 'react'
import "../css/sidebar.css"
import {data} from "../utils/data"
export const SideBar = () => {
    const {categories} = data; 
  return (
    <aside className="sidebar">
      <ul>
      {categories.map((category)=>(
        <li key = {category.id}>{category.name}</li>
      ))}
      </ul>
    </aside>
  )
}

