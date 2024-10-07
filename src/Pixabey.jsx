
import React,{useEffect,useState} from "react" ;
function Pixabey(){
    let [api, setApi] =useState([]);
    useEffect(() => {
      let api=fetch("https://pixabay.com/api/?key=46193685-5ab2c88f3286760d3697f61b4&q=yellow+flowers&image_type=photo&pretty=true")
        .then((a) => a.json())
        .then((b) => {
         setApi(b.hits)
        });
    }, []);
    return(
        <>
      {api.map((user)=>(
        <img src={user.previewURL} alt="" />
      ))}
        </>
    )
}
export default Pixabey;