import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function ContactUSForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const url = "https://localhost:8443/patient/register";
  const [patientFirstName, setPatientFirstName] = useState("");
  const [patientLastName, setPatientLastName] = useState("");
  const [email, setEmail] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});



  var registerPatient = async () => {
    let data = {
      first_name: patientFirstName,
      last_name: patientLastName,
      mobileNo: patientNumber,
      email: email,
      appointmentTime: appointmentTime,
      role: "ROLE_PATIENT"
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





    // toast.success("Appointment Scheduled !", {
    //   position: toast.POSITION.TOP_CENTER,
    //   onOpen: () => setIsSubmitted(true),
    //   onClose: () => setIsSubmitted(false),
    // });
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    // Validate form inputs
    const errors = {};
    if (!patientFirstName.trim()) {
      errors.patientFirstName = "Patient name is required";
    } else if (patientFirstName.trim().length < 8) {
      errors.patientFirstName = "Patient name must be at least 8 characters";
    }

    if (!patientLastName.trim()) {
      errors.patientLastName = "Patient name is required";
    } else if (patientLastName.trim().length < 8) {
      errors.patientLastName = "Patient name must be at least 8 characters";
    }

    if (!patientNumber.trim()) {
      errors.patientNumber = "Patient phone number is required";
    } else if (patientNumber.trim().length !== 10) {
      errors.patientNumber = "Patient phone number must be of 10 digits";
    }

    if (!email.trim()) {
      errors.email = "Patient email is required";
    } else if (email.trim().length < 8) {
      errors.email = "Patient email must be of 10 characters";
    }


    if (!appointmentTime) {
      errors.appointmentTime = "Appointment time is required";
    } else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.appointmentTime = "Please select a future appointment time";
      }
    }

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
    setFormErrors({});

    // axios call
    registerPatient();

  };

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Health <span className="legal-siteSign">+</span>
        </Link>
      </h1>

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
            Preferred Appointment Call Time:
            <input
              type="datetime-local"
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

      <div className="legal-footer">
        <p>© 2013-2023 Mindfullness. All rights reserved.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default ContactUSForm;
