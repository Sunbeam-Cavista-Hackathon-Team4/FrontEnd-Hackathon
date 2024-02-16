import React from "react";
import Doctor from "../Assets/doctor-group.png";
import "../Styles/About.css";
import SolutionStep from "./SolutionStep";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          We bring mental health care to your convenience, offering a
          comprehensive range of on-demand services tailored to your emotional
          well-being. Our platform allows you to connect with experienced online
          mental health professionals who provide expert advice, personalized
          counseling, and support whenever you need it. Whether you're seeking
          guidance, therapy, or prescription management for mental health
          concerns, our platform is here to provide convenient and accessible
          solutions for your emotional wellness.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Make a Schedule"
          description="
          Select the date and time that aligns perfectly with your schedule, and allow our compassionate team of mental health experts to cultivate a positive impact on your well-being through personalized care."
        />

        <SolutionStep
          title="Get Your Solutions"
          description="Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health."
        />
      </div>
    </div>
  );
}

export default About;
