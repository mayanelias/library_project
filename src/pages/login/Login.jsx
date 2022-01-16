import { useState } from "react";
import axios from "axios";
import fireBaseApi from "../../logic/key";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
const Login = ({ setAuth, USERֹֹ_INFORMATIOM }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorFromServer, setErrorFromServer] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disabeld, setDisabeld] = useState(false);
  const loginForm = () => {
    setLoading(true);
    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${fireBaseApi}`,
        {
          email,
          password,
        }
      )
      .then(function (response) {
        setTimeout(() => {
          setLoading(false);
          console.log(response);
          setAuth(response.data);
          console.log(response.data);
          localStorage.setItem(
            USERֹֹ_INFORMATIOM,
            JSON.stringify(response.data)
          );
        }, 2000);
      })
      .catch(function (error) {
        console.log(error);
        setErrorFromServer(true);
        setLoading(false);
      });
  };
  const formValidation = () => {
    return email.length && password.length;
  };
  return (
    <div className="show active">
      <div className="login-form">
        <div className="form-box">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (formValidation()) {
                loginForm();
              }
            }}
          >
            <h1 className="login-text">Sign-In</h1>
            <label>Email</label>
            <br></br>
            <input
              type="email"
              name="email"
              className="login-box"
              onChange={(e) => {
                setEmail(e.target.value), setDisabeld(() => formValidation());
              }}
            />
            <label>Password</label>
            <br></br>
            <input
              type="password"
              name="password"
              className="login-box"
              onChange={(e) => {
                setPassword(e.target.value),
                  setDisabeld(() => formValidation());
              }}
            />
            {loading ? (
              <p>
                <Spinner animation="border" variant="primarey" />
              </p>
            ) : (
              <input
                disabeld={!disabeld}
                type="submit"
                value="SiGN-IN"
                className="login-btn"
              />
            )}
          </form>
          <h5 style={{ color: "red" }}>
            {errorFromServer ? "error from server" : ""}
          </h5>
        </div>
      </div>
    </div>
  );
};
export default Login;
