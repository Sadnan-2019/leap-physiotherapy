import React from "react";
import pain from "../../assets/pain.webp"
import muscule from "../../assets/Tightness Of Muscle.jpg"
import orthopedic from "../../assets/Osteoarthritis.jpg"
const PhysiotherapyServices = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="container mx-auto px-4">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-green-600">
            Physiotherapy Services in Dhaka
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Physiotherapy Services at L.E.A.P
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Our physiotherapy services in Dhaka are designed to reduce pain,
            improve movement, and support personalized rehabilitation based on
            your condition and recovery needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2">

          {/* Pain Management */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <img
              src={pain}
              alt="Pain management physiotherapy treatment in Dhaka"
              className="h-64 w-full object-cover"
            />

            <div className="p-7">
              <span className="text-sm font-semibold text-green-600">
                Physiotherapy Treatment
              </span>

              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                Pain Management Physiotherapy
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Personalized physiotherapy treatment to help manage pain,
                improve movement, and support better function in daily life.
              </p>

              <a
                href="/appointment"
                className="mt-6 inline-flex rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                Book an Appointment
              </a>
            </div>
          </div>

          {/* Musculoskeletal Physiotherapy */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <img
              src={muscule}
              alt="Musculoskeletal physiotherapy treatment in Dhaka"
              className="h-64 w-full object-cover"
            />

            <div className="p-7">
              <span className="text-sm font-semibold text-green-600">
                Movement & Pain Care
              </span>

              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                Musculoskeletal Physiotherapy
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Physiotherapy for musculoskeletal conditions such as neck and
                back pain, joint problems, stiffness, and movement limitations,
                with treatment focused on restoring mobility and function.
              </p>

              <a
                href="/appointment"
                className="mt-6 inline-flex rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                Book an Appointment
              </a>
            </div>
          </div>

          {/* Orthopaedic Rehabilitation */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <img
              src={orthopedic}
              alt="Orthopaedic rehabilitation physiotherapy in Dhaka"
              className="h-64 w-full object-cover"
            />

            <div className="p-7">
              <span className="text-sm font-semibold text-green-600">
                Rehabilitation Care
              </span>

              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                Orthopaedic Rehabilitation
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Personalized rehabilitation for orthopaedic conditions,
                including joint problems, arthritis, and recovery before or
                after orthopaedic surgery.
              </p>

              <a
                href="/appointment"
                className="mt-6 inline-flex rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                Book an Appointment
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PhysiotherapyServices;