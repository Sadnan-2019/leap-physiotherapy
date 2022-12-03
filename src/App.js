import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Electrotherapy from './Components/Electrotherapy/Electrotherapy';
import Physiotherapy from './Components/Physiotherapy/Physiotherapy';
import ManualTherapy from './Components/ManualTherapy/ManualTherapy';
import SportsInjuries from './Components/SportsInjuries/SportsInjuries';
import Rehabilitation from './Components/Rehabilitation/Rehabilitation';

function App() {
  return (
    <div className=" ">
      <Nav/>
      {/* <Home/> */}
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/electrothyrapy" element={<Electrotherapy />}></Route>
        <Route path="/physiotherapy" element={<Physiotherapy />}></Route>
        <Route path="/manualtherapy" element={<ManualTherapy />}></Route>
        <Route path="/sports-injuries" element={<SportsInjuries/>}></Route>
        <Route path="/rehabilitation" element={<Rehabilitation/>}></Route>
         
        {/* <Route path="login" element={<Login />}></Route> */}
        {/* <Route path="/*" element={<FourZeroFour />} />  */}
      </Routes>



      <Footer/>
    </div>
  );
}

export default App;
