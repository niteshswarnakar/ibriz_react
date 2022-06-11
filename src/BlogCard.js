import React, { useContext } from "react";
import "./Blogs.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import BlogContext from "./context/context";

function BlogCard({ blog }) {
  const [blogs, createBlog, updateBlog, deleteBlog, isLoggedIn, refreshLogin] =
    useContext(BlogContext);
  let navigate = useNavigate();

  const editHandler = () => {
    const blogId = blog?.id;
    // console.log("edit handler clicked");
    navigate(`/edit/${blogId}`);
  };
  const deleteHandler = (e) => {
    deleteBlog(blog?.id);
  };

  return (
    <div className="blog-container">
      <div className="title">
        <h3>{blog?.title}</h3>
      </div>
      <div className="blog-body">
        <p>{blog?.blog_body}</p>
      </div>
      <div className="author">
        <p className="author-name">- @{blog?.author}</p>
      </div>
      {isLoggedIn ? (
        <div className="button">
          <div className="edit-button">
            <Button className="edit" onClick={editHandler} type="button">
              Edit
            </Button>
          </div>

          <div className="delete">
            <Button className="button" onClick={deleteHandler} type="button">
              Delete
            </Button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default BlogCard;
