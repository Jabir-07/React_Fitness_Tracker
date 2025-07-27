import React, { useState } from "react";
import "../css/Todo.css";

const TodoList = () => {
  const [Task, setTask] = useState("");
  const [addTask, setaddTask] = useState([]);

  const inpAdd = () => {
    if (Task.trim() !== "") {
      setaddTask([...addTask, Task]);
      setTask("");
    }
  };

  const delAdd = (index) => {
    const delindex = [...addTask];
    delindex.splice(index, 1);
    setaddTask(delindex);
  };
  return (
    <>
      <h2 className="text-center text-primary fst-bold">
        {" "}
        YOUR INTAKED DIET FOODS
      </h2>
      <input
        className="text-center"
        type="text"
        value={Task}
        placeholder="Enter Your Meal...."
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={inpAdd}> ADD MEAL </button>
      <div className="text-center ">
        {addTask.map((intask, index) => (
          <div
            key={index}
            className="d-flex justify-content-center align-items-center gap-2 my-2"
          >
            <h3 className="text-dark">{intask}</h3>
            <button
              className="btn btn-success btn-sm"
              onClick={() => delAdd(index)}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
