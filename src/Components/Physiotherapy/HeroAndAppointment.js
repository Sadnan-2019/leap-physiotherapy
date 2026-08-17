import React, { useState } from "react";
import physio from "../../assets/Physio.jpg";
import {
  Star,
  ShieldCheck,
  Users,
  PhoneCall,
  Calendar,
  CheckCircle2,
  MapPin,
  Clock,
  ArrowRight,
  Activity,
  MessageCircle,
} from "lucide-react";

export default function HeroAndAppointment() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    date: "",
    time: "",
    concern: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Request:", formData);
    setFormSubmitted(true);
  };

  const scrollToForm = () => {
    document
      .getElementById("booking-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNewAppointment = () => {
    setFormSubmitted(false);
    setFormData({
      fullName: "",
      phone: "",
      date: "",
      time: "",
      concern: "",
    });
  };

  return (
    <div className="bg-white font-sans text-slate-900 antialiased">
      {/* ================================================================
          HERO SECTION (CLEAN LIGHT BACKGROUND)
      ================================================================= */}
      <section
        aria-labelledby="physiotherapy-hero-title"
        className="relative overflow-hidden py-8 sm:py-12 lg:py-16"
      >
        {/* Soft Accent Gradients */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#1D1AA9]/5 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-[#61C33E]/10 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* ============================================================
              LOCATION / BUSINESS INFORMATION BAR
          ============================================================= */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
            <div className="flex items-center gap-2 rounded-full bg-[#1D1AA9]/10 px-4 py-1.5 text-xs font-bold text-[#1D1AA9] sm:text-sm">
              <MapPin className="h-4 w-4 shrink-0 text-[#1D1AA9]" aria-hidden="true" />
              <span>Gulshan-1, Dhaka | L.E.A.P Physiotherapy & Rehabilitation</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 sm:text-sm">
              <Clock className="h-4 w-4 shrink-0 text-[#61C33E]" aria-hidden="true" />
              <span>Open Daily: 9:00 AM – 9:00 PM</span>
            </div>
          </div>

          {/* ============================================================
              HERO GRID
          ============================================================= */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* LEFT CONTENT */}
            <div className="space-y-6 lg:col-span-7">
              {/* INTENT BADGE */}
              <div className="inline-flex items-center gap-2 rounded-full bg-[#61C33E]/15 px-4 py-1.5 text-xs font-bold text-[#2d6e19] sm:text-sm">
                <Activity className="h-4 w-4 text-[#61C33E]" aria-hidden="true" />
                <span>Physiotherapy & Rehabilitation Care in Gulshan</span>
              </div>

              {/* PRIMARY H1 */}
              <h1
                id="physiotherapy-hero-title"
                className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl"
              >
                Physiotherapy & Rehabilitation Center in{" "}
                <span className="text-[#1D1AA9]">Gulshan, Dhaka</span>
              </h1>

              {/* Supporting Copy */}
              <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Get personalized physiotherapy and rehabilitation care for back
                pain, sciatica, neck pain, joint pain, sports injuries, stroke
                recovery, and post-surgical rehabilitation.
              </p>

              {/* TRUST SIGNALS */}
              <div className="my-5 grid grid-cols-1 gap-3 border-y border-slate-200 py-4 sm:grid-cols-3">
                {/* Rating */}
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <Star
                    className="h-5 w-5 shrink-0 fill-[#DED312] text-[#DED312]"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="text-slate-900">5.0/5</strong> Patient Rating
                  </span>
                </div>

                {/* Patient Reviews */}
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <Users
                    className="h-5 w-5 shrink-0 text-[#1D1AA9]"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="text-slate-900">Trusted Care</strong>
                  </span>
                </div>

                {/* Evidence-Based Care */}
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <ShieldCheck
                    className="h-5 w-5 shrink-0 text-[#61C33E]"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="text-slate-900">Evidence-Based</strong> Care
                  </span>
                </div>
              </div>

              {/* HERO CTA BUTTONS */}
              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
                {/* PRIMARY CTA */}
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B30727] px-7 py-3.5 font-bold text-white shadow-lg shadow-[#B30727]/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#8C051E] focus:outline-none focus:ring-2 focus:ring-[#B30727] focus:ring-offset-2"
                >
                  <Calendar className="h-5 w-5" aria-hidden="true" />
                  <span>Book a Consultation</span>
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </button>

                {/* SECONDARY CTA */}
                <a
                  href="tel:+8801318588777"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#1D1AA9] bg-white px-6 py-3.5 font-bold text-[#1D1AA9] transition-all duration-200 hover:bg-[#1D1AA9] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#1D1AA9]"
                >
                  <PhoneCall className="h-5 w-5" aria-hidden="true" />
                  <span>Call +8801318588777</span>
                </a>
              </div>

              {/* BENEFIT CHECKLIST */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-xs font-semibold text-slate-700 sm:text-sm">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2
                    className="h-4 w-4 shrink-0 text-[#61C33E]"
                    aria-hidden="true"
                  />
                  <span>Personalized Treatment Plans</span>
                </span>

                <span className="flex items-center gap-1.5">
                  <CheckCircle2
                    className="h-4 w-4 shrink-0 text-[#61C33E]"
                    aria-hidden="true"
                  />
                  <span>Experienced Physiotherapy Team</span>
                </span>

                <span className="flex items-center gap-1.5">
                  <CheckCircle2
                    className="h-4 w-4 shrink-0 text-[#61C33E]"
                    aria-hidden="true"
                  />
                  <span>Modern Equipment</span>
                </span>
              </div>

              {/* CONDITION BADGES */}
              <div className="pt-2">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#1D1AA9]">
                  Physiotherapy for Common Conditions
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Back Pain & Sciatica",
                    "Neck & Shoulder Pain",
                    "Knee & Joint Pain",
                    "Sports Injuries",
                    "Stroke & Paralysis",
                    "Post-Surgical Rehabilitation",
                  ].map((condition) => (
                    <span
                      key={condition}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:border-[#1D1AA9] hover:text-[#1D1AA9]"
                    >
                      {condition}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE — CLEAN IMAGE DISPLAY */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-xl">
                <div className="relative h-80 overflow-hidden rounded-xl bg-slate-100 sm:h-[430px]">
                  <img
                    src={physio}
                    alt="Physiotherapy treatment at L.E.A.P Physiotherapy Center"
                    className="h-full w-full object-cover"
                    loading="eager"
                  />

                  {/* Gradient overlay for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                  {/* FLOATING IMAGE BADGE CARD */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-white/95 p-4 shadow-xl backdrop-blur-md">
                    <div className="mb-1 flex items-center gap-2">
                      <Activity className="h-4 w-4 text-[#61C33E]" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-[#1D1AA9]">
                        Personalized Rehabilitation
                      </p>
                    </div>

                    <p className="text-xs font-medium leading-relaxed text-slate-700 sm:text-sm">
                      Comprehensive care for pain management, mobility recovery,
                      and rehabilitation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          APPOINTMENT FORM SECTION
      ================================================================= */}
      <section
        id="booking-form"
        aria-labelledby="appointment-title"
        className="relative z-20 mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-xl sm:p-8 lg:p-10">
          {/* FORM HEADER */}
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#1D1AA9]/10">
              <Calendar className="h-6 w-6 text-[#1D1AA9]" aria-hidden="true" />
            </div>

            <h2
              id="appointment-title"
              className="text-2xl font-extrabold text-slate-900 sm:text-3xl"
            >
              Book a Physiotherapy Appointment
            </h2>

            <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
              Tell us about your condition and preferred appointment time. Our
              team will reach out to confirm.
            </p>
          </div>

          {/* FORM STATES */}
          {formSubmitted ? (
            /* SUCCESS STATE BADGE CONTAINER */
            <div
              role="status"
              aria-live="polite"
              className="rounded-xl border border-[#61C33E] bg-[#61C33E]/10 p-8 text-center"
            >
              <CheckCircle2 className="mx-auto h-14 w-14 text-[#61C33E]" aria-hidden="true" />

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Appointment Request Received
              </h3>

              <p className="mx-auto mt-2 max-w-xl text-sm font-medium leading-relaxed text-slate-700">
                Thank you, <strong>{formData.fullName || "Patient"}</strong>. Our
                team will contact you at <strong>{formData.phone}</strong> to
                confirm your appointment details.
              </p>

              <button
                type="button"
                onClick={handleNewAppointment}
                className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#1D1AA9] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1D1AA9]/90 focus:outline-none focus:ring-2 focus:ring-[#1D1AA9]"
              >
                Request Another Appointment
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* INPUT FIELDS GRID */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700"
                  >
                    Full Name <span className="text-[#B30727]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Tanvir Ahmed"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1D1AA9] focus:ring-2 focus:ring-[#1D1AA9]/20"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700"
                  >
                    Phone Number <span className="text-[#B30727]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="017XXXXXXXX"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1D1AA9] focus:ring-2 focus:ring-[#1D1AA9]/20"
                  />
                </div>

                {/* Preferred Date */}
                <div>
                  <label
                    htmlFor="date"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700"
                  >
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1D1AA9] focus:ring-2 focus:ring-[#1D1AA9]/20"
                  />
                </div>

                {/* Preferred Time */}
                <div>
                  <label
                    htmlFor="time"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700"
                  >
                    Preferred Time
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1D1AA9] focus:ring-2 focus:ring-[#1D1AA9]/20"
                  >
                    <option value="">Select preferred time</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
                </div>

                {/* Area of Concern */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="concern"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700"
                  >
                    Area of Concern / Condition{" "}
                    <span className="text-[#B30727]">*</span>
                  </label>
                  <select
                    id="concern"
                    name="concern"
                    required
                    value={formData.concern}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1D1AA9] focus:ring-2 focus:ring-[#1D1AA9]/20"
                  >
                    <option value="" disabled>
                      Select your concern
                    </option>
                    <option value="Back Pain / Sciatica / PLID">
                      Back Pain / Sciatica / PLID
                    </option>
                    <option value="Neck Pain">Neck Pain</option>
                    <option value="Shoulder Pain / Frozen Shoulder">
                      Shoulder Pain / Frozen Shoulder
                    </option>
                    <option value="Knee & Joint Pain / Arthritis">
                      Knee & Joint Pain / Arthritis
                    </option>
                    <option value="Sports Injury">Sports Injury</option>
                    <option value="Stroke & Paralysis Rehabilitation">
                      Stroke & Paralysis Rehabilitation
                    </option>
                    <option value="Neurological Rehabilitation">
                      Neurological Rehabilitation
                    </option>
                    <option value="Post-Surgical Rehabilitation">
                      Post-Surgical Rehabilitation
                    </option>
                    <option value="Foot & Ankle Pain">Foot & Ankle Pain</option>
                    <option value="Acupuncture / Dry Needling">
                      Acupuncture / Dry Needling
                    </option>
                    <option value="Other / General Consultation">
                      Other / General Consultation
                    </option>
                  </select>
                </div>
              </div>

              {/* FORM SUBMIT CTA */}
              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#B30727] px-10 py-4 font-bold text-white shadow-lg shadow-[#B30727]/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#8C051E] focus:outline-none focus:ring-2 focus:ring-[#B30727] focus:ring-offset-2 sm:w-auto"
                >
                  <Calendar className="h-5 w-5" aria-hidden="true" />
                  <span>Request a Physiotherapy Appointment</span>
                </button>

                <p className="mt-3 text-xs font-medium text-slate-500">
                  Your information is used only to respond to your appointment
                  request.
                </p>
              </div>

              {/* DIRECT CONTACT OPTIONS */}
              <div className="border-t border-slate-200 pt-6">
                <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
                  <span className="text-sm font-medium text-slate-600">
                    Prefer to contact us directly?
                  </span>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href="tel:+8801318588777"
                      className="inline-flex items-center gap-2 rounded-lg bg-white border border-slate-200 px-4 py-2 text-sm font-bold text-[#1D1AA9] transition hover:bg-[#1D1AA9] hover:text-white"
                    >
                      <PhoneCall className="h-4 w-4" aria-hidden="true" />
                      <span>Call Us</span>
                    </a>

                    <a
                      href="https://wa.me/8801318588777"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#61C33E]/10 px-4 py-2 text-sm font-bold text-[#205210] transition hover:bg-[#61C33E] hover:text-white"
                    >
                      <MessageCircle className="h-4 w-4 text-[#61C33E]" aria-hidden="true" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}