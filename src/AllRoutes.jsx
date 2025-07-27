import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import About from "./Components/About";
import Workout from "./Components/Workout";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Register from "./Components/Register";
import TodoList from "./Components/TodoList";

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
      </Routes>
    </div>
  );
};

export default AllRoutes;
