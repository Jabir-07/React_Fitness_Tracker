import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Home.css";
import About from "./About";
import Contact from "./Contact";
import Workout from "./Workout";
import Ourstory from "./Ourstory";
import Bmi from "./Bmi";
import Bnfts from "./Bnfts";

const Homepage = () => {
  return (
    <>
      <div className="imagcont container-fluid bg-light py-5 mt-2 ">
        <div className=" d-flex flex-column justify-content-center align-items-center  ">
          <div className="col-md-8 text-center  ">
            <h2 className="display-5 fst-italic  mb-4 text-white">
              IT DOESN'T GET EASIER. YOU GET BETTER
            </h2>
            <button className="btn btn-primary mt-5">View All Workouts</button>
          </div>
        </div>
      </div>

      <div className="scdcontmain ">
        <div className="scdprnt mt-2 bg-dark    ">
          <div className="bwr  d-flex flex-row  justify-content-center justify-content-center py-4 ">
            <Workout />
          </div>
        </div>
      </div>
      <div
        className=" bg-success mt-5"
        style={{ width: "100%", height: "10px" }}
      ></div>
      <Ourstory />
      <div
        className=" bg-success mt-5"
        style={{ width: "100%", height: "10px" }}
      ></div>
      <About />
      <div className="nm">
        <h2 className="flw-name display-4 fst-bold text-center">
          FOLLOW @VISHWAGYMTRAINER
        </h2>
      </div>
      <Bnfts />
      <Contact />
    </>
  );
};

export default Homepage;
