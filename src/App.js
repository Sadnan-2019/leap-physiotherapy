import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Electrotherapy from "./Components/Electrotherapy/Electrotherapy";
import Physiotherapy from "./Components/Physiotherapy/Physiotherapy";
import ManualTherapy from "./Components/ManualTherapy/ManualTherapy";
import SportsInjuries from "./Components/SportsInjuries/SportsInjuries";
import Rehabilitation from "./Components/Rehabilitation/Rehabilitation";
import TherapeuticExercise from "./Components/TherapeuticExercise/TherapeuticExercise";
import KinesioTaping from "./Components/KinesioTaping/KinesioTaping";
import DryneedlingAcupuncture from "./Components/DryneedlingAcupuncture/DryneedlingAcupuncture";
import Topnav from "./Components/Topnav/Topnav";
import BackyPain from "./Components/BackyPain/BackyPain";
import NeckPain from "./Components/NeckPain/NeckPain";
import ShoulderPain from "./Components/ShoulderPain/ShoulderPain";
import ElbowPain from "./Components/ElbowPain/ElbowPain";
import KneePain from "./Components/KneePain/KneePain";
import MessengerCustomerChat from "react-messenger-customer-chat/lib/MessengerCustomerChat";
import HomeContact from "./Components/HomeContact/HomeContact";
import Blog from "./Components/Blog/Blog";
import HomeAbout from "./Components/HomeAbout/HomeAbout";
import MeetTeam from "./Components/MeetTeam/MeetTeam";
 // import TherapeuticExercise from './Components/TherapeuticExercise/TherapeuticExercise.JS';

function App() {
  return (
    <div className=" ">
      <Topnav></Topnav>
      <Nav />
      {/* <Home/> */}
      <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        
        <Route path="/electrothyrapy" element={<Electrotherapy />}></Route>
        <Route path="/physiotherapy" element={<Physiotherapy />}></Route>
        <Route path="/manualtherapy" element={<ManualTherapy />}></Route>
        <Route path="/sports-injuries" element={<SportsInjuries />}></Route>
        <Route path="/rehabilitation" element={<Rehabilitation />}></Route>
        <Route
          path="/therapeutic-exercise"
          element={<TherapeuticExercise></TherapeuticExercise>}
        ></Route>
        <Route
          path="/kinesio-taping-therapy"
          element={<KinesioTaping />}
        ></Route>
        <Route
          path="/dryneedling-acupuncture"
          element={<DryneedlingAcupuncture />}
        ></Route>
        <Route path="/back-pain" element={<BackyPain />}></Route>
        <Route path="/neck-pain" element={<NeckPain />}></Route>
        <Route path="/shoulder-pain" element={<ShoulderPain />}></Route>
        <Route path="/elbow-pain" element={<ElbowPain />}></Route>
        <Route path="/knee-pain" element={<KneePain />}></Route>
        <Route path="/contact" element={<HomeContact />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/team" element={<MeetTeam/>}></Route>
        <Route path="/about" element={<HomeAbout/>}></Route>
      
      </Routes>

      <Footer />
      {/* demo leap  */}
      <MessengerCustomerChat pageId="103181519238933" appId="690666775772229" />
    </div>
  );
}

export default App;
