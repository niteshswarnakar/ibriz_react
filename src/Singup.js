import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import "./Loginpage.css";

import BlogContext from "./context/context";

const Signup = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [enteredPassword1, setEnteredPassword1] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);

  const [blogs, createBlog, updateBlog, deleteBlog, isLoggedIn, refreshLogin] =
    useContext(BlogContext);

  useEffect(() => {
    setFormIsValid(emailIsValid && passwordIsValid);
  }, [emailIsValid, passwordIsValid, passwordMatch]);

  let navigate = useNavigate();
  const onRegister = (email, password) => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("isLoggedIn", "true");
    refreshLogin(true);
    navigate("/blogs");
  };

  const emailChangeHandler = (e) => {
    console.log(e.target.value);
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

  const passwordMatchHandler = (e) => {
    let password = e.target.value;
    setEnteredPassword1(password);

    let valid = enteredPassword === enteredPassword1;
    console.log("enteredPassword === enteredPassword1 -", valid);
    setPasswordMatch(valid);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onRegister(enteredEmail, enteredPassword);
  };

  return (
    <div className="signup-form">
      <h2>Signup</h2>
      <form className="form-container" onSubmit={submitHandler}>
        <div className="input email">
          <label htmlFor="email">Email</label>
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

        <div className="password1">
          <label htmlFor="password1">Confirm Password</label>
          <Input
            id="password1"
            type="password"
            name="password1"
            value={enteredPassword1}
            onChange={passwordMatchHandler}
          />
        </div>

        <Button type="submit">Signup</Button>
      </form>
    </div>
  );
};

export default Signup;
