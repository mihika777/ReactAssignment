import React, { useEffect, useState } from 'react';
import "./bookingForm.css";
import carsData from "../cars.json";
import { useParams } from 'react-router-dom';

function BookingForm() {
    const [carDetails, setCarDetails] = useState(null);
    const {carId} = useParams();

    const [name, setName] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [city, setCity] = useState(null);
    const [tnc, setTnc] = useState(null);

    useEffect(() => {
        const car = carsData.find(element => element.id == carId);
        setCarDetails(car);
    });

    function submitDetails() {
        if (!name) {
            alert("Please enter valid name");
            return;
        } else if (!phoneNumber) {
            alert("Enter valid phone number");
            return;
        } else if (!city) {
            alert("Enter valid city");
            return;
        } else if (!tnc) {
            alert("Please check the Terms and conditions");
            return;
        }

        window.location.href="/booking-confirmation";
    }

    return (
        <div className='bookingForm'>
            <div className='bookingFormColumn'>
                <span className='heading'> Car <strong>Details</strong></span>
                <img src={carDetails?.imageUris[0]}/>
                <span className='carName'>{carDetails?.name}</span>
                <div className='specs'>
                    {
                        carDetails?.specifications.map(element =>
                            <div className='spec'>
                                <span className='specKey'>{element.key}</span>
                                <span className='specValue'>{element.value}</span>
                            </div> 
                        ) 
                    }
                </div>

            </div>
            <div className='bookingFormColumn' style={{marginLeft: "24px", flex: 1}}>
                <span className='heading'> Booking <strong>Details</strong></span>
                <div className='inputContainer'>
                    <span className='label'>Name</span>
                    <input onChange={(e) => setName(e.target.value)} placeholder='Enter your name..' className='inputField'/>
                </div>
                <div className='inputContainer'>
                    <span className='label'>Contact number</span>
                    <input onChange={(e) => setPhoneNumber(e.target.value)} placeholder='+91 XXXXXXXXXX' className='inputField'/>
                </div>
                <div className='inputContainer'>
                    <span className='label'>City</span>
                    <select onChange={(e) => setCity(e.target.value)} className='inputField'>
                        <option value = {null} selected disabled> Select a City</option>
                        <option value={"Bengaluru"}>Bengaluru</option> 
                        <option value={"Hyderabad"}>Hyderabad</option>
                        <option value={"Indore"}>Indore</option>
                        <option value={"Delhi"}>Delhi</option>
                    </select>
                </div>
                <div className='inputContainer' style={{flexDirection: "row"}}>
                    <input type="checkbox" onChange={(e) => setTnc(e.target.checked)}/>
                    <span>I accept the Terms and conditions</span>
                </div>
                <div className='inputContainer'>
                    <strong>Terms and conditions:</strong>
*Terms and conditions apply. All offers are from dealers. Please get in touch with your nearest dealer for detailed terms and conditions. All taxes are additional. Offer valid till February 15, 2022 and is subject to change without prior notice. Calculations for the following are for a specific tenure mileage and finance amount. 
                </div>

                <button onClick={submitDetails} className='submitButton'>SUBMIT</button>
            </div>
        </div>
    );
}
export default BookingForm;