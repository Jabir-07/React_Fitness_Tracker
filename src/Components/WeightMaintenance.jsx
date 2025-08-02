import React from "react";

const WeightMaintenance = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">🏋️‍♂️ Weight Maintenance Workout Plan</h2>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h4 className="card-title text-primary">
                🧘 Daily Workout Routine
              </h4>
              <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item">
                  ✅ Warm-up – 5 mins (Jumping jacks / Arm swings)
                </li>
                <li className="list-group-item">
                  🏃‍♂️ Cardio – 15 mins (Brisk walk / Jogging / Cycling)
                </li>
                <li className="list-group-item">
                  🏋️ Strength – 10 mins (Pushups, Squats, Lunges)
                </li>
                <li className="list-group-item">
                  🤸 Stretch – 5 mins (Hamstring & shoulder stretches)
                </li>
                <li className="list-group-item">
                  🧘 Cool Down – 5 mins (Deep breathing, Light yoga)
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h4 className="card-title text-success">
                🍎 Tips for Maintaining Weight
              </h4>
              <ul className="mt-3">
                <li>
                  🥗 Eat a balanced diet: mix of protein, carbs, and healthy
                  fats
                </li>
                <li>💧 Stay hydrated: 8-10 glasses of water daily</li>
                <li>😴 Sleep well: minimum 7 hours every night</li>
                <li>🕒 Be consistent: stick to routine and track weekly</li>
                <li>📱 Use fitness trackers or journals to monitor progress</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <p>
          Want to customize this plan?{" "}
          <strong>Consult a certified trainer or nutritionist</strong>.
        </p>
      </div>
    </div>
  );
};

export default WeightMaintenance;
