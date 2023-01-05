import React from "react"
import mark from "../images/Location-mark.png"

export default function Attraction(props) {
    console.log(props)
    return (
        
        <div className="attraction">
            
            <img src={props.coverImg} 
            className="coverImg" alt={props.title} />
           
            <div className="details">
                
                <div className="location-detail">
                    <img src={mark} className="location-mark" alt="Mark" />
                    <span className="location">{props.location}</span>
                    <span className="onMaps"><a href={props.onMaps}>View on Google Maps</a></span>
                </div>
                
                <h1 className="title">{props.title}</h1>
                <p className="date">${props.dates.from} - ${props.dates.to}</p>
                <p className="description">{props.description}</p>
            
            </div>
        </div>
    )
}