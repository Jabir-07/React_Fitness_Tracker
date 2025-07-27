import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/Login.css";
import log from "../images/loginimg.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      alert("Please fill in all fields!");
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);
    alert(`Login Success!\nEmail: ${email}`);
  };

  return (
    <>
      <div
        className="login-bg-container d-flex justify-content-center align-items-center "
        style={{
          backgroundImage: `url(${log})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <div className="row align-items-center justify-content-center shadow p-4 bg-success rounded">
          <div className="col-md-6 p-4">
            {/* <FontAwesomeIcon icon={faUser}/> */}
            <h2 className="display-5 text-center mb-4 fst-italic text-light">Login</h2>

            <input
              type="email"
              placeholder="Enter Your Email Here..."
              className="form-control mb-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Enter Your Password Here..."
              className="form-control mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="btn btn-primary w-100"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>

          <div className="col-md-6 col-lg-6 text-center bg-dark">
            <img
              src={log}
              alt="Login Visual"
              className="img-fluid rounded login-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
