import React from "react";
import "./bookingConfirmation.css"

function BookingConfirmation() {
    return (
        <div className="bookingConfirmation">
            <img src="/./car/car-image1.png"/>
            <span>Booking <strong>Successfull</strong></span>
            <strong><span style={{color: "brown"}}>Download</span> the booking summary</strong>
        </div>
    )
}

export default BookingConfirmation;