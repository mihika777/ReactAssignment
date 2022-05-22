import React, { useState } from 'react';
import "./carDetailsPage.css";
import carsData from "../cars.json";

function CarDetailsPage(props){
    const [carDetails, setCarDetails] = useState(null);

    useState(() => {
        const car = carsData.find(car => car.id === (props.id || 1));
        setCarDetails(car);
    }, []);

    return (
        <div className='carDetailsPage'>

            {/* Left container */}
            {carDetails &&
                <div className='carDetailsLeft'>
                    <span style={{fontSize: "32px"}}><strong>{carDetails.name}</strong></span>
                    {carDetails.imageUris.map((image) => <img className='carImage' src={image}/>)}
                </div>
            }

            {/* Right container */}
            {carDetails &&
            <div className='carDetailsRight'>
                <span style={{fontSize: "32px"}}>Car <strong>Specifications</strong></span>

                <div className='Specs'>
                    {carDetails.specifications?.map(spec => (
                        <div className='Spec'>
                            <span className='specKey'>{spec.key}</span>
                            <span className='specValue'><strong>{spec.value}</strong></span>
                        </div>
                    ))}

                    {/* Cost */}
                    <div className='cost'><span>Cost</span> <span>76.6 lakh</span></div>

                    {/* Button */}
                    <button className='bookNowButton'>BOOK NOW</button>
                </div>
            </div>
            }
        </div>
    )
}
export default CarDetailsPage;
