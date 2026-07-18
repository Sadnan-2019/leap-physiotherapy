import React from "react";
import physio from "../../assets/servicephysio.png";
import rehabilitation from "../../assets/rehabilitation.png";
import chest from "../../assets/chest-press.png";
import injury from "../../assets/injury.png";
import postoperative from "../../assets/postoperative.png";
import Child from "../../assets/Child.png";
import therapy from "../../assets/therapy.png";
import "./Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Physiotherapy for Back, Neck & Knee Pain",
      image: physio,
      alt: "Physiotherapy treatment in Dhaka",
      description:
        "Personalized physiotherapy treatment for lower back pain, neck pain, knee pain, shoulder pain, arthritis, sciatica and movement disorders using evidence-based rehabilitation techniques.",
      badges: [
        "Back Pain",
        "Neck Pain",
        "Knee Pain",
        "Frozen Shoulder",
        "Sciatica",
        "Arthritis",
      ],
      link: "/physiotherapy",
    },

    {
      id: 2,
      title: "Stroke, Neurological & Orthopedic Rehabilitation",
      image: rehabilitation,
      alt: "Stroke rehabilitation in Dhaka",
      description:
        "Specialized rehabilitation programs for stroke recovery, spinal cord injury, Parkinson's disease, balance disorders and mobility improvement.",
      badges: [
        "Stroke",
        "Parkinson's",
        "Spinal Cord Injury",
        "Balance",
        "Mobility",
        "Walking",
      ],
      link: "/rehabilitation",
    },

    {
      id: 3,
      title: "Chest Physiotherapy & Respiratory Rehabilitation",
      image: chest,
      alt: "Chest physiotherapy",
      description:
        "Chest physiotherapy for asthma, COPD, pneumonia, post-COVID recovery and breathing difficulties to improve lung function.",
      badges: ["Asthma", "COPD", "Pneumonia", "Post COVID", "Breathing"],
      link: "/chest-physiotherapy",
    },

    {
      id: 4,
      title: "Sports Injury Rehabilitation & Pain Management",
      image: injury,
      alt: "Sports injury rehabilitation",
      description:
        "Recover from ACL injuries, ankle sprains, tennis elbow, runner's knee, muscle strains and sports-related injuries.",
      badges: [
        "ACL Injury",
        "Ankle Sprain",
        "Runner's Knee",
        "Tennis Elbow",
        "Muscle Strain",
      ],
      link: "/sports-injuries",
    },

    {
      id: 5,
      title: "Pre & Post Surgical Physiotherapy",
      image: postoperative,
      alt: "Post surgery rehabilitation",
      description:
        "Structured rehabilitation before and after knee replacement, hip replacement, ACL reconstruction and fracture surgery.",
      badges: [
        "Knee Replacement",
        "Hip Replacement",
        "ACL Surgery",
        "Fracture",
        "Recovery",
      ],
      link: "/post-surgery",
    },

    {
      id: 6,
      title: "Pediatric Physiotherapy & Child Development",
      image: Child,
      alt: "Pediatric physiotherapy",
      description:
        "Specialized pediatric physiotherapy for developmental delay, cerebral palsy, autism support, walking difficulties and movement disorders.",
      badges: [
        "Development Delay",
        "Cerebral Palsy",
        "Autism",
        "Walking",
        "Balance",
      ],
      link: "/paediatric",
    },

    {
      id: 7,
      title: "Occupational, Speech & Specialized Therapy",
      image: therapy,
      alt: "Occupational therapy",
      description:
        "Integrated rehabilitation including occupational therapy, speech therapy, neuropsychology and music therapy for children and adults.",
      badges: [
        "Speech Therapy",
        "Occupational",
        "Neuropsychology",
        "Music Therapy",
      ],
      link: "/other-therapies",
    },
  ];
  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-white via-blue-50/40 to-white services">
        <div className="container mx-auto px-4 lg:px-10">
          {/* Heading */}
          <div
            className="max-w-4xl mx-auto text-center mb-16"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="badge badge-primary badge-lg mb-5">
              Evidence-Based Physiotherapy Care
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7]">
              Expert Physiotherapy, Sports Injury & Rehabilitation Services in
              Dhaka{" "}
            </h2>

            <p className="mt-6 text-gray-600 text-base lg:text-lg leading-8">
              At <strong>L.E.A.P Physiotherapy & Rehabilitation</strong>, we
              provide personalized physiotherapy treatment for back pain, neck
              pain, knee pain, frozen shoulder, sports injuries, stroke
              rehabilitation, arthritis, post-surgical recovery, chest
              physiotherapy and pediatric rehabilitation. Our experienced
              physiotherapists help reduce pain, restore movement and improve
              quality of life with evidence-based care.
            </p>
          </div>

          {/* Services */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service) => (
              <article
                key={service.id}
                className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-gradient-to-br
          from-[#063b77]
          via-[#05356e]
          to-[#2622B7]
          backdrop-blur-md
          shadow-xl
          shadow-blue-900/20
          hover:shadow-2xl
          hover:-translate-y-2
          hover:scale-[1.02]
          transition-all
          duration-300
          h-full
          p-6
          lg:p-8
        "
              >
                {/* Background Decoration */}

                <div className="absolute -right-16 -top-16 w-44 h-44 rounded-full bg-white/5 blur-3xl"></div>

                <div className="relative flex flex-col sm:flex-row gap-6">
                  {/* Image */}

                  <div
                    className="flex justify-center sm:justify-start"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                  >
                    <div
                      className="
                w-24
                h-24
                lg:w-28
                lg:h-28
                rounded-full
                bg-white/10
                border
                border-white/10
                backdrop-blur-sm
                flex
                items-center
                justify-center
                flex-shrink-0
              "
                    >
                      <img
                        src={service.image}
                        alt={service.alt}
                        loading="lazy"
                        className="
                  w-14
                  h-14
                  lg:w-20
                  lg:h-20
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
                      />
                    </div>
                  </div>

                  {/* Content */}

                  <div
                    className="flex-1 text-center sm:text-left"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    <h3 className="text-xl lg:text-2xl font-bold text-white leading-snug">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm lg:text-base leading-7 text-blue-100">
                      {service.description}
                    </p>

                    {/* Badges */}

                    <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-5">
                      {service.badges.map((badge) => (
                        <span
                          key={badge}
                          className="
                    badge
                    badge-sm
                    bg-white/15
                    border
                    border-white/20
                    text-white
                    hover:bg-white
                    hover:text-[#052f61]
                    transition
                  "
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    {/* Button */}

                    <div className="mt-7">
                      <a href={service.link}>
                        <button
                          className="
                    btn
                    btn-sm
                    rounded-full
                    bg-white
                    border-0
                    text-[#052f61]
                    hover:bg-blue-100
                    hover:scale-105
                    transition-all
                  "
                        >
                          Learn More →
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      ```
    </div>
  );
};

export default Services;
