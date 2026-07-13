import React from "react";
import time from "../../assets/time management.jpg";
import Supervision from "../../assets/Supervission.jpg";
import Comforthome from "../../assets/Comfort of home.jpg";
import Personalized from "../../assets/personilized.jpg";
import increase from "../../assets/increase scope of treatment.jpg";
import cost from "../../assets/Cost effectiveness.jpg";
import "./About.css";
const About = () => {
  const whyLeapData = [
    {
      id: 1,
      image: cost,
      alt: "Affordable physiotherapy treatment in Dhaka",
      title: "Affordable & Cost-Effective Physiotherapy",
      description:
        "Receive high-quality physiotherapy treatment without unnecessary travel expenses or long waiting times. Our evidence-based rehabilitation services help you recover while saving both time and money.",
      keywords: [
        "Affordable Care",
        "Physiotherapy",
        "Rehabilitation",
        "Pain Relief",
      ],
    },

    {
      id: 2,
      image: time,
      alt: "Flexible physiotherapy appointments",
      title: "Flexible Appointment Scheduling",
      description:
        "Book physiotherapy sessions at a time that suits your lifestyle. Our flexible scheduling helps you continue treatment without interrupting your work, family or daily activities.",
      keywords: ["Flexible Time", "Easy Booking", "Patient Care", "Convenient"],
    },

    {
      id: 3,
      image: Supervision,
      alt: "Experienced physiotherapists providing personalized care",
      title: "Experienced Physiotherapists & Continuous Care",
      description:
        "Our skilled physiotherapists carefully monitor your recovery, adjust your rehabilitation plan when needed and provide one-to-one guidance to achieve better treatment outcomes.",
      keywords: [
        "Experienced Team",
        "Rehabilitation",
        "Recovery",
        "One-to-One Care",
      ],
    },

    {
      id: 4,
      image: Comforthome,
      alt: "Comfortable physiotherapy environment",
      title: "Comfortable & Patient-Friendly Environment",
      description:
        "A welcoming treatment environment helps patients feel relaxed and confident during physiotherapy, sports injury rehabilitation and long-term recovery programs.",
      keywords: ["Comfort", "Recovery", "Family Support", "Patient Care"],
    },

    {
      id: 5,
      image: Personalized,
      alt: "Personalized physiotherapy treatment plans",
      title: "Personalized Treatment Plans",
      description:
        "Every patient receives a customized physiotherapy and rehabilitation program based on their condition, goals and recovery progress to achieve the best possible outcome.",
      keywords: [
        "Personalized Care",
        "Back Pain",
        "Sports Injury",
        "Stroke Rehab",
      ],
    },

    {
      id: 6,
      image: increase,
      alt: "Comprehensive rehabilitation services in Dhaka",
      title: "Comprehensive Rehabilitation Programs",
      description:
        "From back pain, neck pain and knee pain to sports injuries, stroke rehabilitation and post-surgical recovery, we provide complete physiotherapy solutions under one roof.",
      keywords: ["Back Pain", "Knee Pain", "Stroke Rehab", "Sports Injury"],
    },
  ];

  return (
    <div className="py-10">
      <div
        className="hero min-h-screen"
    
        style={{
          backgroundImage: `url(" https://atriumpt.com/wp-content/uploads/2022/03/atrium-physical-therapy-request-appointment%E2%80%94background-Las-Cruces-NM.png")`,
        }}
      >





        
        <section className="py-20  ">
          <div className="container mx-auto px-4 lg:px-10">
            {/* Heading */}

            <div
              className="max-w-4xl mx-auto text-center mb-16"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span className="badge badge-primary badge-lg mb-4">
                Why Choose L.E.A.P Physiotherapy?
              </span>

              <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7]">
                Trusted Physiotherapy & Rehabilitation Center in Dhaka
              </h2>

              <p className="mt-6 text-white text-base lg:text-lg leading-8 max-w-4xl mx-auto">
                At <strong>L.E.A.P Physiotherapy & Rehabilitation</strong>, we
                combine experienced physiotherapists, evidence-based treatment,
                personalized rehabilitation plans and patient-centered care to
                help you recover from back pain, neck pain, sports injuries,
                stroke, arthritis and post-surgical conditions with confidence.
              </p>
            </div>

            {/* Cards */}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {whyLeapData.map((item, index) => (
                <article
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          
          shadow-lg
          hover:shadow-2xl
          hover:-translate-y-2
          transition-all
          duration-300
          h-full
        "
                >
                  {/* Top Image */}

                  <figure className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      className="
              w-full
              h-56
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
                    />
                  </figure>

                  {/* Content */}

                  <div className="p-6 flex flex-col h-[calc(100%-224px)]">
                    <h3 className="text-xl font-bold text-white leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-white leading-7 flex-grow">
                      {item.description}
                    </p>

                    {/* Keywords */}

                    <div className="flex flex-wrap gap-2 mt-5">
                      {item.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="
                  badge
                  badge-outline
                  border-[#034ca7]
                  text-white
                  hover:bg-[#034ca7]
                  hover:text-white
                  transition
                "
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Decorative Gradient */}

                  <div
                    className="
            absolute
            top-0
            left-0
            h-1
            w-full
            bg-gradient-to-r
            from-[#034ca7]
            to-[#2622B7]
          "
                  ></div>
                </article>
              ))}
            </div>
          </div>
        </section>
        ```
      </div>
    </div>
  );
};

export default About;
