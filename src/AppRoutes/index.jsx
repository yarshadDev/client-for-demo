import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import User from "../pages/User";

function ProtectedRoute(props) {
  const token = localStorage.getItem("token");


  return token ? <Outlet /> : <Navigate to={"/login"} />;
}

function PublicRoute(props) {
  const token = localStorage.getItem("token");
  // Remember here the condition  is !token
  return !token ? <Outlet /> : <Navigate to={"/"} />;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<User />} />
      </Route>

      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}
