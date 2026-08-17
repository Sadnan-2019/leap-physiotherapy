import React from "react";
import physio from "../../assets/Physio.jpg"
const PhysiotherapyLanding = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
              Physiotherapy in Gulshan, Dhaka
            </span>

            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Physiotherapy in Dhaka for Pain Relief, Rehabilitation & Better Mobility
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Get personalized physiotherapy and rehabilitation care from
              experienced professionals at L.E.A.P Physiotherapy &
              Rehabilitation in Gulshan, Dhaka.
            </p>

            {/* Trust Points */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700">
                  ✓
                </span>
                <span className="text-sm font-medium text-gray-700">
                  Personalized Treatment Plans
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700">
                  ✓
                </span>
                <span className="text-sm font-medium text-gray-700">
                  Experienced Physiotherapists
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700">
                  ✓
                </span>
                <span className="text-sm font-medium text-gray-700">
                  Evidence-Based Rehabilitation
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700">
                  ✓
                </span>
                <span className="text-sm font-medium text-gray-700">
                  Modern Physiotherapy Techniques
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/appointment"
                className="rounded-lg bg-green-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                Book an Appointment
              </a>

              <a
                href="tel:+8801318588777"
                className="rounded-lg border border-green-600 px-6 py-3.5 text-sm font-semibold text-green-700 transition hover:bg-green-50"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={physio}
                alt="Physiotherapist providing rehabilitation treatment in Dhaka"
                className="h-[420px] w-full object-cover sm:h-[500px]"
              />
            </div>

            {/* Location / Trust Card */}
            <div className="absolute bottom-5 left-5 rounded-xl bg-white p-4 shadow-lg">
              <p className="text-sm font-semibold text-gray-900">
                L.E.A.P Physiotherapy & Rehabilitation
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Gulshan, Dhaka
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PhysiotherapyLanding;