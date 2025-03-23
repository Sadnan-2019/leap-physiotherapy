import React from "react";
import About from "../About/About";
import Backpain from "../Bankpain/Backpain";
import Contact from "../Contact/Contact";
import HomeTeam from "../HomeTeam/HomeTeam";
// import Landing from '../Landing/Landing';
// import Landing from '../Landing/Landing';
import Landingnew from "../Landing/Landingnew";
import MedicalConditions from "../MedicalConditions/MedicalConditions";
import Review from "../Review/Review";
import Services from "../Services/Services";
import Success from "../Success/Success";
import { Helmet } from "react-helmet-async";
// import Team from '../Team/Team';
// import Type from '../Type/Type';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Leap Physiocener Labaid</title>
        <meta
          name="description"
          content="We have state of the art equipments & qualified
                    professionals to heal your pain & suffering."
        />
        <meta
          name="keywords"
          content="back pain, nack pain,knee pain,Stroke rehab dhaka,physiotheray dhaka,pain problem,bsc physio therapy"
        />
        <meta name="robots" content="index, follow" />
        {/* <meta property="og:title" content="Healthcare at Home" /> */}
        <meta property="og:title" content=" Best  Physiocare at  Gulshan 2" />
        <meta
          property="og:title"
          content="Best Physio Center| Leap Physiotherapy Gulshan"
        />
        <meta
          property="og:description"
          content="Get top-quality  Physiocenter services at  Gulshan 2."
        />
        <meta
          property="og:image"
          content="https://leap.mrg.com.bd/static/media/service-caregive.f73bb16bcec38cd23239.jpg"
        />
        <meta property="og:url" content="https://leap.mrg.com.bd" />
        <meta property="og:type" content="website" />.
        <link rel="canonical" href="https://leap.mrg.com.bd" />
        <meta
          name="description"
          content=" Some Physical Conditions Need to be Treated by Passive
                    Exercise. Stroke Induced Paralysis is One of Them."
        />
        
      </Helmet>

      <Landingnew />
      {/* <Landing></Landing> */}
      {/* <Type></Type> */}
      <MedicalConditions></MedicalConditions>
      <Services />
      <Review></Review>
      {/* <Backpain/> */}
      <About></About>
      <Success></Success>
      {/* <Team></Team> */}
      <HomeTeam></HomeTeam>
      <Contact></Contact>
    </div>
  );
};

export default Home;
