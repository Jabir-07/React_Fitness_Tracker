import React from "react";

const WeightGain = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-primary">🏋️ Weight Gain Workout Plan</h2>

      <p className="lead text-center">
        This workout plan helps you gain healthy weight by building lean muscle mass through strength training and progressive overload.
      </p>

      <div className="row mt-5">
        <div className="col-md-6">
          <h4 className="text-success">💪 Weekly Workout Routine</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Day 1:</strong> Full Body Strength Training
            </li>
            <li className="list-group-item">
              <strong>Day 2:</strong> Chest + Triceps
            </li>
            <li className="list-group-item">
              <strong>Day 3:</strong> Back + Biceps
            </li>
            <li className="list-group-item">
              <strong>Day 4:</strong> Rest or Light Cardio
            </li>
            <li className="list-group-item">
              <strong>Day 5:</strong> Legs + Shoulders
            </li>
            <li className="list-group-item">
              <strong>Day 6:</strong> Core + Full Body Stretch
            </li>
            <li className="list-group-item">
              <strong>Day 7:</strong> Rest
            </li>
          </ul>
        </div>

        <div className="col-md-6">
          <h4 className="text-info">🍽️ Diet & Tips</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Eat calorie-dense meals 5-6 times a day</li>
            <li className="list-group-item">Include protein-rich foods (chicken, paneer, eggs, dals)</li>
            <li className="list-group-item">Drink protein shakes or mass gainers if needed</li>
            <li className="list-group-item">Track progress weekly (weight, body measurements)</li>
            <li className="list-group-item">Sleep 7-8 hours daily for muscle recovery</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-success" onClick={() => window.scrollTo(0, 0)}>
          🔼 Back to Top
        </button>
      </div>
    </div>
  );
};

export default WeightGain;
