import React from "react";
import physio from "../../assets/Physio.jpg";
import {
  MapPin,
  Clock,
  PhoneCall,
  Calendar,
  Navigation,
  UserCheck,
  CheckCircle2,
  Building2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function LocationBaseSection() {
  const scrollToForm = () => {
    document
      .getElementById("booking-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const surroundingAreas = [
    "Gulshan 1 & 2",
    "Banani",
    "Baridhara & DOHS",
    "Niketan",
    "Tejgaon",
    "Badda",
    "Mohakhali",
    "Uttara (via Expressway)",
  ];

  return (
    <section
      aria-labelledby="location-section-title"
      className="py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ============================================================
            SECTION HEADER
        ============================================================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-[#1D1AA9]/20 px-4 py-1.5 text-xs font-bold text-[#1D1AA9] sm:text-sm">
            <MapPin className="h-4 w-4 text-[#1D1AA9]" aria-hidden="true" />
            <span>Prime Gulshan-1 Location</span>
          </div>

          <h2
            id="location-section-title"
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Physiotherapy in <span className="text-[#1D1AA9]">Gulshan, Dhaka</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Located in the heart of Gulshan-1, L.E.A.P Physiotherapy & Rehabilitation 
            provides clinical care for working professionals, residents, and athletes seeking 
            expert physical recovery in Dhaka.
          </p>
        </div>

        {/* ============================================================
            LOCAL CONTENT GRID (4 Core Subheadings)
        ============================================================= */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* H3 1: Clinic Location & Access */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#1D1AA9]/20 text-[#1D1AA9]">
              <Building2 className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Physiotherapy Clinic in Gulshan
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Our modern facility in Gulshan-1 is designed for patient comfort, accessibility, and focused care. We offer dedicated space for individual manual therapy and active rehab exercises.
            </p>
          </div>

          {/* H3 2: Clinical Team */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#1D1AA9]/20 text-[#1D1AA9]">
              <UserCheck className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Experienced Physiotherapists in Gulshan
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Our clinical team brings hands-on experience in musculoskeletal pain management, sports medicine, spinal adjustments, and neurological rehabilitation for long-term recovery.
            </p>
          </div>

          {/* H3 3: Tailored Plans */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#1D1AA9]/20 text-[#1D1AA9]">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Personalized Rehabilitation Programs
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Every body is unique. We evaluate your underlying posture, joint mobility, and history to build a structured 1-on-1 rehabilitation program that fits your lifestyle.
            </p>
          </div>

          {/* H3 4: Appointment Booking */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#1D1AA9]/20 text-[#1D1AA9]">
              <Calendar className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Convenient Physiotherapy Appointments in Dhaka
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Skip the long clinic wait times. Schedule your preferred morning, afternoon, or evening session online or via WhatsApp for flexible appointment booking.
            </p>
          </div>
        </div>

        {/* ============================================================
            VISUAL UI SECTION (MAP + CLINIC IMAGE + ADDRESS + CTA)
        ============================================================= */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* LEFT: CLINIC IMAGE & MAP CONTAINER */}
            <div className="relative flex flex-col lg:col-span-7">
              {/* Image Preview Block */}
              <div className="relative h-64 sm:h-72 lg:h-1/2">
                <img
                  src={physio}
                  alt="L.E.A.P Physiotherapy Clinic in Gulshan, Dhaka"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="rounded bg-[#1D1AA9] px-2.5 py-1 text-xs font-bold uppercase tracking-wider">
                    L.E.A.P Facility
                  </span>
                  <p className="mt-1 text-sm font-semibold">
                    Clean, Modern & Fully Equipped Clinical Space
                  </p>
                </div>
              </div>

              {/* Google Map Embed Placeholder */}
              <div className="relative h-64 sm:h-72 lg:h-1/2">
                <iframe
                  title="L.E.A.P Physiotherapy Gulshan Dhaka Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.082531398863!2d90.4128!3d23.7808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ2JzUwLjkiTiA5M8KwMjQnNDYuMSJF!5e0!3m2!1sen!2sbd!4v1680000000000!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full grayscale transition-all hover:grayscale-0"
                />
              </div>
            </div>

            {/* RIGHT: LOCATION & ACCESSIBILITY DETAILS */}
            <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:p-10">
              <div>
                <h4 className="text-xl font-bold text-slate-900 sm:text-2xl">
                  Visit Our Gulshan Center
                </h4>
                <p className="mt-2 text-sm text-slate-600">
                  Easily accessible via major thoroughfares, with parking facilities and elevator access for pain or mobility-restricted patients.
                </p>

                {/* ADDRESS & HOURS LIST */}
                <div className="mt-6 space-y-4 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#1D1AA9]" aria-hidden="true" />
                    <div>
                      <strong className="block text-slate-900">Address:</strong>
                      <span>Gulshan-1, Dhaka-1212, Bangladesh</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="mt-1 h-5 w-5 shrink-0 text-[#61C33E]" aria-hidden="true" />
                    <div>
                      <strong className="block text-slate-900">Operating Hours:</strong>
                      <span>Open Daily: 9:00 AM – 9:00 PM</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <PhoneCall className="mt-1 h-5 w-5 shrink-0 text-[#1D1AA9]" aria-hidden="true" />
                    <div>
                      <strong className="block text-slate-900">Direct Contact:</strong>
                      <a
                        href="tel:+8801318588777"
                        className="font-bold text-[#1D1AA9] hover:underline"
                      >
                        +8801318588777
                      </a>
                    </div>
                  </div>
                </div>

                {/* SURROUNDING AREAS SERVED */}
                <div className="mt-8 border-t border-slate-200 pt-6">
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#1D1AA9]">
                    Nearby Neighborhoods Served
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {surroundingAreas.map((area) => (
                      <span
                        key={area}
                        className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
                      >
                        <Navigation className="h-3 w-3 text-[#61C33E]" aria-hidden="true" />
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#B30727] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#8C051E] focus:outline-none focus:ring-2 focus:ring-[#B30727]"
                >
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <span>Book Appointment</span>
                </button>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3.5 text-sm font-bold text-slate-700 transition hover:border-[#1D1AA9] hover:text-[#1D1AA9]"
                >
                  <span>Directions</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}