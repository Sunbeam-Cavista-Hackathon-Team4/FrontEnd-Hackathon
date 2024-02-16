import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";
import NavbarPatient from "../Components/NavbarPatient";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PatientHistoryAppt from "../Components/PatientHistoryAppt";

function Patient() {
    return (
        <div className="home-section">
            <NavbarPatient />
            {/* <Hero />
            <Info />
            <About /> */}
            {/* <Router basename="/Mindfullness/patient">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/legal" element={<Legal />} />
                    <Route path="/appointment" element={<Appointment />} />
                    <Route path="/patient" element={<Patient />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router> */}

            {/* <BookAppointment />
            <Reviews />
            <Doctors /> */}

            <PatientHistoryAppt />
            <Footer />
        </div>
    );
}

export default Patient;