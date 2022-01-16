import { useState } from "react";
import axios from "axios";
import fireBaseApi from "../../logic/key";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./register.css";
const Register = ({ setAuth, USERֹֹ_INFORMATIOM}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorFromServer, setErrorFromServer] = useState("");
  const [messageErrorPassword, setMessageErrorPassword] = useState("");
  const [formValidation, setformValidation] = useState("");
  const registerForm = () => {
    setLoading(true);
    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${fireBaseApi}`,
        {
          email,
          password,
        }
      )
      .then(function (response) {
        setLoading(false);
        setTimeout(() => {
          console.log(response);
          setAuth(response.data.email);
          localStorage.setItem(
            USERֹֹ_INFORMATIOM,
            JSON.stringify(response.data.email)
          );
        }, 2000);
      })
      .catch(function (error) {
        setErrorFromServer(error);
        setErrorFromServer(true);
        setLoading(false);
      });
  };
  const passwordValidation = (e, handlePassword) => {
    if (
      e.target.value.length > 6 &&
      e.target.value !== "" &&
      e.target.value != 0 &&
      e.target.value !== null
    ) {
      handlePassword(e.target.value);
    }
  };
  return (
    <div className="active show">            
      <div className="login-form">
        <div className="form-box solid">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (password === confirmPassword) {
                registerForm();
              } else {
                setMessageErrorPassword("incorrect password!!!");
              }
              if(password||confirmPassword||email== ""){
              setformValidation("you have to fill all input")
              }
            }}
          >
            <h1 className="login-text">Register</h1>
            <label>Email</label>
            <br></br>
            <input
              type="email"
              name="email"
              className="login-box"
              onChange={(e) => setEmail(e.target.value)
              }
            />
            <label>Password</label>
            <br></br>
            <input
              type="password"
              name="password"
              className="login-box"
              onChange={(e) => {passwordValidation(e, setPassword)
              }}
            />
            <label>Confirm Password</label>
            <br></br>
            <input
              type="password"
              name="confirmPassword"
              className="login-box"
              onChange={(e) => {passwordValidation(e, setConfirmPassword)
              }}
            />
            {loading ? (
              <p>
                <Spinner animation="border" variant="primarey" />
              </p>
            ) : (
              <input disabeld={!email || !password|| !confirmPassword} type="submit" value="REGISTER" className="login-btn" />
            )}
          </form>
          <h5 style={{ color: "red" }}>
            {errorFromServer ? "error from server" : ""}
          </h5>
          <h5 style={{ color: "red" }}>
            {messageErrorPassword ? "incorrect password !!!" : ""}
          </h5>
          <h6 style={{ color: "red" }}>
            {formValidation ? "you have to fill all input" : " "}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Register;
