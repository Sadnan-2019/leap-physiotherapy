import React from "react";
// import { AiOutlineCaretRight } from "react-icons/ai";
import electrone from "../../assets/needling.jpg";
import electrotwo from "../../assets/needling1.jpg";
import electrothree from "../../assets/electrothree.jpg";
import electrofour from "../../assets/electro4.jpg";

const DryneedlingAcupunctureDetails = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-1  justify-center items-center    gap-12  px-12 mt-[50px]  py-6 ">
        <p className="font-medium text-justify ">
          Dry needling (Myofascial Trigger Point Dry Needling) is the use of
          either solid filiform needles (also referred to as acupuncture
          needles) or hollow-core hypodermic needles for therapy of muscle pain,
          including pain related to myofascial pain syndrome. Make an
          appointment for dry needling/acupuncture with our qualified and
          skilled Physiotherapist.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-2  justify-center items-center    gap-12  px-10  ">
        <div>
          <p className="text-2xl font-medium text-justify   ml-3 py-6">
            What is dry needling?
          </p>
          <p className=" font-medium text-justify py-2 ml-3  ">
            The primary aim is to relieve muscle pain and cramping, but it may
            also help to improve a person’s flexibility.
          </p>
          <p className=" font-medium text-justify py-2 ml-3  ">
            A practitioner inserts short, thin, stainless steel filiform needles
            into pressure points. Also called trigger points, these are tight
            areas or knots in the muscles. The needles contain no liquid, and
            nothing is injected.
          </p>
          <p className=" font-medium text-justify py-2 ml-3  ">
            Sports therapists and other physical therapists typically perform
            dry needling. Due to a lack of regulation and guidelines, a person
            can perform dry needling with minimal training and no license.
          </p>
          <p className=" font-medium text-justify py-2 ml-3  ">
            It is often very difficult to tell whether a practitioner has been
            trained, has adequate experience, or is performing the procedure
            correctly.
          </p>
          <p className=" font-medium text-justify py-2 ml-3  ">
            The most common practice is to leave a filiform needle in the muscle
            for 10–30 minutes. However, there are two less common types of dry
            needling:
          </p>

          <div className="ml-5 py-5 font-semibold text-sm text-justify">
            <div className=" mb-2">
              <li className=" ">
                <span>
                  The in and out technique, during which a practitioner inserts
                  a filiform needle into a trigger point and removes it right
                  away. Results of a 2014 reviewTrusted Source suggest that this
                  form of dry needling provides no benefits.
                </span>
              </li>
            </div>
            <div className="">
              <li className=" ">
                <span>
                  The non-trigger points technique, during which a practitioner
                  inserts needles into surrounding muscle, instead of a knot or
                  pressure point.
                </span>
              </li>
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-2 gap-8   py-6 ">
          <img src={electrone} className="w-64 h-44 rounded-lg" alt="" />
          <img src={electrotwo} className="w-64 h-44  rounded-lg" alt="" />
          <img src={electrothree} className="w-64  h-44  rounded-lg" alt="" />
          <img src={electrofour} className="w-64 h-44 rounded-lg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DryneedlingAcupunctureDetails;
