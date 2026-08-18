import React, { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  Calendar,
  PhoneCall,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToForm = () => {
    document
      .getElementById("booking-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const faqs = [
    {
      id: "faq-1",
      question: "What conditions can physiotherapy treat?",
      answer:
        "Physiotherapy treats a wide range of conditions, including lower back pain, sciatica, herniated discs (PLID), neck stiffness, frozen shoulder, knee osteoarthritis, sports injuries, and post-surgical rehabilitation. We also offer specialized neurological rehabilitation for stroke recovery and nerve-related mobility challenges.",
    },
    {
      id: "faq-2",
      question: "How does physiotherapy help with pain?",
      answer:
        "Physiotherapy helps reduce pain by addressing its root cause rather than just masking symptoms. Through a combination of manual therapy, targeted therapeutic exercises, joint mobilization, and evidence-based electrotherapy, treatment reduces inflammation, improves blood circulation, releases muscle tension, and restores proper movement mechanics.",
    },
    {
      id: "faq-3",
      question: "Do I need a doctor's referral for physiotherapy?",
      answer:
        "No, a doctor's referral is not strictly required to book an initial assessment at our clinic. You can directly consult our experienced physiotherapists in Gulshan. However, if you already have medical reports, X-rays, or prescriptions from an orthopedic specialist or neurologist, please bring them to your first session for review.",
    },
    {
      id: "faq-4",
      question: "How many physiotherapy sessions might I need?",
      answer:
        "The number of sessions depends on the severity of your condition, how long you have experienced pain, and your overall health. Minor muscle strains or acute joint stiffness may improve within 3 to 6 sessions, while chronic back pain, post-surgical rehabilitation, or stroke recovery may require structured 4 to 12-week care plans.",
    },
    {
      id: "faq-5",
      question: "Is physiotherapy suitable for chronic pain?",
      answer:
        "Yes, pain management physiotherapy is highly effective for chronic conditions such as long-term back pain, arthritis, and persistent joint stiffness. Our therapists use low-impact therapeutic exercises, gentle joint mobilization, and posture retraining to gradually desensitize pain responses and rebuild joint strength.",
    },
    {
      id: "faq-6",
      question: "Can physiotherapy help after surgery?",
      answer:
        "Physiotherapy is essential for post-surgical rehabilitation. Whether you have undergone joint replacement, ligament repair (such as ACL surgery), or spine surgery, structured post-operative therapy helps prevent scar tissue stiffness, regains joint range of motion, and rebuilds muscle strength safely.",
    },
    {
      id: "faq-7",
      question: "Do you provide sports injury rehabilitation?",
      answer:
        "Yes, we offer specialized sports injury physiotherapy for athletes and active individuals in Dhaka. We treat sprains, muscle tears, rotator cuff injuries, runner's knee, and ligament strains, focusing on safe tissue healing, strength conditioning, and re-injury prevention.",
    },
    {
      id: "faq-8",
      question: "Where is L.E.A.P Physiotherapy located in Dhaka?",
      answer:
        "L.E.A.P Physiotherapy & Rehabilitation is located in Gulshan-1, Dhaka. Our modern clinical facility is easily accessible for residents and corporate professionals coming from surrounding areas like Banani, Baridhara, Niketan, Mohakhali, and Tejgaon.",
    },
    {
      id: "faq-9",
      question: "How can I book a physiotherapy appointment?",
      answer:
        "You can book an appointment easily by filling out our online booking form above, calling us directly at +8801318588777, or sending us a message on WhatsApp. Our clinical team will reach out promptly to confirm a time slot that fits your schedule.",
    },
  ];

  return (
    <section
      aria-labelledby="faq-section-title"
      className="py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* ============================================================
            SECTION HEADER
        ============================================================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-[#1D1AA9]/20 px-4 py-1.5 text-xs font-bold text-[#1D1AA9] sm:text-sm">
            <HelpCircle className="h-4 w-4 text-[#1D1AA9]" aria-hidden="true" />
            <span>Clear Clinical Answers</span>
          </div>

          <h2
            id="faq-section-title"
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Frequently Asked Questions About{" "}
            <span className="text-[#1D1AA9]">Physiotherapy</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Find clear answers to common questions about our clinical care, 
            treatment sessions, location, and booking process in Gulshan, Dhaka.
          </p>
        </div>

        {/* ============================================================
            ACCORDION LIST
        ============================================================= */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-200"
              >
                {/* H3 Heading Accordion Toggle Button */}
                <h3 className="m-0 p-0 text-base font-bold">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    aria-controls={`${faq.id}-content`}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left text-base font-bold text-slate-900 transition hover:text-[#1D1AA9] sm:p-6 sm:text-lg"
                  >
                    <span>{faq.question}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition-transform duration-200">
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#1D1AA9]" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </h3>

                {/* Answer Content Panel */}
                {isOpen && (
                  <div
                    id={`${faq.id}-content`}
                    className="border-t border-slate-100 px-5 pb-6 pt-3 sm:px-6"
                  >
                    <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ============================================================
            FAQ BOTTOM CTA
        ============================================================= */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center sm:p-8 md:flex md:items-center md:justify-between md:text-left">
          <div>
            <h4 className="text-lg font-bold text-slate-900 sm:text-xl">
              Have a question not listed here?
            </h4>
            <p className="mt-1 text-sm text-slate-600">
              Speak directly with our team at L.E.A.P Physiotherapy Center in Gulshan.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 shrink-0 md:mt-0">
            <button
              type="button"
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B30727] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#8C051E] focus:outline-none focus:ring-2 focus:ring-[#B30727]"
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <span>Book Appointment</span>
            </button>

            <a
              href="tel:+8801318588777"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-bold text-[#1D1AA9] transition hover:border-[#1D1AA9]"
            >
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}