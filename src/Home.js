import React, { useContext } from "react";
import { useEffect } from "react";
import BlogContext from "./context/context";
import "./Home.css";
function Home() {
  let { blogs } = useContext(BlogContext);

  console.log(blogs);
  return (
    <div className="container">
      <section className="hero-section">
        <div className="section-left">
          <div className="section-intro">
            <p className="section-title">Hello, my name is</p>
            <h2 className="section-main">Nitesh Swarnakar</h2>
            <p className="section-secondary">
              And I'm a <span className="section-skill">CSE Student</span>
            </p>
          </div>
          <div className="section-button">
            <span className="b1">Blog</span>
            <span className="b2">Website</span>
          </div>
        </div>
        <div className="section-right">
          <img
            className="myimage"
            src="https://imgs.search.brave.com/l5gZZmweE_gWtEVeEErINfAKuBKx8GRJq95Njhu04tw/rs:fit:600:450:1/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvb2ZmaWNl/LWVtcGxveWVlcy13/b3JraW5nLXRvZ2V0/aGVyLWZvci1uZXct/aWRlYS0yNzM5MTkw/LTIyNzc1MDAucG5n"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
