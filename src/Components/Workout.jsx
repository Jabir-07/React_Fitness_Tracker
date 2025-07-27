import React, { useState } from "react";
import "../css/Card.css";
import Bmi from "./Bmi";

const Workout = () => {
  const [cat, setcat] = useState("");

  return (
    <>
      
      <div className="container my-5 d-flex flex-row justify-content-center align-items-center gap-5 ">
        <Bmi cat={cat} setcat={setcat} />

        <div className="crd col-lg-6 d-flex flex-column text-center gap-3">
          <div className={`crd ${cat === "Under Weight" ? "blink" : ""}`}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Weight Gain</h5>
                <p className="card-text">
                  Build muscles and gain healthy weight with tailored workouts
                  and diets.
                </p>
                <button className="btn btn-outline-primary">Explore</button>
              </div>
            </div>
          </div>

          <div
            className={`crd ${
              cat === "Over Weight" || cat === "Obese" ? "blink" : ""
            }`}
          >
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Weight Loss</h5>
                <p className="card-text">
                  Burn fat effectively and track progress with personalized
                  routines.
                </p>
                <button className="btn btn-outline-primary">Explore</button>
              </div>
            </div>
          </div>

          <div className={`crd ${cat === "Normal Weight" ? "blink" : ""}`}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Weight Maintenance</h5>
                <p className="card-text">
                  Maintain your fitness with balanced meal plans and workouts.
                </p>
                <button className="btn btn-outline-primary">Explore</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Workout;
