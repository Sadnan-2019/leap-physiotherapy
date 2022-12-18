import React from "react";

const BlogDetails = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center justify-items-center gap-5 px-10 py-12">
        <div className="bg-gray-700">
          <img
            className="rounded-3 p-4 border-3 w-96"
            src="https://leap.mrg.com.bd/wp-content/uploads/2016/11/Physiotherapy-blog2-LEAP.jpg"
            alt=""
          />
          <p className="text-2xl font-bold p-4">WHAT IS DRY NEEDLING?</p>
          <span className="font-bold p-4">15 November 2016</span>
          <p className="text-justify p-4">
            Dry needling, also known as myofascial trigger point dry needling is
            the use of either solid filiform needles (also referred to as
            acupuncture needles) or hollow-core hypodermic needles for therapy
            of muscle pain, including pain related to myofascial pain syndrome.
            Dry needling is sometimes also known as intramuscular stimulation
            (IMS). Acupuncture is a broad category of needling practices with
            solid filiform needles. Modern acupuncture notably includes both
            traditional and Western medical acupuncture; dry needling is
            arguably one subcategory of western medical acupuncture.
          </p>
        </div>
        <div className="bg-gray-700">
          <img
            className="rounded-3 p-4 border-3 w-96"
            src="https://leap.mrg.com.bd/wp-content/uploads/2016/11/Physiotherapy-blog4-LEAP.jpg"
            alt=""
          />
          <p className="text-2xl font-bold p-4">BRIEF HISTORY OF REFLEXOLOGY</p>
          <span className="font-bold p-4">15 November 2016</span>
          <p className="text-justify p-4">
            Findings show that reflexology was practiced as early as 2330 BC by
            the ancient Egyptian culture. It is here that the origins of
            reflexology were developed. This is evidenced by the famous
            pictograph found on a physician’s tomb in Sarrara, Egypt.
            Physiotherapy blog4.1 LEAPFrom Egypt it is believe that reflexology
            spread into India and from there in 100 AD, reflexology had spread
            to China via Buddhist monks. China developed its own techniques in
            reflexology and out of this comes the modern day acupuncture. As
            trade between regions and continents grew, reflexology spread. It
            finally made its way to Europe and in 1582 the first book of
            reflexology was produced by two doctors. It was believed at this
            time many middle Europeans were using some form of reflexology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
