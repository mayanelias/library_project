import React, { useState } from "react";
import Register from "../Register";
import Login from "../Login";
import "./home.css";
import { Redirect } from "react-router-dom";
const Home = ({ setAuth, USERֹֹ_INFORMATIOM }) => {
  const [flag, setFlag] = useState({ register: false, login: false });
  const [redirect, setRedirect] = useState(false);
  const { register, login } = flag;
if(redirect){
return <Redirect to="/Home"/>
}
  const showRegister = register ? (
    <Register
      setAuth={setAuth}
      USERֹֹ_INFORMATIOM={USERֹֹ_INFORMATIOM}
      flag={flag}     
    />
  ) : (
    ""
  );
  const showLogin = login ? (
    <Login
      setAuth={setAuth}
      USERֹֹ_INFORMATIOM={USERֹֹ_INFORMATIOM}
      flag={flag}      
    />
  ) : (
    ""
  );
  return (
    <>
      <div className="navbar">
        {!register ? (
          <button
          className="register"
          onClick={() => setFlag({ register: true, login: false })}
          >
            Register
          </button>
        ) : (
          ""
          )}
        {!login ? (
          <button
          className="login"
          onClick={() => setFlag({ register: false, login: true })}
          >
            SiGN-IN
          </button>
        ) : (
          ""
          )}
        <h1 onClick={()=>setRedirect(true)} className="title">Welcome To The Libarey</h1>
        {showRegister} {showLogin}
      </div>
      <img
        style={{ float: "left", width: "400px", height: "610px" }}
        src="https://w0.peakpx.com/wallpaper/888/188/HD-wallpaper-harry-potter-1-castle-harry-potter-magic-movie-the-sorcerers-stone.jpg"
      />
      <img
        style={{ float: "right", width: "400px", height: "610px" }}
        src="https://cdn.wallpapersafari.com/7/93/dvJELi.jpeg"
      />
    </>
  );
};
export default Home;
