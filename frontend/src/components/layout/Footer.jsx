import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { FaGitSquare } from "react-icons/fa";
import { Context } from "../../main";

const Footer = () => {
  const isDashboard = useLocation("http://localhost:5173/dashboard");
  const { mode, setMode } = useContext(Context);

  return (
    <footer
      className={
        isDashboard.pathname === "/dashboard"
          ? "hideFooter"
          : mode === "light"
          ? "light-footer"
          : "dark-footer"
      }
    >
      <div className="container">
        <div className="about">
          <h3>About</h3>
          <p>
          I'm currently a 4th-year engineering student at Delhi 
          Technological University (DTU), where I've been specializing in
          Electrical Engineering.Over the past few years, I've built a strong
           foundation in programming languages like C++, JavaScript.I've applied
            this knowledge in various projects.
          </p>
          <p>
            <span>Email:</span>pd05011982@gmail.com
          </p>
          <p>
            <span>Phone:</span>79923614##
          </p>
        </div>
        <div className="quick_links">
          <h3>Quick Links</h3>
          <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
          </ul>
        </div>
       
        <div className="news_letter">
          <div>
            <h3>Quick Links to connect us via various social media </h3>
           
          </div>
          
           <div className="links">
          <Link to={"https://www.instagram.com/harshit_p2678/"} target="_blank">
          <AiFillInstagram /> InstaGram
          
          </Link>
          <Link to={"https://github.com/harshitp2678"} target="_blank">
          <FaGitSquare /> GitHub
          </Link>
          <Link to={"https://www.linkedin.com/in/harshit-kumar-955930289/"}>
          <AiFillLinkedin /> Linkedin
          </Link>
        </div>
        </div>
      </div>
      <div className="container">
        <div className="logo">ZETA <span>BLOG</span></div>
        <div className="links">
          <Link to={"https://www.instagram.com/harshit_p2678/"} target="_blank">
            <AiFillInstagram />
          </Link>
          <Link to={"https://github.com/harshitp2678"} target="_blank">
            <FaGitSquare />
          </Link>
          <Link to={"https://www.linkedin.com/in/harshit-kumar-955930289/"} target="_blank">
            <AiFillLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
