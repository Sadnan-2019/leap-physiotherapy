import React from "react";
import {
  ClipboardCheck,
  FileText,
  Activity,
  LineChart,
  Home,
  ArrowRight,
  CheckCircle2,
  Calendar,
} from "lucide-react";

export default function TreatmentProcess() {
  const scrollToForm = () => {
    document
      .getElementById("booking-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const steps = [
    {
      step: "01",
      id: "initial-assessment",
      title: "Step 1 — Initial Assessment",
      subtitle: "Detailed Clinical Evaluation",
      icon: ClipboardCheck,
      description:
        "Your recovery starts with a thorough physical assessment. Our experienced physiotherapists evaluate your posture, range of motion, pain history, and joint mobility to pinpoint the root cause.",
      keyPoint: "Root-cause diagnosis",
    },
    {
      step: "02",
      id: "treatment-plan",
      title: "Step 2 — Personalized Treatment Plan",
      subtitle: "Tailored Strategy Design",
      icon: FileText,
      description:
        "Based on your diagnosis, we design a customized treatment plan. This includes targeted modalities, manual therapy, and movement exercises suited to your recovery timeline.",
      keyPoint: "Goal-oriented planning",
    },
    {
      step: "03",
      id: "physiotherapy-rehab",
      title: "Step 3 — Physiotherapy & Rehabilitation",
      subtitle: "Active Clinical Care",
      icon: Activity,
      description:
        "Execute your structured therapy sessions at our physiotherapy center in Gulshan using evidence-based techniques, advanced modalities, and hands-on manual therapy.",
      keyPoint: "Supervised clinical sessions",
    },
    {
      step: "04",
      id: "progress-monitoring",
      title: "Step 4 — Progress Monitoring",
      subtitle: "Milestone Tracking",
      icon: LineChart,
      description:
        "We continuously measure your mobility gains and pain reduction after each session, fine-tuning your rehabilitation program to ensure consistent, measurable improvement.",
      keyPoint: "Regular re-evaluation",
    },
    {
      step: "05",
      id: "home-exercise",
      title: "Step 5 — Home Exercise & Recovery",
      subtitle: "Long-Term Prevention",
      icon: Home,
      description:
        "To sustain your physical gains, we empower you with ergonomic advice and an easy-to-follow home exercise routine to prevent re-injury and support long-term wellness.",
      keyPoint: "Sustained long-term health",
    },
  ];

  return (
    <section
      aria-labelledby="treatment-process-title"
      className="py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ============================================================
            SECTION HEADER
        ============================================================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-[#1D1AA9]/20 px-4 py-1.5 text-xs font-bold text-[#1D1AA9] sm:text-sm">
            <Activity className="h-4 w-4 text-[#1D1AA9]" aria-hidden="true" />
            <span>Structured Clinical Pathway</span>
          </div>

          <h2
            id="treatment-process-title"
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            How Physiotherapy Treatment Works at{" "}
            <span className="text-[#1D1AA9]">L.E.A.P</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            We guide you through a transparent, 5-step clinical journey designed 
            to address your specific pain condition and ensure long-term physical recovery in Dhaka.
          </p>
        </div>

        {/* ============================================================
            DESKTOP TIMELINE (Horizontal 5-Step Layout)
        ============================================================= */}
        <div className="relative mt-16 hidden lg:block">
          {/* Connector Line across top of cards */}
          <div
            aria-hidden="true"
            className="absolute left-8 right-8 top-12 h-0.5 bg-slate-200"
          />

          <div className="grid grid-cols-5 gap-4">
            {steps.map((item) => {
              const IconComponent = item.icon;
              return (
                <article
                  key={item.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#1D1AA9]/40 hover:shadow-md"
                >
                  <div>
                    {/* Step Badge & Icon */}
                    <div className="relative z-10 mb-4 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#1D1AA9]/20 bg-slate-50 transition-colors group-hover:bg-[#1D1AA9] group-hover:text-white">
                        <IconComponent
                          className="h-6 w-6 text-[#1D1AA9] transition-colors group-hover:text-white"
                          aria-hidden="true"
                        />
                      </div>
                      <span className="text-xl font-extrabold text-slate-300 transition-colors group-hover:text-[#1D1AA9]">
                        {item.step}
                      </span>
                    </div>

                    {/* Subtitle */}
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D1AA9]">
                      {item.subtitle}
                    </span>

                    {/* H3 Heading */}
                    <h3 className="mt-1 text-base font-bold text-slate-900 transition-colors group-hover:text-[#1D1AA9]">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>

                  {/* Key Point Badge */}
                  <div className="mt-4 border-t border-slate-100 pt-3">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700">
                      <CheckCircle2
                        className="h-3.5 w-3.5 shrink-0 text-[#61C33E]"
                        aria-hidden="true"
                      />
                      {item.keyPoint}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* ============================================================
            MOBILE & TABLET TIMELINE (Vertical Stack Layout)
        ============================================================= */}
        <div className="relative mt-12 space-y-6 lg:hidden">
          {/* Vertical Connector Line */}
          <div
            aria-hidden="true"
            className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-200"
          />

          {steps.map((item) => {
            const IconComponent = item.icon;
            return (
              <article
                key={item.id}
                className="relative flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-[#1D1AA9]/40"
              >
                {/* Timeline Icon Node */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#1D1AA9]/20 bg-slate-50 text-[#1D1AA9]">
                  <IconComponent className="h-6 w-6" aria-hidden="true" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1D1AA9]">
                      {item.subtitle}
                    </span>
                    <span className="text-sm font-extrabold text-slate-400">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="mt-0.5 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700">
                    <CheckCircle2
                      className="h-3.5 w-3.5 text-[#61C33E]"
                      aria-hidden="true"
                    />
                    <span>{item.keyPoint}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ============================================================
            CTA BOTTOM BAR
        ============================================================= */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 md:flex-row">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-slate-900 sm:text-xl">
              Take Step 1 towards painless movement
            </h4>
            <p className="mt-1 text-sm text-slate-600">
              Schedule an initial physical evaluation with our physiotherapists in Gulshan.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToForm}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#B30727] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#8C051E] focus:outline-none focus:ring-2 focus:ring-[#B30727] focus:ring-offset-2"
          >
            <Calendar className="h-4 w-4" aria-hidden="true" />
            <span>Book Initial Assessment</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}