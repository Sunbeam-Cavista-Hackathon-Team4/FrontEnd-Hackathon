import React from 'react'
import  "../Components/InfoCard.js"

function PatientApt() {

    return (

        <infoCard
        firstName="Sarvesh"
        lastName="Shevade"
        date={window.date}
        time={window.time}
        ></infoCard>
    )
}

export default PatientApt
