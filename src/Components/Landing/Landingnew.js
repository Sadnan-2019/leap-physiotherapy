import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Landingnew.css";
import "animate.css";

const Landingnew = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    fade: true,

    autoplay: "true",
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="  px-7 py-7 landingtext">
        <Slider {...settings}>
          <div>
  <div className="hero sm:min-h-screen-[550px] lg:min-h-screen landingone relative">
    {/* Overlay */}
    <div className="hero-overlay bg-black bg-opacity-50"></div>

    <div className="hero-content text-center text-white relative z-10">
      <div className="max-w-3xl">

        <h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Best Physiotherapy Center in Dhaka for Pain Relief &
          <span className="text-primary"> Rehabilitation</span>
        </h1>

        <p
          className="text-base md:text-lg lg:text-xl leading-8 mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          Regain your strength and move confidently with evidence-based
          physiotherapy from experienced professionals. We provide personalized
          treatment for back pain, neck pain, knee pain, frozen shoulder,
          sports injuries, stroke rehabilitation, arthritis, and other
          musculoskeletal conditions using modern rehabilitation techniques.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <a href="/appointment" className="btn btn-primary btn-lg">
            Book Appointment
          </a>

          <a href="tel:+8801767564737" className="btn btn-outline btn-lg text-white border-white hover:text-black">
            Call Now
          </a>
           
        </div>

        {/* Trust Badges */}
        <div
          className="flex flex-wrap justify-center gap-3"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          <div className="badge badge-outline badge-lg text-white border-white px-4 py-4">
            ✔ Experienced Physiotherapists
          </div>

          <div className="badge badge-outline badge-lg text-white border-white px-4 py-4">
            ✔ Personalized Treatment
          </div>

          <div className="badge badge-outline badge-lg text-white border-white px-4 py-4">
            ✔ Modern Equipment
          </div>

          <div className="badge badge-outline badge-lg text-white border-white px-4 py-4">
            ✔ Convenient Dhaka Location
          </div>
        </div>

      </div>
    </div>
  </div>
</div><div>
  <div className="hero sm:min-h-screen-[550px] lg:min-h-screen landingtwo relative">
    {/* Overlay */}
    <div className="hero-overlay bg-black bg-opacity-50"></div>

    <div className="hero-content text-center text-white relative z-10 px-5">
      <div className="max-w-3xl">

        <h2
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Back Pain, Neck Pain & Joint Pain Treatment
        </h2>

        <p
          className="text-base md:text-lg lg:text-xl leading-8 mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          Don't let pain affect your daily life. Our experienced
          physiotherapists provide personalized treatment for lower back pain,
          neck pain, knee pain, frozen shoulder, sciatica, and other joint
          conditions using evidence-based rehabilitation techniques to reduce
          pain, restore movement, and improve your quality of life.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <a href="/services" className="btn btn-primary btn-lg">
            Explore Treatments
          </a>

          <a
            href="/appointment"
            className="btn btn-outline btn-lg text-white border-white hover:text-black"
          >
            Book Consultation
          </a>
        </div>

        {/* Treatment Highlights */}
        <div
          className="flex flex-wrap justify-center gap-3"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          <div className="badge badge-outline badge-lg text-white border-white px-4 py-4">
            ✔ Back Pain
          </div>

          <div className="badge badge-outline badge-lg text-white border-white px-4 py-4">
            ✔ Neck Pain
          </div>

          <div className="badge badge-outline badge-lg text-white border-white px-4 py-4">
            ✔ Knee Pain
          </div>

          <div className="badge badge-outline badge-lg text-white border-white px-4 py-4">
            ✔ Frozen Shoulder
          </div>

          <div className="badge badge-outline badge-lg text-white border-white px-4 py-4">
            ✔ Sciatica
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
          <div>
  <div className="hero sm:min-h-screen-[550px] lg:min-h-screen landingthree relative">
    {/* Overlay */}
    <div className="hero-overlay bg-black bg-opacity-50"></div>

    <div className="hero-content text-center text-white relative z-10 px-5">
      <div className="max-w-3xl">

        <h2
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Stroke Rehabilitation & Neurological Physiotherapy
        </h2>

        <p
          className="text-base md:text-lg lg:text-xl leading-8 mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          Recover with personalized stroke rehabilitation and neurological
          physiotherapy designed to improve mobility, strength, balance, and
          independence. Our experienced physiotherapists create evidence-based
          treatment plans to support recovery after stroke, paralysis, nerve
          injuries, and other neurological conditions.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <a href="/services" className="btn btn-primary btn-lg">
            Learn More
          </a>

          <a
            href="/appointment"
            className="btn btn-outline btn-lg text-white border-white hover:text-black"
          >
            Book Assessment
          </a>
        </div>

        {/* Highlights */}
        <div
          className="flex flex-wrap justify-center gap-3"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          <div className="badge badge-outline badge-lg text-white border-white px-4 py-4">
            ✔ Stroke Rehabilitation
          </div>

          <div className="badge badge-outline badge-lg text-white border-white px-4 py-4">
            ✔ Neurological Physiotherapy
          </div>

          <div className="badge badge-outline badge-lg text-white border-white px-4 py-4">
            ✔ Balance Training
          </div>

          <div className="badge badge-outline badge-lg text-white border-white px-4 py-4">
            ✔ Walking Recovery
          </div>

          <div className="badge badge-outline badge-lg text-white border-white px-4 py-4">
            ✔ Personalized Care
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
          <div>
  <div className="hero sm:min-h-screen-[550px] lg:min-h-screen landingfour relative">
    {/* Overlay */}
    <div className="hero-overlay bg-black bg-opacity-50"></div>

    <div className="hero-content text-center text-white relative z-10 px-5">
      <div className="max-w-3xl">

        <h2
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Sports Injury Rehabilitation & Post-Surgery Recovery
        </h2>

        <p
          className="text-base md:text-lg lg:text-xl leading-8 mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          Return to your active lifestyle with personalized sports injury
          rehabilitation and post-surgery physiotherapy. Our experienced
          physiotherapists help reduce pain, restore strength, improve
          flexibility, and support faster recovery from ligament injuries,
          muscle strains, fractures, joint replacement surgery, and other
          orthopedic conditions.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <a href="/services" className="btn btn-primary btn-lg">
            Explore Treatments
          </a>

          <a
            href="/appointment"
            className="btn btn-outline btn-lg text-white border-white hover:text-black"
          >
            Book Appointment
          </a>
        </div>

        {/* Treatment Highlights */}
        <div
          className="flex flex-wrap justify-center gap-3"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          <div className="badge badge-outline badge-lg text-white border-white px-4 py-4">
            ✔ Sports Injury
          </div>

          <div className="badge badge-outline badge-lg text-white border-white px-4 py-4">
            ✔ Post-Surgery Rehabilitation
          </div>

          <div className="badge badge-outline badge-lg text-white border-white px-4 py-4">
            ✔ Exercise Therapy
          </div>

          <div className="badge badge-outline badge-lg text-white border-white px-4 py-4">
            ✔ Muscle & Ligament Recovery
          </div>

          <div className="badge badge-outline badge-lg text-white border-white px-4 py-4">
            ✔ Faster Recovery
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
      
        </Slider>
      </div>
    </div>
  );
};

export default Landingnew;
