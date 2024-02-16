import React from 'react'
import "../Styles/InfoCard.css"


function infoCard(props) {

    // const data={
    //     date = props.date,
    //     time = props.time,
    //     fName = props.firstName,
    //     lName = props.lastName
    // }


    return (
        <div className="infoCard">

            <strong className="card-content" >Doctor: </strong>
            <p className="fetch-content">{props.firstName + props.lastName}</p>
            <br/>
            <strong className="card-content">Date: </strong>
            <p className="fetch-content">{props.date}</p>
            <strong className="card-content">Time: </strong>
            <p className="fetch-content">{props.time}</p>
            <br/>
            <button className="Button" id="edit">Edit</button>
            <button className="Button"id="delet0">Delete</button>
        </div>

    )
}

export default infoCard
