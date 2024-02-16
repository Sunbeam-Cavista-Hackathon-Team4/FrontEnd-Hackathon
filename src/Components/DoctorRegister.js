import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

function DoctorRegister() {
    useEffect(() => {
    });
    const url = "https://172.18.4.138:8443/doctor/add";
    const [doctorFirstName, setDoctorFirstName] = useState("");
    const [doctorLastName, setDoctorLastName] = useState("");
    const [email, setEmail] = useState("");
    const [qualification, setQualification] = useState("");
    const [gender, setGender] = useState("");
    const [doctorNumber, setDoctorNumber] = useState("");
    const [joinDate, setJoinDate] = useState("");
    const [password, setPassword] = useState("");
    const [availability, setAvailability] = useState("");
    const [dob, setDob] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formErrors, setFormErrors] = useState({});





    var registerDoctor = async () => {
        let data = {
            dob: dob,
            gender: gender,
            qualification: qualification,
            joinDate: joinDate,
            availability: availability,
            user: {
                firstName: doctorFirstName,
                lastName: doctorLastName,
                email: email,
                password: password,
                mobileNo: doctorNumber,
                role: "ROLE_DOCTOR",
                gender: gender
            },
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


        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        // Reset form fields and errors after successful submission
        setDoctorFirstName("");
        setDoctorLastName("");
        setEmail("");
        setAvailability("");
        setQualification("");
        setDob("");
        setGender("");
        setDoctorNumber("");
        setPassword("");
        setJoinDate("");
        setFormErrors({});

        // axios call
        registerDoctor();

    };

    return (
        <div className="appointment-form-section">
            <Navbar />

            <div className="form-container">
                <h2 className="form-title">
                    <span>Register Doctor</span>
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
                            value={doctorLastName}
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

                    <label>
                        Password:
                        <input
                            type="text"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {formErrors.password && <p className="error-message">{formErrors.password}</p>}
                    </label>

                    <label>
                        Qualifiction:
                        <input
                            type="text"
                            value={qualification}
                            onChange={(e) => setQualification(e.target.value)}
                            required
                        />
                        {formErrors.qualification && <p className="error-message">{formErrors.qualification}</p>}
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
                        Gender:
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required
                        >
                            <option value="default">Select</option>
                            <option value="MALE">Male</option>
                            <option value="FEMALE">Female</option>
                            <option value="OTHER">Other</option>
                        </select>
                        {formErrors.gender && <p className="error-message">{formErrors.gender}</p>}
                    </label>

                    <br />
                    <label>
                        Joining Date:
                        <input
                            type="date"
                            value={joinDate}
                            onChange={(e) => setJoinDate(e.target.value)}
                            required
                        />
                        {formErrors.joinDate && <p className="error-message">{formErrors.joinDate}</p>}
                    </label>

                    <br />
                    <label>
                        Date of Birth:
                        <input
                            type="date"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            required
                        />
                        {formErrors.dob && <p className="error-message">{formErrors.dob}</p>}
                    </label>

                    <br />
                    <label>
                        Availability:
                        <select
                            value={availability}
                            onChange={(e) => setAvailability(e.target.value)}
                            required
                        >
                            <option value="default">Select</option>
                            <option value="AVAILABLE">AVAILABLE</option>
                            <option value="NOTAVAILABLE">NOTAVAILABLE</option>
                        </select>
                        {formErrors.availability && <p className="error-message">{formErrors.availability}</p>}
                    </label>

                    <br />
                    <button type="submit" className="text-appointment-btn">
                        Register
                    </button>

                    <p className="success-message" style={{ display: isSubmitted ? "block" : "none" }}>Details has been successfully sent.</p>
                </form>
            </div>

            <Footer />

            <ToastContainer autoClose={5000} limit={1} closeButton={false} />
        </div>
    );
}

export default DoctorRegister;