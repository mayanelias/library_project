import React, { useState } from "react";
import Register from "../register/Register";
import Login from "../login/Login";
import "./home.css";
const Home = ({ setAuth, USERֹֹ_INFORMATIOM }) => {
  const [flag, setFlag] = useState({ register: false, login: false });
  const { register, login } = flag;
  const showRegister = register ? (
    <Register
      setAuth={setAuth}
      USERֹֹ_INFORMATIOM={USERֹֹ_INFORMATIOM}
      flag={true}     
    />
  ) : (
    ""
  );
  const showLogin = login ? (
    <Login
      setAuth={setAuth}
      USERֹֹ_INFORMATIOM={USERֹֹ_INFORMATIOM}
      flag={true}      
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
          
        <h1 onClick={()=>setFlag({ register: false, login: false })} className="title">Welcome To The Library</h1>
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
