import './App.css';
import NavBar from './navbar/navbar';
import Footer from './footer/footer';
import { Link } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { LandingPage } from './landingPage/landingPage';

function App() {
  return (
    <div className="Main">
      {/* Navigation bar */}
      <NavBar/>

      {/* Main Content */}
      <div className="mainBody">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;