import React from "react";
import "./carCard.css";

// props => properties => key={value} pairs
export default function CarCard(props) {
    return (
        <div className="carCard">
            {/* Image */}
            <div className="carImage">
                <img src={props.imageUri}/>
            </div>

            {/* Card details */}
            <div className="carDetails">
                <div className="carName">
                    <span><strong>{props.name}</strong></span>
                    <span>{props.price} crore onwards</span>
                </div>
                <div className="carDetailsRight">
                    <strong>View car</strong>
                </div>
            </div>
        </div>
    )
}