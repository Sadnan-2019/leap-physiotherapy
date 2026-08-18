import React from "react";
import {
  Dumbbell,
  Hand,
  Zap,
  Target,
  Sparkles,
  Activity,
  UserCheck,
  Compass,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function TreatmentTechniques() {
  const techniques = [
    {
      id: "therapeutic-exercise",
      title: "Therapeutic Exercise",
      subtitle: "Targeted Strength & Flexibility",
      icon: Dumbbell,
      description:
        "Customized movement protocols designed to restore joint function, improve endurance, and rebuild muscle strength safely following an injury or surgery.",
      benefits: ["Restores Mobility", "Prevents Re-Injury", "Builds Core Strength"],
    },
    {
      id: "manual-therapy",
      title: "Manual Therapy",
      subtitle: "Hands-On Joint & Tissue Mobilization",
      icon: Hand,
      description:
        "Skilled hands-on techniques, including joint mobilization and soft tissue release, performed by experienced physiotherapists to ease pain and reduce stiffness.",
      benefits: ["Reduces Joint Stiffness", "Relieves Muscle Tension", "Improves Blood Flow"],
    },
    {
      id: "electrotherapy",
      title: "Electrotherapy",
      subtitle: "Advanced Modalities for Pain Relief",
      icon: Zap,
      description:
        "Utilizing evidence-based modalities such as TENS, Ultrasound therapy, and IFT to accelerate tissue healing, soothe inflamed nerves, and manage acute pain.",
      benefits: ["Accelerates Tissue Healing", "Calms Inflamed Nerves", "Drug-Free Pain Relief"],
    },
    {
      id: "dry-needling",
      title: "Dry Needling",
      subtitle: "Myofascial Trigger Point Therapy",
      icon: Target,
      description:
        "Targeted insertion of fine needles directly into deep muscle trigger points (knots) to release chronic tension, improve blood circulation, and alleviate deep pain.",
      benefits: ["Releases Muscle Knots", "Rapid Pain Relief", "Restores Range of Motion"],
    },
    {
      id: "acupuncture",
      title: "Acupuncture",
      subtitle: "Holistic Pain & Neurological Care",
      icon: Sparkles,
      description:
        "Traditional therapeutic acupuncture integrated into modern physiotherapy services in Dhaka to promote natural nerve healing, circulation, and pain reduction.",
      benefits: ["Stimulates Nerve Recovery", "Reduces Chronic Inflammation", "Promotes Healing"],
    },
    {
      id: "mobility-strength-training",
      title: "Mobility & Strength Training",
      subtitle: "Functional Movement Recovery",
      icon: Activity,
      description:
        "Progressive conditioning focused on improving functional movement patterns, joint stability, and overall physical endurance for active daily living.",
      benefits: ["Enhances Joint Stability", "Improves Endurance", "Supports Active Living"],
    },
    {
      id: "posture-ergonomic-training",
      title: "Posture & Ergonomic Training",
      subtitle: "Spine Alignment & Desk Health",
      icon: UserCheck,
      description:
        "Practical alignment guidance and workplace ergonomic advice to correct postural habits and prevent chronic back and neck strain for corporate professionals.",
      benefits: ["Prevents Desk Strain", "Corrects Spine Alignment", "Long-term Relief"],
    },
    {
      id: "functional-rehabilitation",
      title: "Functional Rehabilitation",
      subtitle: "Task-Specific Recovery Programs",
      icon: Compass,
      description:
        "Specialized rehabilitation training simulating everyday movement tasks to ensure a smooth, safe transition back to work, sports, and independent living.",
      benefits: ["Task-Oriented Care", "Restores Independence", "Smoother Recovery"],
    },
  ];

  const scrollToForm = () => {
    document
      .getElementById("booking-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      aria-labelledby="treatment-techniques-title"
      className="py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ============================================================
            SECTION HEADER
        ============================================================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-[#1D1AA9]/20 px-4 py-1.5 text-xs font-bold text-[#1D1AA9] sm:text-sm">
            <Activity className="h-4 w-4 text-[#1D1AA9]" aria-hidden="true" />
            <span>Evidence-Based Clinical Modalities</span>
          </div>

          <h2
            id="treatment-techniques-title"
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Physiotherapy Treatment Techniques{" "}
            <span className="text-[#1D1AA9]">We Use</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            At L.E.A.P Physiotherapy Center in Gulshan, our experienced therapists 
            combine modern clinical equipment with hands-on modalities to deliver 
            effective, personalized physiotherapy treatment in Dhaka.
          </p>
        </div>

        {/* ============================================================
            TECHNIQUES GRID (4-Column Desktop / 2-Column Tablet)
        ============================================================= */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {techniques.map((item) => {
            const IconComponent = item.icon;
            return (
              <article
                key={item.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#1D1AA9]/40 hover:shadow-md"
              >
                <div>
                  {/* Icon Header */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[#1D1AA9]/15 bg-slate-50 transition-colors group-hover:bg-[#1D1AA9] group-hover:text-white">
                    <IconComponent
                      className="h-6 w-6 text-[#1D1AA9] transition-colors group-hover:text-white"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Subtitle */}
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1D1AA9]">
                    {item.subtitle}
                  </span>

                  {/* H3 Heading */}
                  <h3 className="mt-1 text-xl font-bold text-slate-900 transition-colors group-hover:text-[#1D1AA9]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>

                {/* Benefits List */}
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <ul className="space-y-1.5 text-xs font-medium text-slate-700">
                    {item.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2">
                        <CheckCircle2
                          className="h-3.5 w-3.5 shrink-0 text-[#61C33E]"
                          aria-hidden="true"
                        />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        {/* ============================================================
            BOTTOM CONSULTATION BANNER
        ============================================================= */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 md:flex-row">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-slate-900 sm:text-xl">
              Unsure which treatment technique fits your condition?
            </h4>
            <p className="mt-1 text-sm text-slate-600">
              Our clinical team in Gulshan conducts detailed assessments to design 
              a custom rehabilitation plan tailored to your body.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToForm}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#B30727] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#8C051E] focus:outline-none focus:ring-2 focus:ring-[#B30727] focus:ring-offset-2"
          >
            <span>Book Assessment</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}