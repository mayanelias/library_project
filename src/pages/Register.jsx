import { useState } from "react";
import axios from "axios";
import fireBaseApi from "../logic/key";
const Register = ({setAuth,USERֹֹ_INFORMATIOM,flag}) => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("")
const [errorFromServer, setErrorFromServer] = useState("");
  const registerForm = () => {
    axios
    .post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${fireBaseApi}`,
      {
        email,
        password,
        }
    )
      .then(function (response) {
        console.log(response);
        setAuth(response.data.email);
        localStorage.setItem(USERֹֹ_INFORMATIOM, JSON.stringify(response.data.email));
        })
      .catch(function (error) {
        setErrorFromServer(error);
        setErrorFromServer(true);
      });
  };
const passwordValidation = (e, handlePassword) => {
    if (e.target.value.length > 6 && e.target.value !== ""
        && e.target.value != 0 && e.target.value !== null) {
          handlePassword(e.target.value);
    }
}
  return (
    <div className={`${!flag ? "active" : ""} show`}>    
    <div className="login-form">
      <div className="form-box solid">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (password === confirmPassword) {
              registerForm();
            } else {
              alert("incorrect password!!!")
          }
      }}>
          <h1 className="login-text">Register</h1>
          <label>Email</label>
          <br></br>
          <input
            type="email"
            name="email"
            className="login-box"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <br></br>
          <input
            type="password"
            name="password"
            className="login-box"
            onChange={(e) => passwordValidation(e,setPassword)}
          />
            <label>Confirm Password</label>
          <br></br>
             <input
            type="password"
            name="confirmPassword"
            className="login-box"
            onChange={(e) => passwordValidation(e,setConfirmPassword)}
          />
          <input type="submit" value="REGISTER" className="login-btn" />
        </form>
        <p style={{ color: "red" }}>
          {errorFromServer ? "error from server" : ""}
        </p>
      </div>
    </div>
  </div>
  );
};

export default Register;