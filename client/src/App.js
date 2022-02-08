import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nails from "./components/Nails";
import Book from "./components/Book";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [loggedIn, setIsLoggedIn] = useState(localStorage.getItem("token"));
  return (
    <>
      <Header loggedIn={loggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Nails />} />
        <Route path="/nails" element={<Nails />} />
        <Route path="/book" element={<Book />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={<Login loggedIn={loggedIn} setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
