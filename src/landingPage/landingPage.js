import  React, { useEffect, useState } from 'react';
import "./landingPage.css";
import CarCard from '../carCard/carCard';
import carsData from "../cars.json";
// carsData = [{name, price, imageUri}, {..}, {..}, {..}];

export default function LandingPage () {
    const [cars, setCars] = useState([]); // [] => empty array
    // const [value, setterFunction] = useState(initialValue);

    // UseEffect is run once when the component is loaded for the first time.
    useEffect(() => {
        setCars(carsData);
    }, []);

    return (
        <div className='landingPage'>
            {/* Banner */}
            <div className='banner'>
                <span className='bannerTitle'>FIND YOUR DREAM CAR</span>
                <div className='searchBar'>
                <input placeholder='Enter car name..' className='searchBarInput'/>
                <button className='searchButton'>SEARCH CARS</button>
                </div>
            </div>

            {/* Featured cars */}
            <div className='featuredCars'>
                <div className='featuredCarsTitle'>Featured <strong>Cars</strong></div>
                <div className='featuredCarsRow rowJustifySpaceBetween'>
                    <div className='featuredCarsTabs'>
                        <span className='accordianTab'>Popular</span>
                        <span className='accordianTab'>Just launched</span>
                        <span className='accordianTab'>Upcoming</span>
                    </div>
                    <div className='featuredCarsRight'><strong>View all</strong></div>
                </div>
                <div className='featuredCarsRow'>
                    {/* Props or properties. name, price, imageUri */}
                    {/* <ComponentName property1={value1} property2={value2} ..../> */}
                    {
                        cars.map((car) => <CarCard id={car.id} name={car.name} price={car.price} imageUri={car.imageUri} />)
                    }
                </div>
            </div>
        </div>
    )

}