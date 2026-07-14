 import React from "react";
import logo from "../../assets/leaplogo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

     
  return (
    <footer className="bg-gradient-to-r from-[#034ca7] via-[#0A4EA5] to-[#2622B7] text-white">

      <div className="container mx-auto px-5 lg:px-10 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* ===========================
                Logo & About
          ============================ */}

          <div>

            <img
              src={logo}
              alt="LEAP Physiotherapy & Rehabilitation"
              className="w-36 mb-6"
            />

            <p className="leading-8 text-blue-100 text-[15px]">
              <strong>L.E.A.P Physiotherapy & Rehabilitation</strong> provides
              evidence-based physiotherapy treatment for back pain, neck pain,
              knee pain, sports injuries, stroke rehabilitation and
              post-surgical recovery. Conveniently located in
              <strong> Gulshan 2</strong>, we proudly serve patients from
              <strong> Gulshan</strong>,
              <strong> Banani</strong>,
              <strong> Baridhara</strong>,
              <strong> Mohakhali</strong> and across
              <strong> Dhaka</strong>.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white hover:text-[#034ca7] transition flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white hover:text-[#034ca7] transition flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white hover:text-[#034ca7] transition flex items-center justify-center"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white hover:text-[#034ca7] transition flex items-center justify-center"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

          {/* ===========================
                Quick Links
          ============================ */}

          <div>

            <h3 className="text-2xl font-bold mb-7">
              Quick Links
            </h3>

            <ul className="space-y-4 text-blue-100">

              <li>
                <Link
                  to="/"
                  className="flex items-center gap-3 hover:text-white transition"
                >
                  <FaArrowRight className="text-sm" />
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="flex items-center gap-3 hover:text-white transition"
                >
                  <FaArrowRight className="text-sm" />
                  About LEAP
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="flex items-center gap-3 hover:text-white transition"
                >
                  <FaArrowRight className="text-sm" />
                  Physiotherapy Services
                </Link>
              </li>

              <li>
                <Link
                  to="/team"
                  className="flex items-center gap-3 hover:text-white transition"
                >
                  <FaArrowRight className="text-sm" />
                  Our Physiotherapists
                </Link>
              </li>

              <li>
                <Link
                  to="/faq"
                  className="flex items-center gap-3 hover:text-white transition"
                >
                  <FaArrowRight className="text-sm" />
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  to="/blogs"
                  className="flex items-center gap-3 hover:text-white transition"
                >
                  <FaArrowRight className="text-sm" />
                   Blogs
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="flex items-center gap-3 hover:text-white transition"
                >
                  <FaArrowRight className="text-sm" />
                  Contact Us
                </Link>
              </li>

            </ul>

          </div>

          {/* ===========================
              Physiotherapy Services
          ============================ */}

          <div>

            <h3 className="text-2xl font-bold mb-7">
              Popular Treatments
            </h3>

            <ul className="space-y-4 text-blue-100">

              <li className="flex gap-3">
                <FaArrowRight className="mt-1 text-sm" />
                Back Pain Physiotherapy
              </li>

              <li className="flex gap-3">
                <FaArrowRight className="mt-1 text-sm" />
                Neck Pain Treatment
              </li>

              <li className="flex gap-3">
                <FaArrowRight className="mt-1 text-sm" />
                Knee Pain Rehabilitation
              </li>

              <li className="flex gap-3">
                <FaArrowRight className="mt-1 text-sm" />
                Sports Injury Rehabilitation
              </li>

              <li className="flex gap-3">
                <FaArrowRight className="mt-1 text-sm" />
                Stroke Rehabilitation
              </li>

              <li className="flex gap-3">
                <FaArrowRight className="mt-1 text-sm" />
                Frozen Shoulder Treatment
              </li>

              <li className="flex gap-3">
                <FaArrowRight className="mt-1 text-sm" />
                Home Physiotherapy Service
              </li>

            </ul>

          </div>

          {/* ===========================
                Contact Information
          ============================ */}

          <div>

            <h3 className="text-2xl font-bold mb-7">
              Contact Information
            </h3>

            <div className="space-y-6 text-blue-100">

              <div className="flex gap-4">

                <FaMapMarkerAlt className="text-xl mt-1 text-white" />

                <p className="leading-7">
                  House 13A, Road 35,
                  <br />
                  Gulshan 2,
                  <br />
                  Dhaka-1212, Bangladesh
                </p>

              </div>

              <div className="flex gap-4">

                <FaPhoneAlt className="mt-1 text-white" />

                <div>

                  <a
                    href="tel:+8801673615587"
                    className="block hover:text-white"
                  >
                    +880 1673-615587
                  </a>

                  <a
                    href="tel:+8802222281712"
                    className="block hover:text-white"
                  >
                    +880 22222-81712
                  </a>

                </div>

              </div>

              <div className="flex gap-4">

                <FaEnvelope className="mt-1 text-white" />

                <a
                  href="mailto:info@leap.mrg.com.bd"
                  className="hover:text-white"
                >
                  info@leap.mrg.com.bd
                </a>

              </div>

              <div className="flex gap-4">

                <FaGlobe className="mt-1 text-white" />

                <a
                  href="https://www.leap.mrg.com.bd"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  www.leap.mrg.com.bd
                </a>

              </div>

              <div className="flex gap-4">

                <FaClock className="mt-1 text-white" />

                <div>

                  <p>Saturday – Thursday</p>

                  <p>9:00 AM – 8:00 PM</p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
            {/* ===========================
            CTA Section
      ============================ */}

      <div className="border-t border-white/10">

        <div className="container mx-auto px-5 lg:px-10 py-12">

          <div className="rounded-[32px] bg-[#61C53F] px-8 py-10 lg:px-16 lg:py-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">

            <div>

              <span className="badge badge-primary badge-lg mb-4">
                Book Your Appointment
              </span>

              <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                Start Your Recovery with Our Expert Physiotherapists
              </h3>

              <p className="mt-4 text-white/90 max-w-2xl leading-8">
                Whether you need physiotherapy for back pain, neck pain,
                knee pain, sports injury rehabilitation, stroke recovery,
                arthritis or home physiotherapy services, our experienced
                physiotherapists are ready to help you regain mobility,
                reduce pain and improve your quality of life.
              </p>

            </div>

            <div className="flex flex-wrap gap-4">

              <Link to="/appointment">
                <button className="btn btn-lg rounded-full bg-white text-[#034ca7] border-none hover:bg-slate-100 px-8">
                  Book Appointment
                </button>
              </Link>

              <a href="tel:+8801673615587">
                <button className="btn btn-lg btn-outline rounded-full border-white text-white hover:bg-white hover:text-[#034ca7] px-8">
                  Call Now
                </button>
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* ===========================
            Bottom Footer
      ============================ */}

      <div className="border-t border-white/10 bg-[#022f67]">

        <div className="container mx-auto px-5 lg:px-10 py-6">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-5">

            <p className="text-center lg:text-left text-blue-100 text-sm leading-7">

              © {new Date().getFullYear()}{" "}
              <strong>L.E.A.P Physiotherapy & Rehabilitation</strong>. All Rights
              Reserved.

            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">

              <Link
                to="/privacy-policy"
                className="hover:text-white transition"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="hover:text-white transition"
              >
                Terms & Conditions
              </Link>

              <Link
                to="/faq"
                className="hover:text-white transition"
              >
                FAQ
              </Link>

              <Link
                to="/contact"
                className="hover:text-white transition"
              >
                Contact
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;