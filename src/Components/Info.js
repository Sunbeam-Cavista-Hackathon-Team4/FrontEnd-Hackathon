import React from "react";
import InformationCard from "./InformationCard";
import { faBrain, faPeopleGroup, faPerson } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Anxiety Treatments"
          description="Anxiety is a feeling of fear, dread, and uneasiness. 
          It might cause you to sweat, feel restless and tense, and have a rapid heartbeat. 
          It can be a normal reaction to stress. For example, you might feel anxious when faced with a 
          difficult problem at work, before taking a test, or before making an important decision. 
          For people with anxiety disorders, the fear is not temporary and can be overwhelming."
          icon={faBrain}
        />

        <InformationCard
          title="Bi-Polar"
          description="Bipolar disorder, formerly referred to as manic depressive illness, 
          is a mood disorder with extremes.When manic, a person becomes overly elated, more irritable, requires less sleep, 
          makes grand plans and may impulsively engage in potentially dangerous behaviour.."
          icon={faPeopleGroup}
        />

        <InformationCard
          title="Depression"
          description="Depression is a constant feeling of sadness and loss of interest, which stops you doing your normal activities. Different types of depression exist, with symptoms ranging from relatively m.inor to severe. Generally, depression does not result from a single event, but from a mix of events and factors."
          icon={faPerson}
        />
      </div>
    </div>
  );
}

export default Info;
