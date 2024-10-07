import React, {useEffect, useState} from "react";
export default function Dil(){
  let [api, setApi]= useState([]);
  let[search, setSearch] = useState("")
  let change =  (e)=>{
    setSearch(e.target.value)
  }
  useEffect(()=>{
    let api= fetch(`https://pixabay.com/api/?key=46193687-1ee9f7465fd5eeca96a352d5f&q=${search}&image_type=photo`);
    api.then(res=>res.json()).then(val=>setApi(val.hits))
  })
  
  
  return(
    <div>
      <input style={{width:"300px", height:"40px", display:"flex"}}
          type="text"
          placeholder="Enter product title" onChange={change}
        />
        {api.filter(x=>{
          return (
            x.tags.toLowerCase().includes(search)
          )
        })
        .map(x=>{
          return(
            <img src={x.webformatURL} style={{width:"290px", height:"250px"}}/>
          )
        })}

      </div>
  )

}