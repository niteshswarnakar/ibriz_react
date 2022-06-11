import React, { useContext } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Button from "./Button";
import BlogContext from "./context/context";

function Header() {
  const [blogs, createBlog, updateBlog, deleteBlog, isLoggedIn, refreshLogin] =
    useContext(BlogContext);

  const onLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    refreshLogin(false);
  };

  return (
    <div className="my-header">
      <div className="header">
        <div className="header__left">
          <p className="portfo">
            ibriz<span className="test"> test.</span>
          </p>
        </div>
        <div className="header__nav">
          <Link className="nav__link n1" to="/">
            Home
          </Link>
          <Link className="nav__link n2" to="/blogs">
            Top Blogs
          </Link>
          {!isLoggedIn ? (
            <Link className="nav__link n2" to="/login">
              <Button type="button">Login</Button>
            </Link>
          ) : (
            <Link className="nav__link n2" to="/">
              <Button onClick={onLogout} type="button">
                Logout
              </Button>
            </Link>
          )}
          {!isLoggedIn ? (
            <Link className="nav__link n2" to="/signup">
              <Button type="button">Sign up</Button>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
