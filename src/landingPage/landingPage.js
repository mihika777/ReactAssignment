import  React from 'react';
import "./landingPage.css";

export function LandingPage () {
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

            </div>
        </div>
    )

}