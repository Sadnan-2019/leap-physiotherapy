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
{/* Neurological Rehabilitation */}
<div className="overflow-hidden rounded-2xl bg-white shadow-sm">
  <img
    src="/images/neurological-rehabilitation.jpg"
    alt="Neurological rehabilitation physiotherapy treatment"
    className="h-64 w-full object-cover"
  />

  <div className="p-7">
    <span className="text-sm font-semibold text-green-600">
      Neurological Care
    </span>

    <h3 className="mt-2 text-2xl font-bold text-gray-900">
      Neurological Rehabilitation
    </h3>

    <p className="mt-4 leading-7 text-gray-600">
      Personalized rehabilitation helps people recovering from stroke,
      paralysis, and other neurological conditions improve movement, balance,
      coordination, and everyday functional independence.
    </p>

    <a
      href="/appointment"
      className="mt-6 inline-flex rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
    >
      Book an Appointment
    </a>
  </div>
</div>

{/* Sports Injury Rehabilitation */}
<div className="overflow-hidden rounded-2xl bg-white shadow-sm">
  <img
    src="/images/sports-injury-rehabilitation.jpg"
    alt="Sports injury rehabilitation treatment"
    className="h-64 w-full object-cover"
  />

  <div className="p-7">
    <span className="text-sm font-semibold text-green-600">
      Sports Rehabilitation
    </span>

    <h3 className="mt-2 text-2xl font-bold text-gray-900">
      Sports Injury Rehabilitation
    </h3>

    <p className="mt-4 leading-7 text-gray-600">
      Structured rehabilitation for sports-related injuries focuses on
      restoring strength, flexibility, movement, and confidence while helping
      active individuals return safely to their normal activities.
    </p>

    <a
      href="/appointment"
      className="mt-6 inline-flex rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
    >
      Book an Appointment
    </a>
  </div>
</div>

{/* Post-Surgical Rehabilitation */}
<div className="overflow-hidden rounded-2xl bg-white shadow-sm">
  <img
    src="/images/post-surgical-rehabilitation.jpg"
    alt="Post-surgical rehabilitation physiotherapy"
    className="h-64 w-full object-cover"
  />

  <div className="p-7">
    <span className="text-sm font-semibold text-green-600">
      Recovery & Rehabilitation
    </span>

    <h3 className="mt-2 text-2xl font-bold text-gray-900">
      Post-Surgical Rehabilitation
    </h3>

    <p className="mt-4 leading-7 text-gray-600">
      Guided rehabilitation after surgery supports the gradual recovery of
      strength, flexibility, mobility, and physical function through a
      personalized treatment plan.
    </p>

    <a
      href="/appointment"
      className="mt-6 inline-flex rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
    >
      Book an Appointment
    </a>
  </div>
</div>

{/* Sports Injury Rehabilitation */}
<div className="overflow-hidden rounded-2xl bg-white shadow-sm">
  <img
    src="/images/sports-injury-rehabilitation.jpg"
    alt="Sports injury rehabilitation physiotherapy treatment"
    className="h-64 w-full object-cover"
  />

  <div className="p-7">
    <span className="text-sm font-semibold text-green-600">
      Sports Rehabilitation
    </span>

    <h3 className="mt-2 text-2xl font-bold text-gray-900">
      Sports Injury Rehabilitation
    </h3>

    <p className="mt-4 leading-7 text-gray-600">
      Targeted rehabilitation for sprains, strains, and other sports-related
      injuries helps restore strength, flexibility, movement, and confidence
      for a safe return to activity.
    </p>

    <a
      href="/appointment"
      className="mt-6 inline-flex rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
    >
      Book an Appointment
    </a>
  </div>
</div>

{/* Post-Surgical Rehabilitation */}
<div className="overflow-hidden rounded-2xl bg-white shadow-sm">
  <img
    src="/images/post-surgical-rehabilitation.jpg"
    alt="Post-surgical rehabilitation physiotherapy"
    className="h-64 w-full object-cover"
  />

  <div className="p-7">
    <span className="text-sm font-semibold text-green-600">
      Recovery & Rehabilitation
    </span>

    <h3 className="mt-2 text-2xl font-bold text-gray-900">
      Post-Surgical Rehabilitation
    </h3>

    <p className="mt-4 leading-7 text-gray-600">
      Personalized rehabilitation after surgery supports the gradual recovery
      of strength, flexibility, mobility, and physical function through a
      structured treatment plan.
    </p>

    <a
      href="/appointment"
      className="mt-6 inline-flex rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
    >
      Book an Appointment
    </a>
  </div>
</div>

{/* Cardiorespiratory Physiotherapy */}
<div className="overflow-hidden rounded-2xl bg-white shadow-sm">
  <img
    src="/images/cardiorespiratory-physiotherapy.jpg"
    alt="Cardiorespiratory physiotherapy treatment"
    className="h-64 w-full object-cover"
  />

  <div className="p-7">
    <span className="text-sm font-semibold text-green-600">
      Respiratory & Functional Care
    </span>

    <h3 className="mt-2 text-2xl font-bold text-gray-900">
      Cardiorespiratory Physiotherapy
    </h3>

    <p className="mt-4 leading-7 text-gray-600">
      Cardiorespiratory physiotherapy supports people with conditions affecting
      the heart and lungs through appropriate rehabilitation, breathing
      support, exercise, and functional recovery.
    </p>

    <a
      href="/appointment"
      className="mt-6 inline-flex rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
    >
      Book an Appointment
    </a>
  </div>
</div>
{/* Women's Health Physiotherapy */}
<div className="overflow-hidden rounded-2xl bg-white shadow-sm">
  <img
    src="/images/womens-health-physiotherapy.jpg"
    alt="Women's health physiotherapy treatment"
    className="h-64 w-full object-cover"
  />

  <div className="p-7">
    <span className="text-sm font-semibold text-green-600">
      Women's Health Care
    </span>

    <h3 className="mt-2 text-2xl font-bold text-gray-900">
      Women's Health Physiotherapy
    </h3>

    <p className="mt-4 leading-7 text-gray-600">
      Specialized physiotherapy support for women's health needs, with
      personalized care focused on improving movement, comfort, strength,
      and physical function.
    </p>

    <a
      href="/appointment"
      className="mt-6 inline-flex rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
    >
      Book an Appointment
    </a>
  </div>
</div>

{/* Paediatric Physiotherapy */}
<div className="overflow-hidden rounded-2xl bg-white shadow-sm">
  <img
    src="/images/paediatric-physiotherapy.jpg"
    alt="Paediatric physiotherapy treatment"
    className="h-64 w-full object-cover"
  />

  <div className="p-7">
    <span className="text-sm font-semibold text-green-600">
      Child Rehabilitation
    </span>

    <h3 className="mt-2 text-2xl font-bold text-gray-900">
      Paediatric Physiotherapy
    </h3>

    <p className="mt-4 leading-7 text-gray-600">
      Child-focused physiotherapy designed around individual movement and
      developmental needs, helping children build physical skills, mobility,
      strength, and confidence.
    </p>

    <a
      href="/appointment"
      className="mt-6 inline-flex rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
    >
      Book an Appointment
    </a>
  </div>
</div>

{/* Occupational Health Physiotherapy */}
<div className="overflow-hidden rounded-2xl bg-white shadow-sm">
  <img
    src="/images/occupational-health-physiotherapy.jpg"
    alt="Occupational health physiotherapy treatment"
    className="h-64 w-full object-cover"
  />

  <div className="p-7">
    <span className="text-sm font-semibold text-green-600">
      Workplace Rehabilitation
    </span>

    <h3 className="mt-2 text-2xl font-bold text-gray-900">
      Occupational Health Physiotherapy
    </h3>

    <p className="mt-4 leading-7 text-gray-600">
      Physiotherapy support for work-related pain, movement limitations, and
      physical strain, helping patients improve function and return to daily
      activities safely.
    </p>

    <a
      href="/appointment"
      className="mt-6 inline-flex rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
    >
      Book an Appointment
    </a>
  </div>
</div>

{/* Acupuncture & Dry Needling */}
<div className="overflow-hidden rounded-2xl bg-white shadow-sm">
  <img
    src="/images/acupuncture-dry-needling.jpg"
    alt="Acupuncture and dry needling physiotherapy treatment"
    className="h-64 w-full object-cover"
  />

  <div className="p-7">
    <span className="text-sm font-semibold text-green-600">
      Specialized Treatment
    </span>

    <h3 className="mt-2 text-2xl font-bold text-gray-900">
      Acupuncture & Dry Needling
    </h3>

    <p className="mt-4 leading-7 text-gray-600">
      Targeted techniques used as part of appropriate rehabilitation programs
      to support pain management, reduce muscle tension, and improve physical
      function.
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
{/* Conditions We Treat */}
 
      </div>
    </section>
  );
};

export default PhysiotherapyServices;