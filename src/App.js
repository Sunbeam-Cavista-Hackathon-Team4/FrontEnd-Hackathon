import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import Patient from "./Pages/Patient";
import DoctorRegister from "./Components/DoctorRegister";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Router basename="/Mindfullness">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/login" element={<Login />} />
          <Route path="/doctor/add" element={<DoctorRegister />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
