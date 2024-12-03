import React from 'react';
import "../styles/DeveloperSite.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function DeveloperSite() {
  return (
    <div className="bg-container">
      <h1 className="main-heading"># Welcome to the Developer Page</h1>
      <p className="description">
        This page showcases own talented of developers.
      </p>
      <h2 className="section-heading">About Details</h2>
      <ul className="developer-list">
        <li>
          <strong >Manivasan Paramahamsar</strong>
          <p >Role: Java full stack Developer</p>
         
        </li>
        <a
          href="https://www.linkedin.com/in/manivasan-p-95233721b/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link linkedin-link"
        >
          <FaLinkedin className="icon" /> LinkedIn
        </a>
        
      </ul>
      <h2 className="section-heading">Projects</h2>
      <p className="description">
        I'm worked on a variety of exciting projects. Check them out on our
        GitHub repositories:
      </p>
      <div className="links-container">
        <a
          href="https://github.com/Manivasan52/FullStackApplication"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link github-link"
        >
          <FaGithub className="icon" /> GitHub
        </a>
        
        
      </div>
      <p> © All Rights Reserved  2024- Jrishmani</p>
      
     
    </div>
  );
}

export default DeveloperSite;
