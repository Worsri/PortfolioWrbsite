import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import imagee from "./images/image2.gif";
import Typed from "typed.js";
import "./Home.css";

import namimg from "./images/nambg.jpg";
import SliderCard from "./SliderCard";

function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Welcome on my portfolio"],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div style={{ height: "auto" }}>
        <Navbar />
      </div>
      <div
        className="bg-image row "
        style={{
          backgroundImage: `url(${imagee})`,
          color: "white",
          height: "300px",
        }}
      >
        {/* <img src={imagee} style={{height:"500px", width:"500px"}} alt=""/> */}
        <div className="col-sm-4 mt-5 mx-5 moreabout">
          <span className="  my-5 " style={{ fontWeight: "900" }}>
            turning ideas into real life
            <span style={{ color: "purple" }}> {"   "}product</span> is my
            calling
          </span>
        </div>
        <div className="col-sm-8">
          <h2 style={{ textAlign: "center" }}>Profile</h2>
          <div className="devinfo">
            <div
              ref={el}
              style={{ fontSize: "25px", textAlign: "center" }}
            ></div>
            <div className="mx-5" style={{ textAlign: "center" }}>
              Hi, I am{" "}
              <div
                id="naam"
                style={{
                  fontSize: "64px",
                  fontWeight: "bolder",
                  backgroundImage: `url(${imagee})`,
                  webkitURLBackgroundClip: "text" /* For Safari/Chrome */,

                  width: "auto",
                }}
              >
                Pooja Srivastava
              </div>
            </div>

            <div
              className="text-success mx-5"
              style={{ fontSize: "24px", textAlign: "center" }}
            >
              Developer , Engineer and Explorer
            </div>
          </div>
          <form action=""></form>
        </div>
      </div>
      <div style={{ margin: "20px" }}>
        <SliderCard />
      </div>
    </>
  );
}

export default Home;
