import React from "react";
import img1 from "./images/steve2.webp";
import img2 from "./images/APJ.jpg";
import img3 from "./images/edison.jpg";

function Card() {
  return (
    <div
      className="row"
      style={{ margin: "2rem", backgroundColor: "GrayText" }}
    >
      <div class="card col-sm-4 m" style={{ backgroundColor: "grey" }}>
        <img
          src={img1}
          class="card-img-top"
          alt="..."
          style={{ borderRadius: "50%" }}
        />
        <div class="card-body">
          <p class="card-text" style={{ fontFamily: "cursive" }}>
            “Don't let the noise of others' opinions drown out your own inner
            voice.”
          </p>
        </div>
      </div>
      <div class="card col-sm-4" style={{ backgroundColor: "grey" }}>
        <img
          src={img2}
          class="card-img-top"
          alt="..."
          style={{ borderRadius: "50%" }}
        />
        <div class="card-body">
          <p class="card-text" style={{ fontFamily: "cursive" }}>
            "Excellence is a continuous process and not an accident."
          </p>
        </div>
      </div>
      <div class="card col-sm-4" style={{ backgroundColor: "grey" }}>
        <img
          src={img3}
          class="card-img-top"
          alt="..."
          style={{ borderRadius: "50%" }}
        />
        <div class="card-body">
          <p class="card-text" style={{ fontFamily: "cursive" }}>
            “What you are will show in what you do.”
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
