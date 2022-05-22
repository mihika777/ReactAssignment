import React from "react";
import "./carCard.css";
import { Link } from "react-router-dom";

// props => properties => key={value} pairs
export default function CarCard(props) {
    return (
        <Link to={`/car-details-page/${props.id}`} className="carCard">
            {/* Image */}
            <div className="">
                <img src={props.imageUri}/>
            </div>

            {/* Card details */}
            <div className="carDetails">
                <div className="carName">
                    <span style={{fontSize: "20px"}}><strong>{props.name}</strong></span>
                    <span style={{fontSize: "12px", color: "rgba(0, 0, 0, 0.6)"}}>{props.price} crore onwards</span>
                </div>
                <div className="carDetailsRight">
                    <img src="/./carCard/Arrow.png" />
                </div>
            </div>
        </Link>
    )
}