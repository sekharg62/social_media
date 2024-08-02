import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useDispatch, useSelector } from 'react-redux';
import { login, signup } from "../../api/AuthRequest";


const Auth = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) =>state.authReducer.loading)
  const [isSignup, setSignUp] = useState(true);
  console.log("loading:",loading);
  //const dispatch = useDispatch();
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    password: "", 
    confirmpass: "",
    username: ""
  });
  const [confirmpass, setConfirmPass] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      if (data.password === data.confirmpass) {
        dispatch(signup(data));
      } else {
        setConfirmPass(false);
      }
    } else {
      dispatch(login(data));
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstname: "",
      lastname: "",
      password: "",
      confirmpass: "",
      username: ""
    });
  };

  const toggleSignUp = () => {
    resetForm();
    setSignUp(!isSignup);
  };

  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>ZKC Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignup ? "Sign up" : "Login"}</h3>

          {isSignup && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}

          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={data.username}
            />
          </div>

          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignup && (
              <input
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={data.confirmpass}
              />
            )}
          </div>
          <span
            style={{
              display: confirmpass ? "none" : "block",
              color: 'red',
              fontSize: '12px',
              alignSelf: "flex-end",
              marginRight: "5px"
            }}
          >
            *Confirm Password is not same
          </span>

          <div>
            <span
              style={{ fontSize: '12px', cursor: "pointer" }}
              onClick={toggleSignUp}
            >
              {isSignup ? "Already have an account? Login!" : "Don't have an account? Sign up"}
            </span>
          </div>
          <button className="button infoButton" type="submit">{isSignup ? "Sign up" : "Login"}</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
