import React from "react";
import logo from "./logo.svg";
import { FaBars, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import {links, social} from './data';
// import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <div className="links-container show-container">
          <ul className="links">
            {links.map(link=>{
              const {id, text, url} = link
              return(
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}            
          </ul>
        </div>
        <ul className="social-icons">
          {social.map(social=>{
            const {id, icon, url} = social;
            return(
              <li key={id}>
                <a href={url} target="_blank">{icon}</a>
              </li>
            )
          })}          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
