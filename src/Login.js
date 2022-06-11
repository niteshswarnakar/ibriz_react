import React, { useState, useEffect, useContext } from "react";
import Input from "./Input";
import "./Loginpage.css";
import { useNavigate } from "react-router-dom";

import BlogContext from "./context/context";
import Button from "./Button";

const LoginPage = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [blogs, createBlog, updateBlog, deleteBlog, isLoggedIn, refreshLogin] =
    useContext(BlogContext);

  useEffect(() => {
    setFormIsValid(emailIsValid && passwordIsValid);
  }, [enteredEmail, enteredPassword, emailIsValid, passwordIsValid]);

  let navigate = useNavigate();
  const onLogin = (email, password) => {
    console.log("email - ", email);
    console.log("password - ", password);

    let savedEmail = localStorage.getItem("email");
    let savedPassword = localStorage.getItem("password");
    if (savedEmail === email && savedPassword === password) {
      refreshLogin(true);
      localStorage.setItem("isLoggedIn", "true");
      navigate("/blogs");
    } else {
      alert("Account didn't match");
      setEnteredPassword("");
    }
  };

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);

    let valid = e.target.value.includes("@") && e.target.value.includes(".");
    setEmailIsValid(valid);
  };

  const passwordChangeHandler = (e) => {
    let password = e.target.value;
    setEnteredPassword(password);
    const cap = /[A-Z]/;
    const small = /[a-z]/;
    const numeric = /[0-9]/;
    const len = password.trim().length >= 8;

    let valid =
      cap.test(password) &&
      small.test(password) &&
      numeric.test(password) &&
      len;
    console.log("validity - ", valid);
    setPasswordIsValid(valid);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onLogin(enteredEmail, enteredPassword);
  };

  return (
    <div class="login-form">
      <div className="login-title">
        <h2>Login</h2>
      </div>
      <form className="form-container" onSubmit={submitHandler}>
        <div className="input email">
          <label className="email-label" htmlFor="email">
            Email
          </label>
          <Input
            id="email"
            type="email"
            name="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
        </div>

        <div className="input password">
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            type="password"
            name="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
          />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default LoginPage;
