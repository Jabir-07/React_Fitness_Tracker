import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Join = () => {
  return (
    <>
      <div className="join-container d-flex row justify-content-evenly">
        <div className="ptag display-4 text-dark">
          <h2>
            — TAKE THE FIRST STEP ON A JOURNEY THAT PUSHES YOU TO THE LIMIT
          </h2>
        </div>
        <div className="butn">
          <button className="joinbtn btn btn-success"> JOIN NOW </button>
        </div>
      </div>
    </>
  );
};

export default Join;
