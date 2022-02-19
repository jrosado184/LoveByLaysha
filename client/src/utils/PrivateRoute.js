import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const loggedIn = localStorage.getItem("token");
  if (loggedIn) return children;
  return <Navigate to="/login" />;
};

export default PrivateRoute;
