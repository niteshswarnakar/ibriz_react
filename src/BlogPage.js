import React from "react";
import { useState, useContext } from "react";
import BlogCard from "./BlogCard";
import "./Blogs.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

import BlogContext from "./context/context";

function BlogPage() {
  let [blogs, createBlog, updateBlog, deleteBlog, isLoggedIn, refreshLogin] =
    useContext(BlogContext);

  let username = localStorage.getItem("email");

  const navigate = useNavigate();
  const addBlog = (data) => {
    if (isLoggedIn) {
      navigate("/addblog");
    } else {
      navigate("/login");
    }
  };

  console.log(blogs);
  return (
    <div className="blogs">
      <h2 className="blog-page">Hi ,{username} </h2>
      <div className="add-blog">
        <Button onClick={addBlog}>Add New Blog</Button>
      </div>
      <ul className="blogs__container">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </ul>
    </div>
  );
}

export default BlogPage;
