// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import "../Loginpage/Login.css";
// import { useNavigate } from 'react-router-dom';
// const Join = () => {
//     let [name,setname] = useState("");
//     let [password,setpassword] = useState("")
//     const navigate = useNavigate();
//     const handleSubmit = (e) => {
//     const username = document.getElementsByClassName('inpbtn1').value;
//     const email = document.getElementsByClassName('inpbtn2').value;
//     const password = document.getElementsByClassName('inpbtn3').value;
//     window.localStorage.setItem("username", username);
//     window.localStorage.setItem("email", email);
//     window.localStorage.setItem("password", password);
//   function fn(){
//     navigate()
//   }
//   }; 
//   return (
//     <div className="login">
//            <div className="loginbox">
//                <div className="loginheader">
//     <button className="heading">Log in</button>
//      <Link to="/Login"><button className="heading">Join</button></Link>
//              </div>
//              <div className='lang'>
//                 <span>Select your language:</span>
//                 <select name="" id="" className='langopt'>
//                     <option value="text">English</option>
//                     <option value="text">Indonesia</option>
//                     <option value="text">French</option>
//                     <option value="text">Chinese</option>
//                 </select>
//              </div>
//     <div className="socialmedia">
//       <button className=" googlebtn"> <i class="fa-brands fa-google"></i> Google</button>
// <button className=" fbbtn"> <i class="fa-brands fa-facebook"></i> Facebook</button>
//         </div>
//         <form className="lgform">
//                 <input type="text" placeholder="Username" className="inpbtn1" />
//                 <input type="email"  placeholder='Email address' className="inpbtn2"/>
//                 <input type="password" placeholder="Password"className="inpbtn3"/>
                 
//           <button type="submit" className="enter" onChange={handleSubmit}>Join </button>
//         </form>
        
//       </div>
//     </div>

//   )
// //   function store(){
// //     let Username=document.getElementsByClassName("enter");
// //     Username.addEventlistener("click",(clk)=>{
// //         let RegisUsername=document.getElementsByClassName("inpbtn1").value;
// //         let RegisEmail=document.getElementsByClassName("inpbtn2").value;
// //         let RegPass=document.getElementsByClassName("inpbtn3").value;
// //         window.sessionStorage.setItem("inpbtn1",RegisUsername);
// //         window.sessionStorage.setItem("inpbtn2",RegisEmail);
// //         window.sessionStorage.setItem("inpbtn3",RegPass);
// //         window.open("./Loginpage/Login.jsx");   
// //     })
// //   }
// };

// export default Join;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../Loginpage/Login.css";

const Join = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        window.localStorage.setItem("username", username);
        window.localStorage.setItem("email", email);
        window.localStorage.setItem("password", password);
        alert("Registration successful! You can now log in.");
        navigate('/Login');
    };
    return (
        <div className="login">
            <div className="loginbox">
                <div className="loginheader">
                    <button className="heading">Log in</button>
                    <Link to="/Login"><button className="heading">Join</button></Link>
                </div>
                <div className='lang'>
                    <span>Select your language:</span>
                    <select name="" id="" className='langopt'>
                        <option value="text">English</option>
                        <option value="text">Indonesia</option>
                        <option value="text">French</option>
                        <option value="text">Chinese</option>
                    </select>
                </div>
                <div className="socialmedia">
                    <button className=" googlebtn"> <i className="fa-brands fa-google"></i> Google</button>
                    <button className=" fbbtn"> <i className="fa-brands fa-facebook"></i> Facebook</button>
                </div>
                <form className="lgform" onSubmit={handleSubmit}>
                    <input  type="text"  placeholder="Username"  className="inpbtn1"  value={username}  onChange={(e) => setUsername(e.target.value)}  />
                    <input  type="email"    placeholder="Email address"  className="inpbtn2"  value={email}   onChange={(e) => setEmail(e.target.value)}  />
                    <input   type="password"  placeholder="Password"  className="inpbtn3"  value={password}  onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" className="enter">Join</button>
                </form>
            </div>
        </div>
    );
};

export default Join;

