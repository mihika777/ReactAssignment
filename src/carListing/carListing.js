import  React, { useEffect, useState } from 'react';
import CarCard from '../carCard/carCard';
import carsData from "../cars.json";
import "./carListing.css";

function CarListing() {
    const [cars, setCars] = useState([]); // [] => empty array
    const [filter, setFilter] = useState(null);
    // const [value, setterFunction] = useState(initialValue);

    // UseEffect is run once when the component is loaded for the first time.
    useEffect(() => {
        setCars(carsData);
    }, []);

    useEffect(() => {
        if (filter === null) {
            setCars(carsData);
            return;
        }
        // filter() based on a condition, it returns the elments which satisfy the condition.
        setCars(carsData.filter(c => c.modelType === filter));
    }, [filter]);

    return (
        <div className='carListing'>
            <div className='carListingRow rowJustifySpaceBetween'>
                <div className='carListingTabs'>
                   <span onClick={() => setFilter(null)} className={`accordianTab ${filter === null && 'activeTab'}`}>View all</span>
                   <span onClick={() => setFilter("sedan")} className={`accordianTab ${filter === "sedan" && 'activeTab'}`}>Sedan</span>
                   <span onClick={() => setFilter("suv")} className={`accordianTab ${filter === "suv" && 'activeTab'}`}>SUV</span>
                   <span onClick={() => setFilter("hatchback")} className={`accordianTab ${filter === "hatchback" && 'activeTab'}`}>Hatchback</span>
                   <span onClick={() => setFilter("coupe")} className={`accordianTab ${filter === "coupe" && 'activeTab'}`}>Coupe</span>
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
