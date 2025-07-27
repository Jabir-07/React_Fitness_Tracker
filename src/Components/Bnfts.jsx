import React from "react";

const Bnfts = () => {
  return (
    <>
      <div className="b-container container bg-dark  mt-5 ">
        <div className="cld text-center mb-4">
          <h2 className="fntt display-5 fst-italic text-white">
            BENEFITS OF WORKING OUT
          </h2>
        </div>

        <div className="wrkbnfts d-flex flex-column gap-4">
          <div className="confidence p-4 mb-3 bg-light rounded shadow-sm">
            <h4 className="text-primary text-center"> Boosts Confidence</h4>
            <p className="text-muted">
              Regular workouts help you feel better about your body, improve
              your posture, and build a strong sense of self-esteem. When you
              achieve fitness goals, even small ones, it gives you a sense of
              accomplishment and control over your body and mind.
            </p>
          </div>

          <div className="mood p-4 mb-3 bg-light rounded shadow-sm">
            <h4 className="text-success text-center"> Enhances Mood</h4>
            <p className="text-muted">
              Exercise releases endorphins  the "feel good" hormones. Whether
              it's a long walk, a gym session, or even dancing, moving your body
              helps fight anxiety, depression, and stress. It keeps your mental
              health in check.
            </p>
          </div>

          <div className="p-4 mb-3 bg-light rounded shadow-sm">
            <h4 className="text-danger text-center"> Improves Physical Health</h4>
            <p className="text-muted">
              From increasing cardiovascular health to boosting immunity and
              improving muscle strength, working out keeps your body functioning
              at its best. It also reduces the risk of chronic diseases like
              diabetes, obesity, and heart issues.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bnfts;
