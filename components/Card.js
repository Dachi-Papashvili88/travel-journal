import React from "react"

export default function Card(props){
    return (

        <div className="container">
        <img src={props.img}/>
        <div className="main">
        <div className="location-details">
        <i className="fa-solid fa-location-dot"></i> 
        <p>{props.location}</p>
        <span><a href={props.googleMapsUrl} target="_blank">View on Google Map</a></span>
        </div>
        <div className="description-div">
        <h1>{props.title}</h1>   
        <p className="time-period">{props.startDate} - {props.endDate}</p>
        <p className="description">{props.description}</p>   
        </div>
        </div>
        </div>
    )
}