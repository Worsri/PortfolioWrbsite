import React from "react";
import Navbar from "./Navbar";
import imagee from "./images/profilepic2.jpg";
import imageee from "./images/bgimage.avif";
import "./Aboutus.css";

function AboutUs() {
  return (
    <>
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${imageee})`,
          color: "white",
          height: "auto",
        }}
      >
        <Navbar />
        <h2 style={{ textAlign: "center" }}>About Me</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h5>Personal Information:</h5>
          <div
            className="infocontainer"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="devinfo" style={{ lineHeight: "50px" }}>
              <h3 className="hello">Hi, I am </h3>
              <div className="name">Pooja  </div>
              <div className="about">Engineer , Developer and Explorer</div>
              {/* <div className=" text-warning  font-monospace " id="ingo">
                Hi I am <div>Pooja Srivastava</div> based from India . I love to
                turn ideas into real life products . I design things for web by
                profession.
              </div> */}
              <div className="buttons mt-2">
                <button >
                  <a className="text-decoration-none text-dark" href="https://drive.google.com/file/d/177oQ6CQwZ8Mncgn77tBX86IgllEwDDD9/view?usp=sharing"  download>Download CV</a></button>
                <button ><a className="text-decoration-none text-dark" href="https://worsrifirstonlinegoddaydomain.godaddysites.com/">Contact Me</a></button>
              </div>
            </div>
            <div className="devpic">
              <img
                src={imagee}
                alt="dev_pic`"
                style={{ height: "500px", width: "400px", borderRadius: "50%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
