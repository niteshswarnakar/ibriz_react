import React from "react";
import BlogContext from "./context/context";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
function Form({ match }) {
  let [blogs, createBlog, updateBlog, deleteBlog, isLoggedIn, refreshLogin] =
    useContext(BlogContext);

  let blogId = useParams();
  console.log("blogId from edit/:id route - ", blogId);
  let newdata = [];
  let data = {
    author: "yogesh dai",
    title: "Business Experience",
    blog_body:
      "i am nitesh . I am not that guys who can make is so easy for something which i have never imgainedswarnakar i am not feeling well . can u provide me some tips to be happy",
    id: "3",
  };

  const updateData = () => {
    updateBlog(data);
  };

  return <div onClick={updateData}>form</div>;
}

export default Form;
