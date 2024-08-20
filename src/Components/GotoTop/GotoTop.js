import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BiArrowToTop } from "react-icons/bi";
import messenger from "../../assets/image.png";
import "./GotoTop.css"
const GotoTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const gotoBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const messengerLink = 'https://m.me/1336627309720284';
  return (
    <div>
      {isVisible && (
        <div>
          <BiArrowToTop
            onClick={gotoBtn}
            className="bg-blue-700 float-right text-3xl top-btn   cursor-pointer"
          />
        </div>
      )}

      <a target="_blank"
        className=" float-right w-12 top-btn-messenger   cursor-pointer"
        onClick={() => window.location.href = messengerLink}

      >
        <img src={messenger} />
      </a>
    </div>
  );
};

export default GotoTop;
