import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import imageee from "./images/image2.gif";

function Projects() {
  return (
    <div>
      <Navbar />
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${imageee})`,
          color: "white",
          height: "500px",
          alignItems: "center",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Projects</h2>
        <h2 style={{ textAlign: "center" }}>Coming Soon...</h2>
        <h2>Basic Projects</h2>
        <div className="text-center" style={{height:"200px",width:"400px",backgroundColor:"white",border:"2px solid green"}}>
        <Link to="https://music-website-blue.vercel.app">Music App</Link><br />
          <Link to="https://git-finder-8pdjohb0m-pooja2.vercel.app">Git Finder</Link><br />
          <Link to="https://worsri.github.io/box-office/">Box-office</Link>
          

       </div>
        
      </div>
    </div>
  );
}

export default Projects;
