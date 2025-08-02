import React from "react";
import { Routes, Route } from "react-router-dom";

// Component Imports
import Homepage from "./Components/Homepage";
import About from "./Components/About";
import Workout from "./Components/Workout";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Register from "./Components/Register";
import TodoList from "./Components/TodoList";
import WeightGain from "./Components/WeightGain";
import WeightLossWorkout from "./Components/WeightLossWorkout";
import WeightMaintenance from "./Components/WeightMaintenance"; // ✅ You missed this import

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ownmeal" element={<TodoList />} />
        <Route path="/weight-gain" element={<WeightGain />} />
        <Route path="/weight-loss" element={<WeightLossWorkout />} />
        <Route path="/weight-maintenance" element={<WeightMaintenance />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
