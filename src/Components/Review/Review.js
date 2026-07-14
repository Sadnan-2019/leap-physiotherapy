import React from "react";
import Slider from "react-slick";

import { FaQuoteLeft } from "react-icons/fa";
import review1 from "../../assets/reviewone.jpg";
import review2 from "../../assets/reviewtwo.jpg";
import review3 from "../../assets/reviewthree.jpg";

import "./Review.css";

const Review = () => {
  const reviewsData = [
    {
      id: 1,
      name: "Neena Chowdhury",
      image: review1,
      rating: 5,
      review:
        "Amazing service and outstanding care. My physiotherapist, Ms. Khusbu, was professional, attentive and supportive throughout my treatment. The personalized physiotherapy sessions helped improve my recovery, and the entire team was friendly and well organized.",
    },

    {
      id: 2,
      name: "Kayes Khan",
      image: review2,
      rating: 5,
      review:
        "One of the best physiotherapy centers in Dhaka. Dr. Shafiq provided excellent guidance and treatment with great professionalism. I highly recommend L.E.A.P Physiotherapy & Rehabilitation to anyone looking for quality rehabilitation care.",
    },

    {
      id: 3,
      name: "Jobeda Rabbani Joly",
      image: review3,
      rating: 5,
      review:
        "I had been suffering from pain for several years, but after receiving physiotherapy treatment at L.E.A.P, my condition improved significantly. The therapists were caring, experienced and always encouraged me throughout my recovery journey.",
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div>
        <div className="review ">
          <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white">
            <div className="container mx-auto px-4 lg:px-10">
              {/* Heading */}

              <div
                className="max-w-4xl mx-auto text-center mb-16"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <span className="badge badge-primary badge-lg mb-4">
                  Real Patient Experiences
                </span>

                <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7]">
                  Patient Success Stories & Physiotherapy Reviews
                </h2>

                <p className="mt-6 text-base lg:text-lg text-gray-600 leading-8 max-w-4xl mx-auto">
                  Discover why patients trust{" "}
                  <strong>L.E.A.P Physiotherapy & Rehabilitation</strong> for
                  evidence-based physiotherapy, sports injury rehabilitation,
                  stroke rehabilitation, back pain treatment, knee pain
                  treatment and personalized recovery programs. Every success
                  story reflects our commitment to helping patients reduce pain,
                  restore movement and improve their quality of life.
                </p>
              </div>

              {/* Slider */}

              <Slider {...settings}>
                {reviewsData.map((review, index) => (
                  <div
                    key={review.id}
                    className="px-3"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    {/* Card UI will be added in Step 2.2 */}

                    <div
                      className="
    group
    bg-white
    border
    border-slate-200
    rounded-3xl
    p-8
    shadow-lg
    hover:shadow-2xl
    hover:-translate-y-2
    transition-all
    duration-300
    h-[470px]
    flex
    flex-col
    relative
    overflow-hidden
  "
                    >
                      {/* Decorative Background */}

                      <div className="absolute -right-12 -top-12 w-36 h-36 rounded-full bg-blue-100 opacity-40 blur-3xl group-hover:scale-125 transition duration-500"></div>

                      {/* Quote */}

                      <div className="relative z-10">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#034ca7] to-[#2622B7] flex items-center justify-center shadow-lg">
                          <FaQuoteLeft className="text-white text-xl" />
                        </div>
                      </div>

                      {/* Review */}

                      <blockquote className="relative z-10 mt-6 flex-grow">
                        <p className="text-gray-600 leading-8 text-[15px] italic">
                          "{review.review}"
                        </p>
                      </blockquote>

                      {/* Rating */}

                      <div className="relative z-10 flex items-center gap-1 mt-6">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-yellow-400 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.377 2.454a1 1 0 00-.364 1.118l1.287 3.967c.3.922-.755 1.688-1.54 1.118L10 13.348l-3.376 2.453c-.784.57-1.838-.196-1.539-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.63 7.394c-.783-.57-.38-1.81.588-1.81H7.39a1 1 0 00.951-.69L9.049.927z" />
                          </svg>
                        ))}

                        <span className="ml-2 text-sm font-semibold text-gray-600">
                          5.0/5
                        </span>
                      </div>

                      {/* Patient */}

                      <div className="relative z-10 mt-6 flex items-center gap-4 border-t pt-6">
                        <img
                          src={review.image}
                          alt={`${review.name} - Patient Review`}
                          loading="lazy"
                          className="w-16 h-16 rounded-full object-cover border-4 border-blue-100 shadow-md"
                        />

                        <div>
                          <h3 className="font-bold text-lg text-slate-800">
                            {review.name}
                          </h3>

                          <p className="text-sm text-gray-500">
                            Verified Physiotherapy Patient
                          </p>
                        </div>
                      </div>

                      {/* Hover Border */}

                      <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#034ca7] to-[#2622B7] transition-all duration-500"></div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Review;
