import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Singup";
import BlogPage from "./BlogPage";
import BlogContext from "./context/context";
import BlogCard from "./BlogCard";
import { useState } from "react";
import Form from "./Form";
import AddBlog from "./AddBlog";
import EditBlog from "./EditBlog";
function App() {
  const raw_data = [
    {
      author: "iamniteshswarnkar",
      title: "My journey",
      blog_body:
        "Hello sir/ma'am. I am searching for internship opportunities. I am very hopeful from your company. I am 4rth year computer engineering student. I am in my learning phase and what I believe is Once I get to work and learn in your platform , I assure you that I can contribute so much to your company and build my career as well",
      id: "1",
    },
    {
      author: "manjuswarnakar",
      title: "Your destination",
      blog_body:
        "I have loved travel for as long as I can remember. My parents instilled that in me at a very young age. Our summers, and a lot of our weekends, were spent travelling in our RV. We did a lot of local trips here in ALBERTA but also went on some long haul journeys. We drove to ALASKA, across Canada, and to Southern California, just to name a few. I loved seeing new places and learning about the history and culture. Social Studies was always my favourite subject in school.",
      id: "2",
    },
  ];

  const [blogs, setBlogs] = useState(raw_data);

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );

  let savedEmail = localStorage.getItem("email");
  let savedPassword = localStorage.getItem("password");

  const refreshLogin = (status) => {
    setIsLoggedIn(status);
  };

  const deleteBlog = (id) => {
    let target_index = blogs.findIndex((blog) => blog.id == id);

    let mylist = blogs.filter((blog) => blog.id != blogs[target_index].id);

    setBlogs(mylist);
  };

  const updateBlog = (blog_data) => {
    let target_id = blog_data.id;
    let target_index = blogs.findIndex((item) => item.id === target_id);
    console.log("target id - ", target_id);
    console.log("target index - ", target_index);
    console.log("target id --- ", target_index);
    console.log("context updateblog got -- ", blog_data);
    let shallow_blogs = [...blogs];
    // let item = shallow_blogs[target_id]
    shallow_blogs[target_index] = blog_data;

    setBlogs(shallow_blogs);
  };

  const createBlog = (data) => {
    let shallow_blogs = [...blogs];
    shallow_blogs.unshift(data);
    // const updatedData = blogs.concat(data);
    setBlogs(shallow_blogs);
  };

  return (
    <Router>
      <BlogContext.Provider
        value={[
          blogs,
          createBlog,
          updateBlog,
          deleteBlog,
          isLoggedIn,
          refreshLogin,
        ]}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogCard />} />
          <Route path="/edit/:id" element={<EditBlog />} />
          <Route path="/delete/:id" element={<Form />} />
          <Route path="/addblog" element={<AddBlog />} />
        </Routes>
      </BlogContext.Provider>
    </Router>
  );
}

export default App;
