import React from "react";
import Review from "../Review/Review";
import Team from "../Team/Team";
import NeckPainDetails from "./NeckPainDetails";
import NeckPainLanding from "./NeckPainLanding";
import { Helmet } from "react-helmet-async";

const NeckPain = () => {
  return (
    <div>
      <Helmet>
        <title> NeckPain At Gulshan</title>
        <meta
          name="description"
          content="NeckPain gives good results for acute and chronic pain by modifying the impulse, leading to pain relief."
        />
        <meta
          name="keywords"
          content="back pain,Pain,Musculoskeletal,Orthopaedic,Occupational health,nack pain,knee pain,Stroke rehab dhaka,physiotheray dhaka,pain problem,bsc physio therapy"
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
      <NeckPainLanding></NeckPainLanding>
      <NeckPainDetails></NeckPainDetails>
      <Review></Review>
      <Team></Team>
    </div>
  );
};

export default NeckPain;
