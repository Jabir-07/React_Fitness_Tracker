import React from "react";
import { Link } from "react-router-dom";


const WeightLossWorkout = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Weight Loss Workout Plan</h2>

      <div className="mb-4">
        <h4>🔥 Daily Workout Routine</h4>
        <ul className="list-group">
          <li className="list-group-item">1. 10-minute warm-up (Jumping jacks, High knees)</li>
          <li className="list-group-item">2. 3 sets of 15 squats</li>
          <li className="list-group-item">3. 3 sets of 10 push-ups</li>
          <li className="list-group-item">4. 3 sets of 20 mountain climbers</li>
          <li className="list-group-item">5. 15-minute brisk walk or jog</li>
          <li className="list-group-item">6. 5-minute cooldown stretches</li>
        </ul>
      </div>

      <div className="mb-4">
        <h4>🥗 Diet Suggestions</h4>
        <ul className="list-group">
          <li className="list-group-item">✅ Drink at least 2-3 liters of water daily</li>
          <li className="list-group-item">✅ Eat more fiber-rich food (vegetables, fruits, oats)</li>
          <li className="list-group-item">✅ Avoid sugar and deep-fried items</li>
          <li className="list-group-item">✅ Include protein (eggs, lentils, lean chicken)</li>
          <li className="list-group-item">✅ Have small meals at regular intervals</li>
        </ul>
      </div>

      <div className="text-center">
        <Link to="/" className="btn btn-primary">← Back to Dashboard</Link>
      </div>
    </div>
  );
};

export default WeightLossWorkout;
