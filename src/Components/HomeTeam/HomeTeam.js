import React from "react";
import dr1 from "../../assets/tonni.760bf943c7f274b05a3f.jpg";
import dr2 from "../../assets/faisal.c4359edf3e6e8acb6190.jpg";
import dr3 from "../../assets/sumaiya2.ba7d38ab35afd1967c5b.jpg";
import dr4 from "../../assets/jasim.0dd0b4e2a955b63524fe.jpg";
import dr5 from "../../assets/rajib.10317f1f0c394a0d4520.jpg";
import dr6 from "../../assets/khadija.jpg";
import dr7 from "../../assets/irin.e191012389facb999a9d.jpg";
// import { teamData } from "../../data/teamData";
import { FaCheckCircle } from "react-icons/fa";

const HomeTeam = () => {
  const teamData = [
    {
      id: 1,
      image: dr1,
      name: "Tanzina Akter",
      designation: "Senior Consultant Physiotherapist",
      degree: "BSPT",
      experience: "14+ Years Experience",
      expertise: [
        "Pain Management",
        "Orthopedic Rehabilitation",
        "Sports Injury Rehabilitation",
        "Manual Therapy",
      ],
      alt: "Tanzina Akter - Senior Consultant Physiotherapist at LEAP Physiotherapy & Rehabilitation",
    },

    {
      id: 2,
      image: dr2,
      name: "Md. Mahmudul Hasan Khan Faisal",
      designation: "Senior Clinical Physiotherapist",
      degree: "BSPT (Faculty of Medicine, University of Dhaka)",
      experience: "10+ Years Experience",
      expertise: [
        "Sports Physiotherapy",
        "Back Pain Treatment",
        "Neck Pain Rehabilitation",
        "Musculoskeletal Physiotherapy",
      ],
      alt: "Md. Mahmudul Hasan Khan Faisal - Senior Clinical Physiotherapist",
    },

    {
      id: 3,
      image: dr3,
      name: "Sumaiya Akter",
      designation: "Consultant Physiotherapist",
      degree: "BSPT (DU), MPH",
      experience: "4+ Years Experience",
      expertise: [
        "Women's Health",
        "Neurological Rehabilitation",
        "Stroke Rehabilitation",
        "Exercise Therapy",
      ],
      alt: "Sumaiya Akter - Consultant Physiotherapist",
    },

    {
      id: 4,
      image: dr6,
      name: "Khadiza Akter",
      designation: "Senior Consultant Physiotherapist",
      degree: "BSPT, MFR (India)",
      experience: "15+ Years Experience",
      expertise: [
        "Neuro Rehabilitation",
        "Musculoskeletal Pain",
        "Dry Needling",
        "Kinesio Taping",
      ],
      alt: "Khadiza Akter - Senior Consultant Physiotherapist",
    },

    {
      id: 5,
      image: dr5,
      name: "Md. Sajedul Islam Rajib",
      designation: "Clinical Physiotherapist",
      degree: "B.Sc in Physiotherapy (DU)",
      experience: "18+ Years Experience",
      expertise: [
        "Back Pain",
        "Frozen Shoulder",
        "Joint Pain",
        "Manual Therapy",
      ],
      alt: "Md. Sajedul Islam Rajib - Clinical Physiotherapist",
    },

    {
      id: 6,
      image: dr7,
      name: "Irin Islam",
      designation: "Consultant Physiotherapist",
      degree: "BSPT (DU)",
      experience: "4+ Years Experience",
      expertise: [
        "Neuro Rehabilitation",
        "Musculoskeletal Rehabilitation",
        "Exercise Therapy",
        "Pain Management",
      ],
      alt: "Irin Islam - Consultant Physiotherapist",
    },

    {
      id: 7,
      image: dr4,
      name: "Jasim Uddin",
      designation: "Senior Consultant Physiotherapist",
      degree: "M.Sc (Ongoing), BSPT",
      experience: "7+ Years at LEAP",
      expertise: [
        "Stroke Rehabilitation",
        "Neurological Physiotherapy",
        "Clinical Teaching",
        "Pain Rehabilitation",
      ],
      alt: "Jasim Uddin - Senior Consultant Physiotherapist at LEAP",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white ">
      <div className="container mx-auto px-5 lg:px-10">
        {/* Heading */}

        <div className="max-w-5xl mx-auto text-center mb-16" data-aos="fade-up">
          <span className="badge badge-primary badge-lg mb-4">
            Experienced Physiotherapy Team
          </span>

          <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7]">
            Meet Our Expert Physiotherapists & Rehabilitation Specialists
          </h2>

          <p className="mt-6 text-base lg:text-lg leading-8 text-gray-600 max-w-4xl mx-auto">
            Our experienced physiotherapists provide evidence-based
            physiotherapy treatment for back pain, neck pain, knee pain, sports
            injuries, stroke rehabilitation, arthritis and post-surgical
            recovery. Patients from
            <strong> Gulshan</strong>,<strong> Banani</strong>,
            <strong> Baridhara</strong>,<strong> Mohakhali</strong> and across
            <strong> Dhaka</strong> trust L.E.A.P Physiotherapy & Rehabilitation
            for personalized care and long-term recovery.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {teamData.map((doctor, index) => (
            <div
              key={doctor.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group   rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border  "
            >
              {/* Image */}

              <div className="relative overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.alt}
                  loading="lazy"
                  className="w-full h-[420px] object-cover group-hover:scale-105 duration-500"
                />

                <div className="absolute top-5 left-5">
                  <span className="badge badge-primary badge-lg shadow-md">
                    {doctor.experience}
                  </span>
                </div>
              </div>

              {/* Content */}

              <div className="p-7">
                <h3 className="text-2xl font-bold text-slate-800">
                  {doctor.name}
                </h3>

                <p className="text-primary font-semibold mt-1">
                  {doctor.designation}
                </p>

                <p className="text-sm text-gray-500 mt-2">{doctor.degree}</p>

                <div className="divider my-5"></div>

                <div className="space-y-3">
                  {doctor.expertise.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <FaCheckCircle className="text-primary text-sm" />

                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>

      <div className="mt-20" data-aos="zoom-in" data-aos-duration="1000">
            <div className=" text-black p-8 lg:p-14 text-center   ">
              <h3 className="text-3xl lg:text-4xl font-bold">
                Ready to Start Your Recovery?
              </h3>

              <p className="mt-5 max-w-3xl mx-auto text-base lg:text-lg leading-8 text-black">
                Book an appointment with our experienced physiotherapists for
                personalized physiotherapy treatment, sports injury
                rehabilitation, stroke rehabilitation, back pain, neck pain,
                knee pain and post-surgical recovery. We proudly serve patients
                from
                <strong> Gulshan</strong>,<strong> Banani</strong>,
                <strong> Baridhara</strong>,<strong> Mohakhali</strong> and
                across Dhaka.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a href="/appointment">
                  <button className="btn btn-primary btn-lg rounded-full px-8">
                    Book Appointment
                  </button>
                </a>

                <a href="tel:+8801673615587">
                  <button className="btn   btn-primary btn-lg rounded-full border-white text-white   px-8">
                    Call Now
                  </button>
                </a>
              </div>
            </div>
          </div>
    </section>
  );
};

export default HomeTeam;
