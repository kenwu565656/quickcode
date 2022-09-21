import React from "react";
import "./NavBar.css";
import {Link} from "react-router-dom";

const NavBar = () =>{
    const navbar = ["Home", "Content", "About", "Statistics"];
    const path = ["/", "/posts", "/about", "stat"];
    return(
      <nav className="NavBar_container">
      <div className="logo">
      <Link className="logo_link" to={"./posts"}><b><span className="red_word">Q</span>uick<span className="green_word">Code</span></b></Link>
      </div>
      <div className="nav_links">
        <ul>
        {
        navbar.map((item, index) => {
          return(
            <li key={index} >

               <Link to={path[index]} className="nav">{item}</Link>
            </li>
          )
        })
      }
      </ul>
      </div>
      </nav>
    );
  }

export default NavBar;