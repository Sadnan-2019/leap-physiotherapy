import React from "react";
import {
  Activity,
  ArrowRight,
  Bone,
  Dumbbell,
  HeartPulse,
  PersonStanding,
  ShieldCheck,
  Zap,
} from "lucide-react";

import Tightnessmuscle from "../../assets/Tightness Of Muscle.jpg";
import Arthritis from "../../assets/Arthritis.avif";
import posturalsyndrome from "../../assets/posturalsyndrome.jpg";
import FrozenShoulder from "../../assets/Frozen Shoulder.webp";
import GolfersElbow from "../../assets/Golfers Elbow.jpg";
import LumberSpondylitis from "../../assets/Lumber Spondylitis.jpg";
import AcuteWryNeck from "../../assets/Acute Wry Neck.jfif";
import TennisElbow from "../../assets/Tennis Elbow.jpg";
import NerveProblem from "../../assets/Nerve Problem.jpeg";
import ReferredPain from "../../assets/Referred Pain.jpg";
import Osteoarthritis from "../../assets/Osteoarthritis.jpg";
import AnySportsInjury from "../../assets/Any Sports Injury.jpg";

import "./MedicalConditions.css";

const conditions = [
  {
    name: "Back Pain",
    description: "Physiotherapy for lower back pain, stiffness and movement problems.",
    icon: Activity,
    image: null,
    priority: "high",
  },
  {
    name: "Neck Pain",
    description: "Treatment for neck pain, stiffness and posture-related discomfort.",
    icon: PersonStanding,
    image: AcuteWryNeck,
    priority: "high",
  },
  {
    name: "Knee Pain",
    description: "Personalized physiotherapy for knee pain and mobility problems.",
    icon: Bone,
    image: null,
    priority: "high",
  },
  {
    name: "Shoulder Pain",
    description: "Rehabilitation for shoulder pain, stiffness and reduced movement.",
    icon: Activity,
    image: null,
    priority: "high",
  },
  {
    name: "Sciatica",
    description: "Physiotherapy for sciatic pain, nerve irritation and mobility issues.",
    icon: Zap,
    image: null,
    priority: "high",
  },
  {
    name: "Frozen Shoulder",
    description: "Targeted rehabilitation to improve shoulder movement and function.",
    icon: Bone,
    image: FrozenShoulder,
    priority: "high",
  },
  {
    name: "Arthritis",
    description: "Exercise-based physiotherapy to improve mobility and manage joint pain.",
    icon: Bone,
    image: Arthritis,
    priority: "high",
  },
  {
    name: "Sports Injuries",
    description: "Sports injury rehabilitation to help restore strength and movement.",
    icon: Dumbbell,
    image: AnySportsInjury,
    priority: "high",
  },
  {
    name: "Osteoarthritis",
    description: "Physiotherapy to support joint mobility, strength and daily function.",
    icon: Bone,
    image: Osteoarthritis,
    priority: "medium",
  },
  {
    name: "Tennis Elbow",
    description: "Rehabilitation for elbow pain caused by overuse and repetitive strain.",
    icon: Activity,
    image: TennisElbow,
    priority: "medium",
  },
  {
    name: "Golfer's Elbow",
    description: "Physiotherapy for inner elbow pain and repetitive strain injuries.",
    icon: Activity,
    image: GolfersElbow,
    priority: "medium",
  },
  {
    name: "ACL Injury",
    description: "Rehabilitation focused on strength, stability and safe return to activity.",
    icon: Dumbbell,
    image: null,
    priority: "medium",
  },
  {
    name: "Muscle Tightness",
    description: "Treatment to improve flexibility, movement and muscle function.",
    icon: Activity,
    image: Tightnessmuscle,
    priority: "medium",
  },
  {
    name: "Postural Problems",
    description: "Physiotherapy for posture-related pain, stiffness and movement issues.",
    icon: PersonStanding,
    image: posturalsyndrome,
    priority: "medium",
  },
  {
    name: "Lumbar Spondylitis",
    description: "Physiotherapy focused on reducing pain and improving lower-back mobility.",
    icon: Bone,
    image: LumberSpondylitis,
    priority: "medium",
  },
  {
    name: "Nerve Problems",
    description: "Rehabilitation for nerve-related pain, weakness and movement difficulties.",
    icon: Zap,
    image: NerveProblem,
    priority: "medium",
  },
  {
    name: "Acute Wry Neck",
    description: "Physiotherapy to improve painful neck stiffness and movement.",
    icon: PersonStanding,
    image: AcuteWryNeck,
    priority: "low",
  },
  {
    name: "Referred Pain",
    description: "Assessment and physiotherapy for pain felt away from its source.",
    icon: HeartPulse,
    image: ReferredPain,
    priority: "low",
  },
];

const MedicalConditions = () => {
  return (
    <section
      className="conditions bg-white py-16 lg:py-20"
      aria-labelledby="conditions-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <div
          className="mx-auto mb-10 max-w-3xl text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#034ca7]">
            <ShieldCheck size={17} />
            Personalized Physiotherapy Care
          </span>

          <h2
            id="conditions-heading"
            className="font-poppins text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Conditions We Treat at{" "}
            <span className="bg-gradient-to-r from-[#034ca7] to-[#2622B7] bg-clip-text text-transparent">
              L.E.A.P Physiotherapy
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Our physiotherapists provide personalized treatment and
            rehabilitation for pain, injuries, mobility problems, and
            neurological conditions in Gulshan, Dhaka.
          </p>
        </div>

        {/* High-Intent Conditions */}
        <div className="mb-10">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                Common Conditions We Treat
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Physiotherapy for pain, injuries and movement problems
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {conditions
              .filter((condition) => condition.priority === "high")
              .map((condition, index) => {
                const Icon = condition.icon;

                return (
                  <article
                    key={condition.name}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#034ca7] transition-colors group-hover:bg-[#034ca7] group-hover:text-white">
                        <Icon size={22} strokeWidth={1.8} />
                      </div>

                      <ArrowRight
                        size={18}
                        className="text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-[#034ca7]"
                      />
                    </div>

                    <h4 className="text-lg font-bold text-slate-900">
                      {condition.name}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {condition.description}
                    </p>

                    <button
                      type="button"
                      className="mt-4 text-sm font-semibold text-[#034ca7]"
                      aria-label={`Learn more about ${condition.name} physiotherapy`}
                    >
                      Learn More
                    </button>
                  </article>
                );
              })}
          </div>
        </div>

        {/* Additional Conditions */}
        <div>
          <div className="mb-5">
            <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Other Conditions We Treat
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Specialized physiotherapy for additional musculoskeletal and
              movement-related conditions
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {conditions
              .filter((condition) => condition.priority !== "high")
              .map((condition) => (
                <span
                  key={condition.name}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-[#034ca7]"
                >
                  {condition.name}
                </span>
              ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-sm text-slate-500">
            Not sure which physiotherapy treatment is right for you?
          </p>

          <a
            href="/appointment"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#034ca7] to-[#2622B7] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Book a Physiotherapy Assessment
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MedicalConditions;