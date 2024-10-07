// import React from 'react';
// import "../Loginpage/Login.css";
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
// //     const navigate = useNavigate();

// //   const handleSubmit = (e) => {
// //     const usernameOrEmail = document.getElementById('usernameOrEmail').value;
// //     const password = document.getElementById('password').value;
// //     const storedUsername = localStorage.getItem("username");
// //     const storedEmail = localStorage.getItem("email");
// //     const storedPassword = localStorage.getItem("password");
// //     if (
// //       (usernameOrEmail === storedUsername || usernameOrEmail === storedEmail) &&
// //       password === storedPassword
// //     ) {
// //       navigate('./Pxbay/Firstpage.jsx');
// //     } else {
// //       alert("Invalid username, email, or password!");
// //     }
// //   };
//   return (
//     <div className="login">
//            <div className="loginbox">
//                <div className="loginheader">
//     <button className="heading">Log in</button>
//      <button className="heading">Join</button>
//              </div>
//     <div className="socialmedia">
//       <button className=" googlebtn"> <i class="fa-brands fa-google"></i> Google</button>
// <button className=" fbbtn"> <i class="fa-brands fa-facebook"></i> Facebook</button>
//         </div>
//         <form className="lgform">
//                 <input type="text" placeholder="Username or email" className="inpbtn4" />
//                   <input type="password" placeholder="Password"className="inpbtn5"/>
//          <Link to="/Join"> <button type="submit" className="enter" onClick={Validat}>Log in</button></Link>
//         </form>
//       </div>
//     </div>
//   )
//   function Validat(){
//     let uname=document.getElementsByClassName("inpbtn4");
//     let pass=document.getElementsByClassName("inpbtn5");
//     if(uname===window.localStorage.getItem("username")&& pass===window.localStorage.getItem("password")){
//         window.open("./Pxbay/Firstpage.jsx");
//     }
//   }
// };

// export default Login;







import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        const storedUsername = localStorage.getItem("username");
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");
        if (
            (usernameOrEmail === storedUsername || usernameOrEmail === storedEmail) &&
            password === storedPassword
        ) {
            navigate('/');
        } else {
            alert("Invalid username, email, or password!");
        }
    };

    return (
        <div className="login">
            <div className="loginbox">
                <div className="loginheader">
                    <button className="heading">Log in</button>
                    <Link to="/Join"><button className="heading">Join</button></Link>
                </div>
                <div className="socialmedia">
                    <button className=" googlebtn"> <i className="fa-brands fa-google"></i> Google</button>
                    <button className=" fbbtn"> <i className="fa-brands fa-facebook"></i> Facebook</button>
                </div>
                <form className="lgform" onSubmit={handleSubmit}>
                    <input  type="text"  placeholder="Username or email"  className="inpbtn4"  value={usernameOrEmail} onChange={(e) => setUsernameOrEmail(e.target.value)}  />
                    <input  type="password"  placeholder="Password"  className="inpbtn5"  value={password}   onChange={(e) => setPassword(e.target.value)}  />
                    <button type="submit" className="enter">Log in</button>
                </form>
            </div>
        </div>
    );
};

export default Login;

