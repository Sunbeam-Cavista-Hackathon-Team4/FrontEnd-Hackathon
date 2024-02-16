import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function DoctorForm() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    const url = "https://172.18.4.152:8443/doctor/register";
    const [doctorFirstName, setDoctorFirstName] = useState("");
    const [doctorLastName, setDoctorLastName] = useState("");
    const [email, setEmail] = useState("");
    const [doctorNumber, setDoctorNumber] = useState("");
    const [appointmentTime, setAppointmentTime] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    dob gender qaulification join date user + pass



    var registerDoctor = async () => {
        let data = {
            first_name: doctorFirstName,
            last_name: doctorLastName,
            mobileNo: doctorNumber,
            email: email,
            appointmentTime: appointmentTime,
            role: "ROLE_DOCTOR"
        }
        console.log(data);
        axios.post(url, data).then((response) => {

            sessionStorage.setItem("jwt", response.jwt);

            toast.success("Registeration Successful!", {
                position: toast.POSITION.TOP_CENTER,
                onOpen: () => setIsSubmitted(true),
                onClose: () => setIsSubmitted(false),
            });
        })
            .catch((error) => {
                toast.error("Failed to Register :(", {
                    position: toast.POSITION.TOP_CENTER,
                    onOpen: () => setIsSubmitted(false),
                    onClose: () => setIsSubmitted(true),
                });
            })


    }


    const handleSubmit = (e) => {
        e.preventDefault();
        debugger;
        // Validate form inputs
        const errors = {};
        if (!doctorFirstName.trim()) {
            errors.doctorFirstName = "Doctor name is required";
        }

        if (!doctorLastName.trim()) {
            errors.doctorLastName = "Doctor name is required";
        }

        if (!doctorNumber.trim()) {
            errors.doctorNumber = "Doctor phone number is required";
        } else if (doctorNumber.trim().length !== 10) {
            errors.doctorNumber = "Doctor phone number must be of 10 digits";
        }

        if (!email.trim()) {
            errors.email = "Doctor email is required";
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
        setDoctorFirstName("");
        setDoctorLastName("");
        setEmail("");
        setDoctorNumber("");
        setAppointmentTime("");
        setFormErrors({});

        // axios call
        registerDoctor();

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
                            value={doctorFirstName}
                            onChange={(e) => setDoctorFirstName(e.target.value)}
                            required
                        />
                        {formErrors.doctorFirstName && <p className="error-message">{formErrors.doctorFirstName}</p>}
                    </label>

                    <br />
                    <label>
                        Last Name:
                        <input
                            type="text"
                            value={DoctorLastName}
                            onChange={(e) => setDoctorLastName(e.target.value)}
                            required
                        />
                        {formErrors.doctorLastName && <p className="error-message">{formErrors.doctorLastName}</p>}
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
                            value={doctorNumber}
                            onChange={(e) => setDoctorNumber(e.target.value)}
                            required
                        />
                        {formErrors.doctorNumber && <p className="error-message">{formErrors.doctorNumber}</p>}
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

export default DoctorForm;