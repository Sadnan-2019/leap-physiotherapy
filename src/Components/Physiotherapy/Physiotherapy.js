import React from "react";
import Review from "../Review/Review";
import Team from "../Team/Team";
// import ElectrotherapyDetails from '../Electrotherapy/ElectrotherapyDetails';
import PhysiotherapyDetails from "./PhysiotherapyDetails";
import PhysiotherapyLanding from "./PhysiotherapyLanding";
import { Helmet } from "react-helmet-async";

const Physiotherapy = () => {
  return (
    <div>
      <Helmet>
        <title> Physiotherapy At Gulshan</title>
        <meta
          name="description"
          content="Physiotherapists are highly qualified health professionals who work in partnership with their patients to help people get better and stay well."
        />
        <meta
          name="keywords"
          content="back pain, Pain,Musculoskeletal ,Orthopaedic ,Occupational health,nack pain,knee pain,Stroke rehab dhaka,physiotheray dhaka,pain problem,bsc physio therapy"
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

      <PhysiotherapyLanding></PhysiotherapyLanding>

      <PhysiotherapyDetails></PhysiotherapyDetails>
      <Review></Review>
      <Team></Team>
    </div>
  );
};

export default Physiotherapy;
