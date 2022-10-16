import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
// import {
//   faFacebook,
//   faLinkedin,
//   faGithub,
//   faGoogle,
// } from "@fortawesome/free-brands-svg-icons";

import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./login2.css";

import login from "./log.svg";
import reg from "./register.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const LoginTest = () => {
  const [signup, setSignUp] = useState(true);

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  // Register .....

  const publicRequest = axios.create({
    baseURL: "http://localhost:5000/api",
  });

  const register = async (user) => {
    try {
      publicRequest.post("/auth/register", user);
    } catch (err) {}
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfirmPassword] = useState("");
  // eslint-disable-next-line
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // if(inputText.value.match(mailformat))
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (username.length === 0) {
      alert("Username Field is empty");
    } else if (username.length < 3) {
      alert("Length should be greater than 3");
    } else if (email.length === 0) {
      alert("Email Field is empty");
    } else if (!email.match(mailformat)) {
      alert("Not Valid email address format!");
    } else if (password.length === 0) {
      alert("Password is empty");
    } else if (password.length < 6) {
      alert("Password Should be greater than 6");
    } else if (!(confrimPassword === password)) {
      alert("Not match the pasword");
    } else {
      await register({ username, email, password });
      navigate('/')
    }
  };

  return (
    <div className={`container2 ${signup ? "" : "sign-up-mode"}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="" className="sign-in-form">
            <h2 className="title">Login</h2>
            <div className="input-field">
              <div className="logo">
                <FontAwesomeIcon icon={faUser} className="input-logo" />
              </div>
              <input
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <div className="logo">
                <FontAwesomeIcon icon={faLock} className="input-logo" />
              </div>
              <input
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <input
              type="submit"
              disabled={loading}
              onClick={handleClick}
              value="Login"
              className="btn solid"
            />
            {error && <span>{error.message}</span>}
            {/* <p className="social-text">Or Sign In With Social Network</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div> */}
          </form>

          <form action="" className="sign-up-form">
            <h2 className="title">Register</h2>
            <div className="input-field">
              <div className="logo">
                <FontAwesomeIcon icon={faUser} className="input-logo" />
              </div>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
            </div>
            <div className="input-field">
              <div className="logo">
                <FontAwesomeIcon icon={faEnvelope} className="input-logo" />
              </div>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="input-field">
              <div className="logo">
                <FontAwesomeIcon icon={faLock} className="input-logo" />
              </div>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <div className="input-field">
              <div className="logo">
                <FontAwesomeIcon icon={faLock} className="input-logo" />
              </div>
              <input
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
              />
            </div>
            <input
              type="submit"
              onClick={handleSignUp}
              value="Sign up"
              className="btn solid"
            />

            {/* <p className="social-text">Or Sign up With Social Network</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div> */}
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New Here ?</h3>
            <p>New Member for your community then sign-up?</p>
            <button
              onClick={() => setSignUp(false)}
              className="btn transparent"
              id="sign-up-btn"
            >
              Sign Up
            </button>
          </div>
          <img src={login} className="image" alt="log" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One Of us ?</h3>
            <p>Already Member for your community then sign-In?</p>
            <button
              onClick={() => setSignUp(true)}
              className="btn transparent"
              id="sign-in-btn"
            >
              Sign In
            </button>
          </div>
          <img src={reg} className="image" alt="log" />
        </div>
      </div>
    </div>
  );
};

export default LoginTest;
