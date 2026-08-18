import React from "react";
import {
  Activity,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Stethoscope,
  HeartPulse,
} from "lucide-react";

export default function ConditionsSection() {
  const conditions = [
    {
      id: "back-pain",
      title: "Back Pain & Sciatica / PLID Care",
      subtitle: "Spine & Lumbar Rehabilitation",
      description:
        "Comprehensive physiotherapy for back pain, herniated discs (PLID), sciatica, and chronic lower back stiffness. Treatments focus on spinal decompression, posture correction, and core strengthening.",
      tags: ["PLID Care", "Sciatica Relief", "Spine Rehabilitation"],
    },
    {
      id: "neck-pain",
      title: "Neck Pain & Cervical Care",
      subtitle: "Posture & Tension Relief",
      description:
        "Targeted physiotherapy for neck pain, cervical spondylosis, stiffness, and posture-induced strain. Manual therapy and targeted exercises help restore cervical mobility and relieve pain.",
      tags: ["Cervical Spondylosis", "Posture Correction", "Stiff Neck"],
    },
    {
      id: "knee-pain",
      title: "Knee Pain & Osteoarthritis",
      subtitle: "Joint Mobility & Strength",
      description:
        "Specialized physiotherapy for knee pain, ligament strains, and knee osteoarthritis. Customized exercises help improve joint stability, reduce inflammation, and enhance daily mobility.",
      tags: ["Knee Osteoarthritis", "Ligament Recovery", "Joint Stability"],
    },
    {
      id: "shoulder-pain",
      title: "Shoulder Pain & Frozen Shoulder",
      subtitle: "Rotator Cuff & Range of Motion",
      description:
        "Physiotherapy treatment for frozen shoulder, rotator cuff tendonitis, and shoulder impingement. Focused joint mobilization helps restore painless arm overhead movements.",
      tags: ["Frozen Shoulder", "Rotator Cuff", "Mobility Rehab"],
    },
    {
      id: "arthritis-joint-pain",
      title: "Arthritis & Joint Pain Management",
      subtitle: "Chronic Pain & Joint Health",
      description:
        "Evidence-based pain management physiotherapy for rheumatoid arthritis, osteoarthritis, and chronic joint degeneration. Helps maintain flexibility and reduce stiffness without unnecessary fatigue.",
      tags: ["Rheumatoid Care", "Joint Stiffness", "Pain Management"],
    },
    {
      id: "sports-injuries",
      title: "Sports Injury Rehabilitation",
      subtitle: "Athlete Recovery & Performance",
      description:
        "Advanced sports injury physiotherapy for sprains, muscle tears, ACL recovery, and runner's knee. Focused on safe recovery, strength rebuilding, and preventing future sports injuries.",
      tags: ["ACL Recovery", "Sprains & Strains", "Athlete Rehab"],
    },
    {
      id: "stroke-paralysis",
      title: "Stroke & Paralysis Recovery",
      subtitle: "Neuro Rehabilitation & Mobility",
      description:
        "Compassionate stroke rehabilitation in Dhaka helping patients regain muscle strength, balance, coordination, and independence following a stroke, hemiplegia, or facial paralysis.",
      tags: ["Stroke Recovery", "Hemiplegia Care", "Gait Training"],
    },
    {
      id: "neurological-conditions",
      title: "Neurological Rehabilitation",
      subtitle: "Nerve & Motor Movement Care",
      description:
        "Specialized neurological rehabilitation for nerve compression, neuropathy, Parkinson's disease, and motor coordination challenges to improve balance and daily functional independence.",
      tags: ["Nerve Compression", "Neuropathy", "Balance Training"],
    },
    {
      id: "foot-ankle-pain",
      title: "Foot & Ankle Pain Relief",
      subtitle: "Plantars, Sprains & Biomechanics",
      description:
        "Focused therapy for plantar fasciitis, Achilles tendonitis, and repetitive ankle sprains. Combines foot biomechanics correction, stretching, and strengthening for lasting pain relief.",
      tags: ["Plantar Fasciitis", "Ankle Sprain", "Achilles Tendonitis"],
    },
    {
      id: "work-related-injuries",
      title: "Work-Related Ergonomic Injuries",
      subtitle: "Desk Posture & Repetitive Strain",
      description:
        "Targeted care for desk-job ergonomics, carpal tunnel syndrome, repetitive strain injuries (RSI), and postural fatigue experienced by working professionals in Gulshan and Dhaka.",
      tags: ["RSI Care", "Carpal Tunnel", "Ergonomic Rehab"],
    },
  ];

  const scrollToForm = () => {
    document
      .getElementById("booking-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      aria-labelledby="conditions-treated-title"
      className="py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ============================================================
            SECTION HEADER
        ============================================================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-[#61C33E]/40 px-4 py-1.5 text-xs font-bold text-[#2d6e19] sm:text-sm">
            <Activity className="h-4 w-4 text-[#61C33E]" aria-hidden="true" />
            <span>Comprehensive Clinical Care</span>
          </div>

          <h2
            id="conditions-treated-title"
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Conditions We Treat With{" "}
            <span className="text-[#1D1AA9]">Physiotherapy in Dhaka</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Our experienced team at L.E.A.P Physiotherapy Center in Gulshan
            provides personalized, evidence-based care tailored to your unique
            recovery goals and daily lifestyle.
          </p>
        </div>

        {/* ============================================================
            CONDITIONS GRID (2-Column on Desktop)
        ============================================================= */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {conditions.map((item) => (
            <article
              key={item.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#1D1AA9]/40 hover:shadow-md sm:p-8"
            >
              <div>
                {/* Header Tag */}
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1D1AA9]">
                    {item.subtitle}
                  </span>
                  <Stethoscope
                    className="h-5 w-5 text-[#1D1AA9]/40 transition-colors group-hover:text-[#1D1AA9]"
                    aria-hidden="true"
                  />
                </div>

                {/* H3 Heading */}
                <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-[#1D1AA9] sm:text-2xl">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {item.description}
                </p>
              </div>

              {/* Tag Badges & Action */}
              <div className="mt-6 border-t border-slate-100 pt-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1D1AA9] transition group-hover:text-[#B30727]"
                  >
                    <span>Book Care</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ============================================================
            BOTTOM HIGHLIGHT CARD
        ============================================================= */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center sm:p-8 md:flex md:items-center md:justify-between md:text-left">
          <div className="max-w-2xl">
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <HeartPulse
                className="h-5 w-5 text-[#61C33E]"
                aria-hidden="true"
              />
              <span className="text-xs font-bold uppercase tracking-wider text-[#1D1AA9]">
                Post-Surgical & Specialized Rehabilitation
              </span>
            </div>

            <h4 className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">
              Recovering from recent orthopedic surgery or complex injury?
            </h4>

            <p className="mt-1 text-sm text-slate-600">
              We offer structured post-surgical rehabilitation and pain
              management physiotherapy tailored to accelerate safe recovery.
            </p>
          </div>

          <div className="mt-6 shrink-0 md:mt-0">
            <button
              type="button"
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B30727] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#8C051E] focus:outline-none focus:ring-2 focus:ring-[#B30727] focus:ring-offset-2"
            >
              <span>Consult Our Physiotherapists</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}