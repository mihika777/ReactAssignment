import React, { useState } from 'react';
import "./carDetailsPage.css";
import carsData from "../cars.json";
import { useParams } from 'react-router-dom';

function CarDetailsPage(props){
    const [carDetails, setCarDetails] = useState(null);
    const params = useParams();

    // It will run at the first render of the component.
    useState(() => {
        // carsData is an array.
        // find() method of arrays.
        // syntax: arrayName.find(element => condition)? returns the first matching element, else null;
        const car = carsData.find(car => car.id == params.carId);
        setCarDetails(car);
    }, []);

    return (
        <div className='carDetailsPage'>

            {/* Left container */}
                <div className='carDetailsLeft'>
                    <span style={{fontSize: "32px"}}><strong>{carDetails?.name}</strong></span>
                    {carDetails?.imageUris?.map((image, idx) => <img key={idx} className='carImage' src={image}/>)}
                </div>
            

            {/* Right container */}
            <div className='carDetailsRight'>
                <span style={{fontSize: "32px"}}>Car <strong>Specifications</strong></span>

                <div className='Specs'>
                    {carDetails?.specifications?.map(spec => (
                        <div className='Spec'>
                            <span className='specKey'>{spec.key}</span>
                            <span className='specValue'><strong>{spec.value}</strong></span>
                        </div>
                    ))}

                    {/* Cost */}
                    <div className='cost'><span>Cost</span> <span>{carDetails?.price} lakh</span></div>

                    {/* Button */}
                    <button className='bookNowButton'>BOOK NOW</button>
                </div>
            </div>
        </div>
    )
}
export default CarDetailsPage;
