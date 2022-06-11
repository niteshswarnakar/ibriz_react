import React, { useState, useEffect } from "react";
import { useContext } from "react";
import BlogContext from "./context/context";
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";

import Input from "./Input";
import Button from "./Button";
function AddBlog() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredBlog, setEnteredBlog] = useState("");
  let [blogs, createBlog, updateBlog, deleteBlog, isLoggedIn, refreshLogin] =
    useContext(BlogContext);

  let blogId = useParams().id;

  console.log("blodId is - ", blogId);

  //   let target_index = blogs.findIndex((blog) => blog.id == blogId);

  let blog_index = blogs.findIndex((item) => item.id == blogId);
  let blog_data = blogs[blog_index];
  let navigate = useNavigate();

  useEffect(() => {
    setEnteredAuthor(blog_data?.author);
    setEnteredBlog(blog_data?.blog_body);
    setEnteredTitle(blog_data?.title);
  }, []);

  const titleChangeHandler = (e) => {
    console.log(e.target.value);
    setEnteredTitle(e.target.value);
  };

  const blogChangeHandler = (e) => {
    console.log(e.target.value);
    setEnteredBlog(e.target.value);
  };

  const authorChangeHandler = (e) => {
    console.log(e.target.value);
    setEnteredAuthor(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setEnteredAuthor("");
    setEnteredBlog("");
    setEnteredTitle("");
    let data = {
      title: e.target.title.value,
      blog_body: e.target.blog_body.value,
      author: e.target.author.value,
      id: blogId,
    };
    console.log("the submitted data is - ", data);
    updateBlog(data);
    navigate("/blogs");
  };

  return (
    <div>
      AddBlog
      <form onSubmit={submitHandler}>
        <div className="title">
          <label htmlFor="title">Title</label>
          <Input
            id="title"
            type="text"
            name="title"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="blog_body">
          <label htmlFor="blog_body">Blog</label>
          <Input
            id="blog_body"
            type="text"
            name="blog_body"
            onChange={blogChangeHandler}
            value={enteredBlog}
          />
        </div>
        <div className="author">
          <label htmlFor="author">Author</label>
          <Input
            onChange={authorChangeHandler}
            id="author"
            type="text"
            name="author"
            value={enteredAuthor}
          />
        </div>
        <Button type="submit">Add Blog</Button>
      </form>
    </div>
  );
}

export default AddBlog;
