import  React, { useEffect, useState } from 'react';
import CarCard from '../carCard/carCard';
import carsData from "../cars.json";
import "./carListing.css";

function CarListing() {
    const [cars, setCars] = useState([]); // [] => empty array
    // const [value, setterFunction] = useState(initialValue);

    // UseEffect is run once when the component is loaded for the first time.
    useEffect(() => {
        setCars(carsData);
    }, []);

    return (
        <div className='carListing'>
            <div className='carListingRow rowJustifySpaceBetween'>
                <div className='carListingTabs'>
                   <span className='accordianTab'>View all</span>
                   <span className='accordianTab'>Sedan</span>
                   <span className='accordianTab'>SUV</span>
                   <span className='accordianTab'>Hatchback</span>
                   <span className='accordianTab'>Coupe</span>
                </div>
            </div>
            <div className='carListingRow'> {cars.length} Total Results </div>
            <div className='carListingRow'>
               {
                   cars.map((car) => <CarCard id={car.id} name={car.name} price={car.price} imageUri={car.imageUri} />)
               }
            </div>
       </div>
    )
}
export default CarListing;
