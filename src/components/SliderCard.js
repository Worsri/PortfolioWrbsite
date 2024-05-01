import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import img1 from "./images/APJ.jpg";
import img2 from "./images/steve.png";
import img3 from "./images/edison.jpg";

function SliderCard() {
  return (
    <>
      <div>
        <Carousel interval={1000} pause="hover">
          <Carousel.Item>
            <div
              className="d-flex justify-content-center align-items-center flex-row  "
              style={{
                background: "#eba834",
                borderRadius: "20px",
                paddingTop: "20px",
                boxShadow: "10px 10px 10px grey",
                height: "300px", // Adjust the height according to your needs
              }}
            >
              <img
                src={img1}
                alt="Not found"
                style={{
                  borderRadius: "50%",
                  height: "200px",
                }}
              />
              <h6
                className="text-center"
                style={{
                  fontFamily: "cursive",
                  color: "Brown",
                  padding: "20px",
                  fontSize: "18px",
                  fontStyle: "italic",
                  marginTop: "10px",
                  textShadow: "3px 3px 3px grey",
                }}
              >
                "You cannot change your future, but, you can change your habits,
                and surely your habits will change your future."
              </h6>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="d-flex justify-content-center align-items-center flex-row"
              style={{
                background: "#eba834",
                borderRadius: "20px",
                paddingTop: "20px",
                boxShadow: "10px 10px 10px grey",
                height: "300px", // Adjust the height according to your needs
              }}
            >
              <img
                src={img2}
                alt="Not found"
                style={{
                  borderRadius: "75%",
                  height: "200px",
                }}
              />
              <h6
                className="text-center"
                style={{
                  fontFamily: "cursive",
                  color: "Brown",
                  padding: "20px",
                  fontSize: "18px",
                  fontStyle: "italic",
                  marginTop: "10px",
                  textShadow: "3px 3px 3px grey",
                }}
              >
                “Don't let the noise of others' opinions drown out your own inner voice.”
              </h6>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="d-flex justify-content-center align-items-center flex-row"
              style={{
                background: "#eba834",
                borderRadius: "20px",
                paddingTop: "20px",
                boxShadow: "10px 10px 10px grey",
                height: "300px", // Adjust the height according to your needs
              }}
            >
              <img
                src={img3}
                alt="Not found"
                style={{
                  borderRadius: "75%",
                  height: "200px",
                }}
              />
              <h6
                className="text-center"
                style={{
                  fontFamily: "cursive",
                  color: "Brown",
                  padding: "20px",
                  fontSize: "18px",
                  fontStyle: "italic",
                  marginTop: "10px",
                  textShadow: "3px 3px 3px grey",
                }}
              >
                “Don't let the noise of others' opinions drown out your own inner voice.”
              </h6>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default SliderCard;
