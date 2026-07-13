import React from "react";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import {
  FaUserCheck,
  FaUserMd,
  FaHeartbeat,
  FaProcedures,
  FaStethoscope,
} from "react-icons/fa";

import "./Success.css";
import Counter from "../Counter/Counter";

const Success = () => {
  const statsData = [
    {
      id: 1,
      number: 500,
      suffix: "+",
      icon: FaHeartbeat,
      title: "Successful Patient Recoveries",
      description:
        "Helping patients recover from back pain, sports injuries, stroke rehabilitation and other movement disorders.",
    },

    {
      id: 2,
      number: 2000,
      suffix: "+",
      icon: FaUserCheck,
      title: "Patients Treated",
      description:
        "Trusted by families across Bangladesh for evidence-based physiotherapy and rehabilitation care.",
    },

    {
      id: 3,
      number: 50,
      suffix: "+",
      icon: FaProcedures,
      title: "Advanced Rehabilitation Equipment",
      description:
        "Modern physiotherapy equipment supporting pain management, mobility improvement and rehabilitation.",
    },

    {
      id: 4,
      number: 200,
      suffix: "+",
      icon: FaUserMd,
      title: "Licensed Physiotherapists",
      description:
        "Experienced physiotherapists delivering personalized treatment plans for every patient.",
    },

    {
      id: 5,
      number: 100,
      suffix: "+",
      icon: FaStethoscope,
      title: "Specialist Physicians",
      description:
        "Working together with physiotherapists to provide comprehensive rehabilitation and recovery.",
    },
  ];

  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-[#f8fbff] via-white to-[#f8fbff]">
        <div className="container mx-auto px-4 lg:px-10">
          {/* Heading */}

          <div
            className="max-w-4xl mx-auto text-center mb-16"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="badge badge-primary badge-lg mb-4">
              Trusted Physiotherapy & Rehabilitation Center
            </span>

            <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7]">
              Delivering Better Recovery Through Expert Physiotherapy Care
            </h2>

            <p className="mt-6 text-gray-600 text-base lg:text-lg leading-8 max-w-4xl mx-auto">
              Our experienced physiotherapists have helped patients recover from
              back pain, neck pain, knee pain, sports injuries, stroke
              rehabilitation, arthritis and post-surgical conditions through
              evidence-based physiotherapy and rehabilitation programs.
            </p>
          </div>

          {/* Statistics */}

          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {statsData.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.id}
                  data-aos="zoom-in-up"
                  data-aos-delay={index * 100}
                  className="
            group
            bg-white
            rounded-3xl
            border
            border-slate-200
            p-6
            text-center
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-300
            h-full
            relative
            overflow-hidden
          "
                >
                  {/* Decorative Background */}

                  <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-blue-100 opacity-40 blur-3xl group-hover:scale-125 transition duration-500"></div>

                  {/* Icon */}

                  <div
                    className="
              relative
              z-10
              mx-auto
              mb-5
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              bg-gradient-to-r
              from-[#034ca7]
              to-[#2622B7]
              text-white
              shadow-lg
            "
                  >
                    <Icon size={28} />
                  </div>

                  {/* Counter */}

                  <h3 className="relative z-10 text-3xl lg:text-4xl font-bold text-[#034ca7]">
                    <Counter end={item.number} />
                    {item.suffix}
                  </h3>

                  {/* Title */}

                  <h4 className="relative z-10 mt-3 text-lg font-bold text-slate-800 leading-snug">
                    {item.title}
                  </h4>

                  {/* Description */}

                  <p className="relative z-10 mt-3 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>

          {/* Bottom CTA */}

          <div
            className="mt-16 text-center"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-800">
              Start Your Recovery Journey Today
            </h3>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 leading-8">
              Whether you're looking for physiotherapy for back pain, neck pain,
              knee pain, sports injury rehabilitation, stroke rehabilitation or
              post-surgical recovery, our experienced physiotherapists are here
              to help you regain movement, reduce pain and improve your quality
              of life.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="/appointment">
                <button className="btn btn-primary rounded-full px-8">
                  Book Appointment
                </button>
              </a>

              <a href="/services">
                <button className="btn btn-outline btn-primary rounded-full px-8">
                  Explore Services
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Success;
