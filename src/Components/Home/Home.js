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
import Faq from "../FAQ/Faq";
// import Team from '../Team/Team';
// import Type from '../Type/Type';

const Home = () => {
  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://www.leap.mrg.com.bd/#clinic",

    name: "L.E.A.P Physiotherapy & Rehabilitation",

    url: "https://www.leap.mrg.com.bd/",

    logo: "https://www.leap.mrg.com.bd/logo.png",

    image: "https://www.leap.mrg.com.bd/og-home.jpg",

    description:
      "L.E.A.P Physiotherapy & Rehabilitation provides evidence-based physiotherapy treatment in Gulshan, Dhaka for back pain, neck pain, knee pain, sports injuries, stroke rehabilitation, frozen shoulder, arthritis, post-surgical rehabilitation and home physiotherapy services.",

    telephone: ["+8801673615587", "+8802222281712"],

    email: "info@leap.mrg.com.bd",

    priceRange: "$$",

    currenciesAccepted: "BDT",

    paymentAccepted: ["Cash", "Credit Card", "Debit Card", "Mobile Banking"],

    medicalSpecialty: ["Physiotherapy", "Rehabilitation", "Sports Medicine"],

    address: {
      "@type": "PostalAddress",
      streetAddress: "House 13A, Road 35, Gulshan 2",
      addressLocality: "Dhaka",
      postalCode: "1212",
      addressCountry: "BD",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.7925,
      longitude: 90.4078,
    },

    areaServed: [
      "Gulshan",
      "Gulshan 2",
      "Banani",
      "Baridhara",
      "Mohakhali",
      "Dhaka",
    ],

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Saturday",
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Physiotherapy Services",

      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Back Pain Physiotherapy",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Neck Pain Treatment",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Knee Pain Physiotherapy",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sports Injury Rehabilitation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Stroke Rehabilitation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Frozen Shoulder Treatment",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Home Physiotherapy",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Post Surgical Rehabilitation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Arthritis Physiotherapy",
          },
        },
      ],
    },

    sameAs: [
      "https://www.facebook.com/YOUR_PAGE",
      "https://www.instagram.com/YOUR_PAGE",
      "https://www.linkedin.com/company/YOUR_PAGE",
      "https://www.youtube.com/YOUR_CHANNEL",
    ],
  };

  return (
    <div>
      <Helmet>
  {/* ===========================
        Primary SEO
    =========================== */}

  <title>
    Physiotherapy Center in Gulshan, Dhaka | LEAP Physiotherapy
  </title>

<meta
  name="description"
  content="LEAP Physiotherapy offers expert physiotherapy in Gulshan, Dhaka for back pain, neck pain, knee pain, sports injuries and stroke rehabilitation."
/>

  <meta
    name="keywords"
    content="physiotherapy clinic Dhaka, physiotherapy Gulshan, physiotherapist Dhaka, back pain physiotherapy, neck pain treatment, knee pain treatment, sports injury rehabilitation, stroke rehabilitation, frozen shoulder treatment, arthritis physiotherapy, home physiotherapy Dhaka, rehabilitation center Dhaka, physiotherapy near me, LEAP Physiotherapy"
  />

  <meta
    name="robots"
    content="index, follow, max-image-preview:large"
  />

  <meta
    name="author"
    content="L.E.A.P Physiotherapy & Rehabilitation"
  />

  <meta
    name="language"
    content="English"
  />

  <meta
    name="theme-color"
    content="#034ca7"
  />

  {/* ===========================
        Canonical
    =========================== */}

  <link
    rel="canonical"
    href="https://www.leap.mrg.com.bd/"
  />

  {/* ===========================
        Geo SEO
    =========================== */}

  <meta
    name="geo.region"
    content="BD-13"
  />

  <meta
    name="geo.placename"
    content="Dhaka"
  />

  <meta
    name="geo.position"
    content="23.7925;90.4078"
  />

  <meta
    name="ICBM"
    content="23.7925,90.4078"
  />

  {/* ===========================
        Open Graph
    =========================== */}

  <meta
    property="og:type"
    content="website"
  />

  <meta
    property="og:site_name"
    content="L.E.A.P Physiotherapy & Rehabilitation"
  />

  <meta
    property="og:locale"
    content="en_US"
  />

  <meta
    property="og:url"
    content="https://www.leap.mrg.com.bd/"
  />

  <meta
    property="og:title"
    content="Physiotherapy Clinic in Gulshan, Dhaka | LEAP Physiotherapy"
  />

  <meta
    property="og:description"
    content="Expert physiotherapy clinic in Gulshan, Dhaka for back pain, neck pain, knee pain, sports injuries, stroke rehabilitation, frozen shoulder and home physiotherapy."
  />

  <meta
    property="og:image"
    content="https://www.leap.mrg.com.bd/og-home.jpg"
  />

  <meta
    property="og:image:width"
    content="1200"
  />

  <meta
    property="og:image:height"
    content="630"
  />

  <meta
    property="og:image:alt"
    content="LEAP Physiotherapy & Rehabilitation Center, Gulshan, Dhaka"
  />

  {/* ===========================
        Twitter
    =========================== */}

  <meta
    name="twitter:card"
    content="summary_large_image"
  />

  <meta
    name="twitter:title"
    content="Physiotherapy Clinic in Gulshan, Dhaka | LEAP Physiotherapy"
  />

  <meta
    name="twitter:description"
    content="Expert physiotherapy treatment for back pain, sports injuries, stroke rehabilitation, knee pain and home physiotherapy in Dhaka."
  />

  <meta
    name="twitter:image"
    content="https://www.leap.mrg.com.bd/og-home.jpg"
  />

  {/* ===========================
        Favicon
    =========================== */}

  <link
    rel="icon"
    href="/favicon.ico"
  />

  <link
    rel="apple-touch-icon"
    href="/apple-touch-icon.png"
  />

  {/* ===========================
        Schema.org
    =========================== */}

  <script type="application/ld+json">
    {JSON.stringify(clinicSchema)}
  </script>
</Helmet>

      <Landingnew />
      <MedicalConditions></MedicalConditions>
      <Services />

      {/* <Backpain/> */}
      <About></About>
      <Success></Success>
      <HomeTeam></HomeTeam>

      <Review></Review>
      <Faq></Faq>
      <Contact></Contact>
    </div>
  );
};

export default Home;
