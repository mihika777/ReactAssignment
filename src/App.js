import './App.css';
import NavBar from './navbar/navbar';
import Footer from './footer/footer';
import { Link } from "react-router-dom";
import CarDetailsPage from './carDetailsPage/carDetailsPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from './landingPage/landingPage';

function App() {
  return (
    <BrowserRouter>
    <div className="Main">
      {/* Navigation bar */}
      <NavBar/>

      {/* Main Content */}
      <div className="mainBody">
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="car-details-page">
              <Route path=":carId" element={<CarDetailsPage/>}/>
            </Route>
            {/* <Route path='/car-details-page/:id' render={(props) => <CarDetailsPage {...props}/>}/> */}
          </Routes>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;