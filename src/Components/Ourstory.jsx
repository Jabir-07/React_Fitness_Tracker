import React from "react";
import Imgs from "../images/styimg.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/Ourstory.css";

const Ourstory = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row align-items-center justify-content-between">
          <div className="story-img col-md-5 text-center mb-4 mb-md-0">
            <img
              src={Imgs}
              className="img-fluid rounded story-img shadow"
              alt="Our Story"
            />
          </div>

          <div className="col-md-6">
            <h2 className="display-4 fw-bold mb-4 text-primary">
              OUR <span className="text-danger">STORY</span>
            </h2>
            <p className="lead text-justify">
              In every drop of sweat, there’s a story of progress. Our fitness
              tracker is more than just numbers and charts it’s your personal
              journey toward better health, one step at a time. Whether it’s a
              walk around the block or a long gym session, every move counts. We
              believe that consistent tracking leads to real transformation.
              This project is built with the goal to empower you to stay
              motivated, take charge of your goals, and become the best version
              of yourself not just physically, but mentally and emotionally too.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourstory;
