import React from 'react';

const About = () => {
    return (
        <div className="py-10">
      <div
        className="hero min-h-screen"
        // data-aos="zoom-in-up"
        // // data-aos-offset="300"
        // data-aos-delay="5000"
        // data-aos-duration="4000"
        // // data-aos-easing="ease-in-out"
        // data-aos-mirror="true"
        // data-aos-once="false"
        style={{
          backgroundImage: `url(" https://i.ibb.co/MpB7WHX/Whats-App-Image-2022-09-29-at-4-02-29-PM.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className=" text-5xl font-bold text-white py-12 ">Why HCAH?</h1>

            <div className="text-white 	 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card">
                <p className="text-[18px]  font-bold mb-4">Affordable Cost </p>
                <p className="text-justify	 	text-[15px] poppins-t">
                  One of the most significant and favorable advantages of
                  healthcare services at home is that it costs much less than
                  keeping a patient in a healing center or hospital. Home based
                  healthcare experts give the full bouquet of services to
                  individuals who are released from the doctor’s facility yet
                  need certain medicinal care all through the length of their
                  recuperation. Apart from this, it also saves you the visiting
                  costs of the doctor and your time by seeking the same amount
                  of care at home itself.
                </p>
              </div>
              <div className="card">
                <p className="text-[18px] font-bold mb-4">
                  Qualified certified and experience manpower  {" "}
                </p>
                <p className=" text-justify	text-[15px] poppins-t">
                  Our nurses, physiotherapists ,MATS, MCG all are
                  certified, qualified and experienced. Both the nurses & MATS are
                  diploma holders. They know how to take care of ailing
                  patients.Apart form holistic nursing nurses provide patient
                  care with empathy & knowledge.Our physiotherapists are
                  qualified B.Sc & diploma holders. They will take care of
                  patients' neck pain to toe pain.Our medical caregivers give
                  total support to our patients at home. MCG feed the
                  patients,give medication, clean the patients, sponge the
                  patients. They also change diapers.Check vital parameters.
                </p>
              </div>
              <div>
                <p className="text-[18px]  font-bold mb-4">Dedicated Services</p>
                <p className="text-justify text-[15px] poppins-t ">
                  Another essential advantage of home care is that patients get
                  one-on-one consideration, something they would not get as an
                  occupant in a healing center. When patients are monitored on a
                  continuous basis and health care providers are able to access
                  real time data, diseases are treated before they get out of
                  hand.
                </p>
              </div>
              <div>
                <p className="text-[18px]  font-bold mb-4">Strong Monitoring Team</p>
                <p className="text-justify  text-[15px] poppins-t">
                  Supervisors of healthcare at home do converse with the 
                  caregivers every single day.They enquire about quality of service
                  ,patients satisfaction & patient attendants concerns.
                  Chief executive officer,who is a physician talks to the patients
                  & attendant once a week.This composes a strong monitoring 
                  team.On WhatsApp we have trouble window,where we share 
                  patients & attendants inconvenience,so that we can address
                  the problems.


                </p>
              </div>
              <div>
                <p className="text-[18px]  font-bold mb-4">Team 24 x 7</p>
                <p className="text-justify  text-[15px] poppins-t">

              Our fifteen employee-team works round the clock to serve the community.
              We are ready to  answer phone calls 24/7.We are open  for conversation  
              listening to attendants complaints.We can provide home service with caregiver
              even at mid night.
       

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default About;