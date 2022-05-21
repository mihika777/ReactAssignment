import './App.css';
import NavBar from './navbar/navbar';
import Footer from './footer/footer';

function App() {
  return (
    <div className="Main">
      {/* Navigation bar */}
      <NavBar/>

      {/* Main content */}
      <span>Main content</span>
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;