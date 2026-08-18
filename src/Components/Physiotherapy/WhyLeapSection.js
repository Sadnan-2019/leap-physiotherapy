import React from "react";
import {
  UserCheck,
  FileSpreadsheet,
  ShieldCheck,
  HeartHandshake,
  Activity,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function WhyLeapSection() {
  const scrollToForm = () => {
    document
      .getElementById("booking-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const trustCards = [
    {
      id: "experienced-professionals",
      title: "Experienced Physiotherapy Professionals",
      icon: UserCheck,
      description:
        "Our skilled team of physiotherapists brings extensive clinical expertise in treating complex back pain, joint stiffness, sports injuries, and neurological conditions in Dhaka.",
      highlights: ["Qualified Specialists", "Hands-On Care", "Clinical Expertise"],
    },
    {
      id: "personalized-plans",
      title: "Personalized Treatment Plans",
      icon: FileSpreadsheet,
      description:
        "We do not offer generic routines. Every therapy program is tailored specifically to your physical evaluation, body mechanics, severity of pain, and daily routine.",
      highlights: ["1-on-1 Consultations", "Custom Workouts", "Tailored Care"],
    },
    {
      id: "evidence-based",
      title: "Evidence-Based Physiotherapy",
      icon: ShieldCheck,
      description:
        "We utilize proven, internationally recognized rehabilitation methodologies and clinical modalities to ensure safe, effective pain management and healing.",
      highlights: ["Modern Modalities", "Proven Methods", "Safe Practices"],
    },
    {
      id: "patient-centered",
      title: "Patient-Centered Care",
      icon: HeartHandshake,
      description:
        "Your comfort and active understanding of your recovery are our top priorities. We listen attentively to your concerns and guide you through every step of therapy.",
      highlights: ["Empathetic Team", "Clear Communication", "Comfort First"],
    },
    {
      id: "functional-recovery",
      title: "Focus on Functional Recovery",
      icon: Activity,
      description:
        "Our primary objective goes beyond temporary pain relief—we aim to restore your full mobility, flexibility, and physical independence for daily living and work.",
      highlights: ["Mobility Restored", "Daily Independence", "Long-term Function"],
    },
    {
      id: "progress-focused",
      title: "Progress-Focused Rehabilitation",
      icon: TrendingUp,
      description:
        "We systematically track your mobility improvements and strength milestones session by session, making necessary adjustments to keep your recovery moving forward.",
      highlights: ["Milestone Tracking", "Measurable Results", "Adjusted Care"],
    },
  ];

  return (
    <section
      aria-labelledby="why-leap-title"
      className="py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ============================================================
            SECTION HEADER
        ============================================================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-[#1D1AA9]/20 px-4 py-1.5 text-xs font-bold text-[#1D1AA9] sm:text-sm">
            <ShieldCheck className="h-4 w-4 text-[#1D1AA9]" aria-hidden="true" />
            <span>Dedicated Clinical Care</span>
          </div>

          <h2
            id="why-leap-title"
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Why Choose{" "}
            <span className="text-[#1D1AA9]">
              L.E.A.P Physiotherapy & Rehabilitation
            </span>
            ?
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            At our physiotherapy clinic in Gulshan, we prioritize high-quality,
            ethical patient care, combining clinical experience with 
            personalized rehabilitation programs designed around your goals.
          </p>
        </div>

        {/* ============================================================
            6 TRUST CARDS GRID
        ============================================================= */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {trustCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <article
                key={card.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#1D1AA9]/40 hover:shadow-md sm:p-8"
              >
                <div>
                  {/* Icon Header */}
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#1D1AA9]/15 bg-slate-50 transition-colors group-hover:bg-[#1D1AA9] group-hover:text-white">
                    <IconComponent
                      className="h-6 w-6 text-[#1D1AA9] transition-colors group-hover:text-white"
                      aria-hidden="true"
                    />
                  </div>

                  {/* H3 Heading */}
                  <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-[#1D1AA9]">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {card.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {card.highlights.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
                      >
                        <CheckCircle2
                          className="h-3 w-3 text-[#61C33E]"
                          aria-hidden="true"
                        />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ============================================================
            BOTTOM BANNER
        ============================================================= */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 md:flex-row">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-slate-900 sm:text-xl">
              Ready to begin your recovery journey?
            </h4>
            <p className="mt-1 text-sm text-slate-600">
              Consult with our experienced physiotherapists in Gulshan for a 
              thorough evaluation and personalized treatment plan.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToForm}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#B30727] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#8C051E] focus:outline-none focus:ring-2 focus:ring-[#B30727] focus:ring-offset-2"
          >
            <span>Book Consultation</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}