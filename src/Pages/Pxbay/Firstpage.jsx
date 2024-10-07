import React, {useEffect, useState} from "react";
import "./pxby.css";
// import Dil from "../Pixabeypro";
import { Link, useNavigate } from "react-router-dom";



const Home = () => {
    let [api, setApi]= useState([]);
    let[search, setSearch] = useState("")
    let change =  (e)=>{
      setSearch(e.target.value)
    }
    useEffect(()=>{
      let api= fetch(`https://pixabay.com/api/?key=46193687-1ee9f7465fd5eeca96a352d5f&q=${search}&image_type=photo`);
      api.then(res=>res.json()).then(val=>setApi(val.hits))
    },[search])
    let navigate=useNavigate();
    function rel(){
      navigate("/Join");
    }
    
  return (
    <>
    <div className="container">
    <div className="header">
    <h1>PIXABEY</h1>
    <input type="text" placeholder="Search the image" className="search-input1" onChange={change} />

       <div className="three">
        <h2>All Images</h2>
        <h2>Explore</h2>
       <h2>Login</h2>
     <Link to="/Login"> <button>Join</button></Link>
      <button onClick={rel}>Upload</button>
       </div>
    </div>
      
    
      <section className="hero-section">
        <div className="boxed">
        <h1 className="hero-title">
          Stunning royalty-free images & royalty-free stock
        </h1>
        <p className="hero-subtitle">
          Over 5 million+ high quality stock images, videos and music shared by our talented community.
        </p>
        <div className="search-container">
          <input type="text" placeholder="Search for all images on Pixabay" className="search-input" onChange={change} />
          <select className="search-filter">
            <option >All images</option>
            <option>Photos</option>
            <option>Illustrations</option>
            <option>Vectors</option>
          </select>
        </div>
        </div>
      </section>
      <footer className="footer">
        <ul className="footer-links">
          <li> <i className="fa-solid fa-camera-retro"></i> Photos</li>
          <li> <i className="fa-solid fa-paintbrush"></i>Illustrations</li>
          <li> <i className="fa-solid fa-pen-nib"></i>Vectors</li>
          <li> <i className="fa-solid fa-video"></i>Videos</li>
          <li> <i className="fa-solid fa-music"></i>Music</li>
          <li><i className="fa-brands fa-soundcloud"></i>Sound Effects</li>
          <li><i className="fa-solid fa-fire-flame-curved"></i>GIFs</li>
        </ul>
      </footer>
    </div>
    <div className="searched">
        {api
          .filter((x) => x.tags.toLowerCase().includes(search) )
          .map((x) => {
            return (
              <img
                key={x.id} 
                src={x.webformatURL}
                alt={x.tags}
                className="pexabay-images"
              />
            );
          })}
      </div>
      <div className="Fotter">
        <h2>Free Media You Can use anywhere</h2>
        <p>Pixabay is a vibrant community of creatives, sharing royalty-free images, videos, audio and other media. All content is released by Pixabay under the Content License, which makes it safe to use without asking for permission or giving credit to the artist - even for certain commercial purposes.</p>
        <button className="Learn">Learn More About Our License</button>
      </div>
      <div>
        <div className="footer2">
         <h1>PIXABEY</h1>
         <p>Over 5 million+ high quality stock images, videos and music shared by our talented community.</p>
         <i class="fa-brands fa-instagram"></i>
         <i class="fa-brands fa-pinterest"></i>
         <i class="fa-brands fa-twitter"></i>
         <i class="fa-brands fa-facebook"></i>

        </div>
        <div className="footer3">
          <div>
            <h2>Discover</h2>
            </div>
          <div>
           <h2>Community</h2>

          </div>
          <div>
           <h2>About</h2>

          </div>
        </div>
      </div>
    </>
  
   
  );
};

export default Home;
