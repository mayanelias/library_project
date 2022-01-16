import { useState } from "react";
import axios from "axios";
import fireBaseApi from "../logic/key";
const Login = ({ setAuth, USERֹֹ_INFORMATIOM, flag }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorFromServer, setErrorFromServer] = useState(false);
  const [loading, setLoading] = useState(false);
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
        }, 3000);
      })
      .catch(function (error) {
        console.log(error);
        setErrorFromServer(true);
      });
  };
  return (
    <div className={flag ? "show" : "active"}>
      <div className="login-form">
        <div className="form-box">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              loginForm();
            }}
          >
            <h1 className="login-text">Sign-In</h1>
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
              onChange={(e) => setPassword(e.target.value)}
            />
              <input
                type="submit"
                value="SiGN-IN"
                className="login-btn"
              />
          </form>
          <p style={{ color: "red" }}>
            {errorFromServer ? "error from server" : ""}
          </p>
        </div>
      </div>
    </div>
  )
};
export default Login;
