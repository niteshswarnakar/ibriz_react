import React, { useState } from "react";
import { useContext } from "react";
import BlogContext from "./context/context";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";
import "./AddBlog.css";
function AddBlog() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredBlog, setEnteredBlog] = useState("");
  const [isEnough, setIsEnough] = useState(false);
  let [blogs, createBlog, updateBlog, deleteBlog, isLoggedIn, refreshLogin] =
    useContext(BlogContext);

  let navigate = useNavigate();

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const blogChangeHandler = (e) => {
    let blog_length = e.target.value;
    const flag = blog_length.trim().length >= 8;
    setIsEnough(flag);
    setEnteredBlog(e.target.value);
  };

  const authorChangeHandler = (e) => {
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
    };
    if (isEnough) {
      createBlog(data);
      navigate("/blogs");
    } else {
      let temp = enteredBlog;
      alert("Blog ekdamai saano vayo :)");
      setEnteredBlog(temp);
    }
  };

  return (
    <div className="container">
      <h2 className="add-blog">Add Blog</h2>
      <form className="blog-form" onSubmit={submitHandler}>
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
            value={enteredBlog}
            onChange={blogChangeHandler}
          />
        </div>
        <div className="author">
          <label htmlFor="author">Author</label>
          <Input
            id="author"
            type="text"
            name="author"
            value={enteredAuthor}
            onChange={authorChangeHandler}
          />
        </div>
        <div className="add-button">
          <Button type="submit">Add Blog</Button>
        </div>
      </form>
    </div>
  );
}

export default AddBlog;
