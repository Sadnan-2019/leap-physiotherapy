import React from "react";
import { Helmet } from "react-helmet-async";

const Faq = () => {
  const faqs = [
    {
      question: "Why should I choose Leap Physiotherapy Center in Dhaka?",
      answer:
        "Leap Physiotherapy Center provides evidence-based physiotherapy treatments with personalized care, experienced physiotherapists, modern rehabilitation equipment, and customized recovery plans to help patients relieve pain and restore mobility.",
    },
    {
      question: "What conditions do you treat at Leap Physiotherapy Center?",
      answer:
        "We treat a wide range of conditions including back pain, neck pain, knee pain, frozen shoulder, sciatica, arthritis, sports injuries, stroke rehabilitation, post-surgery recovery, muscle injuries, ligament injuries, and other musculoskeletal conditions.",
    },
    {
      question:
        "Do I need a doctor's referral before visiting a physiotherapist?",
      answer:
        "No. Most patients can book an appointment directly with our physiotherapists. However, if you have recent medical reports or imaging such as X-rays or MRI scans, bringing them to your appointment can help us better understand your condition.",
    },
    {
      question: "How many physiotherapy sessions will I need?",
      answer:
        "The number of sessions depends on your condition, severity, overall health, and treatment goals. After your initial assessment, our physiotherapist will recommend a personalized treatment plan.",
    },
    {
      question: "Can physiotherapy help avoid surgery?",
      answer:
        "In many cases, physiotherapy can reduce pain, improve movement, and strengthen muscles, which may help some patients manage their condition without surgery. Every case is different, and our physiotherapists will recommend the most appropriate treatment based on your assessment.",
    },
    {
      question: "How long does a physiotherapy session take?",
      answer:
        "Most physiotherapy sessions last between 30 and 60 minutes depending on your condition and treatment plan.",
    },
    {
      question: "Do you provide treatment for sports injuries?",
      answer:
        "Yes. We provide sports injury rehabilitation for muscle strains, ligament injuries, tendon problems, joint injuries, and post-sports recovery using evidence-based physiotherapy techniques.",
    },
    {
      question: "Can physiotherapy help stroke patients recover?",
      answer:
        "Yes. Our stroke rehabilitation program focuses on improving balance, mobility, strength, coordination, walking ability, and independence through personalized neurological physiotherapy.",
    },
    {
      question: "What should I wear to my physiotherapy appointment?",
      answer:
        "Wear comfortable clothing that allows easy movement and provides access to the area being treated. Athletic or loose-fitting clothing is usually recommended.",
    },
    {
      question: "Is physiotherapy treatment painful?",
      answer:
        "Some treatments may cause mild discomfort, especially during the early stages of recovery, but our physiotherapists always aim to minimize pain while helping improve movement and function.",
    },
    {
      question: "How can I book an appointment at Leap Physiotherapy Center?",
      answer:
        "You can book an appointment by calling our clinic, sending us a WhatsApp message, or using the appointment form on our website.",
    },
    {
      question: "Where is Leap Physiotherapy Center located?",
      answer:
        "Leap Physiotherapy Center is located in Dhaka and provides professional physiotherapy and rehabilitation services in a modern clinical environment.",
    },
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div>
      <Helmet>
        

     

        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="py-16 lg:py-24 bg-base-100">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ */}
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="collapse collapse-plus bg-base-100 border border-base-300 rounded-xl shadow-sm"
              >
                <input type="checkbox" />

                <div className="collapse-title">
                  <h3 className="text-lg md:text-xl font-semibold pr-8">
                    {faq.question}
                  </h3>
                </div>

                <div className="collapse-content">
                  <p className="leading-7 text-base-content/80">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
