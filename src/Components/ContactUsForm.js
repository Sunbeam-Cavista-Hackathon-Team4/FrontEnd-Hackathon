import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ContactUSForm() {
  useEffect(() => {

  });
  const url = "https://172.18.4.152:8443/unregistered_user/book_appointment";
  const [patientFirstName, setPatientFirstName] = useState("");
  const [patientLastName, setPatientLastName] = useState("");
  const [email, setEmail] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});



  var registerPatient = async () => {
    let data = {
      firstName: patientFirstName,
      lastName: patientLastName,
      mobileNo: patientNumber,
      email: email,
      time: appointmentTime,
      date: appointmentDate
    }
    console.log(data);
    axios.post(url, data).then((response) => {

      sessionStorage.setItem("jwt", response.jwt);

      toast.success("Appointment Scheduled !", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsSubmitted(true),
        onClose: () => setIsSubmitted(false),
      });
    })
      .catch((error) => {
        toast.error("Failed to Schedule Appointment :(", {
          position: toast.POSITION.TOP_CENTER,
          onOpen: () => setIsSubmitted(false),
          onClose: () => setIsSubmitted(true),
        });
      })
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!patientFirstName.trim()) {
      errors.patientFirstName = "Patient name is required";
    }

    if (!patientLastName.trim()) {
      errors.patientLastName = "Patient name is required";
    }

    if (!patientNumber.trim()) {
      errors.patientNumber = "Patient phone number is required";
    } else if (patientNumber.trim().length !== 10) {
      errors.patientNumber = "Patient phone number must be of 10 digits";
    }

    if (!email.trim()) {
      errors.email = "Patient email is required";
    }


    // if (!appointmentTime) {
    //   errors.appointmentTime = "Appointment time is required";
    // } else {
    //   const selectedTime = new Date(appointmentTime).getTime();
    //   const currentTime = new Date().getTime();
    //   if (selectedTime <= currentTime) {
    //     errors.appointmentTime = "Please select a future appointment time";
    //   }
    // }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setPatientFirstName("");
    setPatientLastName("");
    setEmail("");
    setPatientNumber("");
    setAppointmentTime("");
    setAppointmentDate("");
    setFormErrors({});

    // axios call
    registerPatient();

  };

  return (
    <div className="appointment-form-section">
      <Navbar />

      <div className="form-container">
        <h2 className="form-title">
          <span>Book Appointment Call</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              value={patientFirstName}
              onChange={(e) => setPatientFirstName(e.target.value)}
              required
            />
            {formErrors.patientFirstName && <p className="error-message">{formErrors.patientFirstName}</p>}
          </label>

          <br />
          <label>
            Last Name:
            <input
              type="text"
              value={patientLastName}
              onChange={(e) => setPatientLastName(e.target.value)}
              required
            />
            {formErrors.patientLastName && <p className="error-message">{formErrors.patientLastName}</p>}
          </label>

          <br />
          <label>
            Email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {formErrors.email && <p className="error-message">{formErrors.email}</p>}
          </label>

          <br />
          <label>
            Phone Number:
            <input
              type="text"
              value={patientNumber}
              onChange={(e) => setPatientNumber(e.target.value)}
              required
            />
            {formErrors.patientNumber && <p className="error-message">{formErrors.patientNumber}</p>}
          </label>

          <br />
          <label>
            Preferred Appointment Date:
            <input
              type="date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              required
            />
            {formErrors.appointmentDate && <p className="error-message">{formErrors.appointmentDate}</p>}
          </label>

          <br />
          <label>
            Preferred Appointment Time:
            <input
              type="time"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
            />
            {formErrors.appointmentTime && <p className="error-message">{formErrors.appointmentTime}</p>}
          </label>

          <br />
          <button type="submit" className="text-appointment-btn">
            Confirm Appointment Call
          </button>

          <p className="success-message" style={{ display: isSubmitted ? "block" : "none" }}>Details has been successfully sent.</p>
        </form>
      </div>

      <Footer />

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default ContactUSForm;
