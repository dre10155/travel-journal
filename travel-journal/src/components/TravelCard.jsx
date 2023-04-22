import React from "react";
import './TravelCard.css'
import Picker from '../assets/location-point-red.svg'


export default function TravelCard(props) {
    return (
        <>
            <div className="travel-card-wrapper">  
                <img className="destination-img" src={props.card.imageUrl} alt="" />    
                <ul className="items">
                        <li> 
                            <span className="location-text">
                                <img src={Picker} alt="" width="16" height="16"/> 
                                <span className="location-name">{props.card.location}</span>
                                <a className="location-link" href={props.card.googleMapsUrl}>View On  Google maps</a>
                            </span>
                        </li>
                        <li>
                            <span className="title">{props.card.title}</span>
                        </li>
                        <li>
                            <span className="dates">{props.card.startDate} - {props.card.endDate}</span>
                         </li>
                        <li><span className="description">{props.card.description}</span></li>
                    </ul>
                    
            </div>
            <hr className="divider" />
            

        </>
    )
}