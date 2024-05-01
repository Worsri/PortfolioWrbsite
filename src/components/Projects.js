import React from "react";
import Navbar from "./Navbar";
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
        <textarea name="" id="" cols="30" rows="10">
          <a href="music-website-blue.vercel.app">Music App</a>
          <a href="git-finder-8pdjohb0m-pooja2.vercel.app">Git Finder</a>
          <a href=""></a>
          <a href=""></a>
        </textarea>
      </div>
    </div>
  );
}

export default Projects;
