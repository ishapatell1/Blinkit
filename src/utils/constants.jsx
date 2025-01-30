import React, { useEffect, useState } from 'react'

export const Constants = () => {
    const [faq, setFaq] = useState("")
    const url = "https://blinkit.com/seoInfo?subCategoryId=28"

        useEffect(()=>{
            const fetchData = async ()=>{
                try{
                    const res = await fetch(url);
                    const data = await res.json();
                    console.log("This is Data you looking for ", data.categorySeo)
                }catch(err){
                    console.log(err)
                }

            }
            fetchData()
        },[])
  
  return (
    <div>Here in constant</div>
  )
}
