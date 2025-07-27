import React, { useState } from "react";
import "../css/Bmi.css";

const Bmi = ({ cat, setcat }) => {
  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);
  const [bmi, setbmi] = useState(0);

  function bmiCalc() {
    const heightInMeter = height / 100;
    const result = weight / (heightInMeter * heightInMeter);
    const bmiValue = result.toFixed(1);
    setbmi(bmiValue);

    if (bmiValue < 18.5) {
      setcat("Under Weight");
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setcat("Normal Weight");
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setcat("Over Weight");
    } else {
      setcat("Obese");
    }
  }

  return (
    <div className="col-md-4 col-lg-6">
      <h4 className="text-danger mt-3 text-center "> Check Your BMI First </h4>
      <div className="card shadow p-3">
        <h5 className="card-title text-center">BMI Calculator</h5>

        <div className="mb-3">
          <label className="form-label">Height</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter height"
            value={height}
            onChange={(e) => setheight(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Weight</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter weight"
            value={weight}
            onChange={(e) => setweight(e.target.value)}
          />
        </div>

        <button onClick={bmiCalc} className="btn btn-success w-100">
          Calculate BMI
        </button>

        <div className="mb-3">
          <label className="form-label">BMI</label>
          <input type="number" className="form-control" value={bmi} readOnly />
        </div>

        <div className="result text-center">
          <h5
            className={
              cat === "Under Weight"
                ? "text-warning"
                : cat === "Normal Weight"
                ? "text-success"
                : cat === "Over Weight"
                ? "text-primary"
                : "text-danger"
            }
          >
            You are {cat}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Bmi;
