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
import register from "./register.svg";
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

  return (
    <div className={`container2 ${signup ? "" : "sign-up-mode"}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="" className="sign-in-form">
            <h2 className="title">Sign In</h2>
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
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
              <div className="logo">
                <FontAwesomeIcon icon={faUser} className="input-logo" />
              </div>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <div className="logo">
                <FontAwesomeIcon icon={faEnvelope} className="input-logo" />
              </div>
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-field">
              <div className="logo">
                <FontAwesomeIcon icon={faLock} className="input-logo" />
              </div>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Sign up" className="btn solid" />

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
          <img src={register} className="image" alt="log" />
        </div>
      </div>
    </div>
  );
};

export default LoginTest;
