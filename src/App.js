import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Slider from './Components/Slider';
import Service from './Components/Service';
import About from './Components/About';
import Why from './Components/Why';
import Team from './Components/Team';
import Clint from './Components/Clint';
import Info from './Components/Info';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>


      <Header />
      <Service />
      <About />
      <Why />
      <Team />
      <Clint />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
