import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Client from "../client/Client";
import Login from "../authentification/Login";
import SignUp from "../authentification/SignUp";
import ClientReservation from "../client/reservation/ClientReservation";
import MainRoutes from "./MainRoutes";

const Pages = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/client" element={<Client />} />
        <Route path="/clientreservation" element={<ClientReservation />} />
        <Route path="/*" element={<MainRoutes />} />
      </Routes>
    </Router>
  );
};

export default Pages;
