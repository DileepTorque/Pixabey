// import React, { useEffect, useState } from "react";

// function X() {
//   let [hi, hlo] = useState({ product: [] });
//   let [state, setState] = useState("");
  
//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((a) => a.json())
//       .then((b) => {
//         hlo({ product: b }); 
//       });
//   }, []);

//   let valueSearch = (e) => {
//     setState(e.target.value.toLowerCase());
//   };

//   return (
//     <>
//       <input
//         placeholder="Search"
//         style={{ width: "680px", height: "40px", display: "block" }}
//         onChange={valueSearch}
//       />
//       {hi.product
//         .filter((d) => d.title.toLowerCase().includes(state))
//         .map((f) => {
//           return (
//             <div key={f.id}>
//               <h1>{f.title}</h1>
//               <img src={f.image} style={{ width: "250px", height: "250px" }} />
//             </div>
//           );
//         })}
//     </>
//   );
// }

// export default X;
//Pixabey whole site starts here
import React  from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Firstpage from "./Pages/Pxbay/Firstpage";
import Login from "./Pages/Loginpage/Login";
import Join from "./Pages/Joinpage/Join";
import "./Pages/Loginpage/Login.css";
function Browser(){
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Firstpage/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Join" element={<Join/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default Browser;
// pixabey whole site ends here
//Ecommerce Fakestore
// import React  from "react";
// // import Ecommerce from "./Ecommerce/Header";
// // import "./Ecommerce/Header.css"
// import Dileep from "./Pages/Ecommerce/Header";
// function App(){
//   return(
//     <>
//     <Dileep/>
    
//     </>
//   )
// }
// export default App;
