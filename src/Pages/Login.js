import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Navbar from "../Components/Navbar";

function Login() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    const url = "https://172.18.4.152:8443/";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formErrors, setFormErrors] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    var registerPatient = async () => {
        let data = {
            email: email,
            password: password,
        }
        console.log(data);
        axios.post(url, data).then((response) => {

            sessionStorage.setItem("jwt", response.jwt);

            toast.success("Login Success !", {
                position: toast.POSITION.TOP_CENTER,
                onOpen: () => setIsSubmitted(true),
                onClose: () => setIsSubmitted(false),
            });
        })
            .catch((error) => {
                toast.error("Login Failed :(", {
                    position: toast.POSITION.TOP_CENTER,
                    onOpen: () => setIsSubmitted(false),
                    onClose: () => setIsSubmitted(true),
                });
            })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};

        if (!email.trim()) {
            errors.email = "Patient email is required";
        }
        if (!password.trim()) {
            errors.email = "Patient Password is required";
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        // Reset form fields and errors after successful submission
        setEmail("");
        setPassword("");
        setFormErrors({});

        // axios call
        registerPatient();

    };

    return (
        <>
            <Navbar />

            <div className="appointment-form-section">
                <div className="form-container">
                    <h2 className="form-title">
                        <span>Login</span>
                    </h2>

                    <form className="form-content" onSubmit={handleSubmit}>
                        <br />
                        <label>
                            Email:
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            {formErrors.email && <p className="error-message">{formErrors.email}</p>}
                        </label>

                        <br />
                        <label>
                            Password:
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            {formErrors.patientNumber && <p className="error-message">{formErrors.patientNumber}</p>}
                        </label>


                        <br />
                        <button type="submit" className="text-appointment-btn">
                            Login
                        </button>

                        <p className="success-message" style={{ display: isSubmitted ? "block" : "none" }}>Details has been successfully sent.</p>
                    </form>
                </div>

                <ToastContainer autoClose={5000} limit={1} closeButton={false} />
            </div>
        </>
    );
}

export default Login;
