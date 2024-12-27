"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import appleLogo from "./Images/appleLogowatch.png";
import watchHead from "./Images/applewatchbox.png";
import watchbelt from "./Images/applewatchband.jpg";
import sideviewWatch from "./Images/sideviewWatch.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/all";
import { FaAngleDown } from "react-icons/fa";
import "./globals.css";
gsap.registerPlugin(ScrollToPlugin);
const page = () => {
  const [getStated, setGetStarted] = useState(false);
  const [frontView, setFrontView] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);
  const [activeBtn, setActiveBtn] = useState("Apple Watch Series 10");
  const [activeProductName, setActiveProductName] = useState(
    "46mm Jet Black Aluminum Case with Black Solo Loop"
  );
  const [activePrice, setActivePrice] = useState("429");
  const containerRef = useRef(null);
  // const timeline = gsap.timeline({});
  // useGSAP(() => {
  //   timeline.from("#watchBox", {
  //     y: 250,
  //     scale: 0.4,
  //     duration: 1.6,
  //     ease: "back.inOut",
  //   });

  // });
  useGSAP(() => {
    gsap.to("#switchCnt", {
      opacity: 1,
      delay: 2,
    });
  }, [getStated]);
  let isSmallScreen = false;

  // Check if running in the browser
  if (typeof window !== "undefined") {
    isSmallScreen = window.innerWidth <= 768;
  }
  if (isSmallScreen) {
    // Perform animations for small screens
    console.log("Small screen detected");
  } else {
    // Perform animations for larger screens
    console.log("Large screen detected");
  }

  const handleGetStartedClick = () => {
    setGetStarted(true);

    gsap.from("#watchBox", {
      duration: 1,
      y: 180,
      delay: 1,
    });
    gsap.to("#watchBox", {
      y: isSmallScreen ? -20 : -230,
      scale: isSmallScreen ? 0.9 : 0.5,
      duration: 1,
      delay: 1,
    });
  };
  return (
    <div>
      <div className="p-[18px] lg:p-[29px] flex justify-center lg:justify-between w-full items-center ">
        <Image
          src={appleLogo}
          alt="appleLogo"
          className="w-[77px] sm:w-[90px] lg:w-[90px] "
        />
        {getStated && !isSmallScreen ? (
          <div className="w-[54%] flex justify-between flex-row  items-center">
            <div className="relative" style={{ position: "relative" }}>
              <div className=" ">
                <button
                  onClick={() => {
                    setPopupOpen(!popupOpen);
                  }}
                  className="flex items-center"
                >
                  Collections <FaAngleDown />
                </button>
              </div>

              <div
                style={{ position: "absolute", left: "-100%" }}
                className={`absolute w-[30vw] lg:w-[320px] top-7 right-50 flex gap-3 flex-col p-4 bg-white border rounded-xl shadow-lg z-50 ${
                  popupOpen ? "block" : "hidden"
                }`}
              >
                <button
                  onClick={() => {
                    setActiveBtn("Apple Watch Series 10"),
                      setTimeout(() => {
                        setPopupOpen(!popupOpen);
                      }, 600);
                  }}
                  className={` rounded ${
                    activeBtn === "Apple Watch Series 10"
                      ? "activeText"
                      : "notActive"
                  }`}
                >
                  Apple Watch Series 10
                </button>
                <hr />
                <button
                  onClick={() => {
                    setActiveBtn("Apple Watch Hermès Series 10"),
                      setTimeout(() => {
                        setPopupOpen(!popupOpen);
                      }, 600);
                  }}
                  className={`rounded ${
                    activeBtn === "Apple Watch Hermès Series 10"
                      ? "activeText"
                      : "notActive"
                  }`}
                >
                  Apple Watch Hermès Series 10
                </button>
                <hr />
                <button
                  onClick={() => {
                    setActiveBtn("Apple Watch Se"),
                      setTimeout(() => {
                        setPopupOpen(!popupOpen);
                      }, 600);
                  }}
                  className={`rounded ${
                    activeBtn === "Apple Watch Se" ? "activeText" : "notActive"
                  }`}
                >
                  Apple Watch Se
                </button>
              </div>
            </div>
            {/* popup*/}
            <button className="hidden lg:block  bg-[#0071E3] text-sm font-medium pt-[8px] pr-[15px] pb-[8px] pl-[15px] text-white p-[10px] rounded-full  ">
              Save
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      {!getStated ? (
        <div id="appleIntText" className="p-[15px] lg:p-[20px] ">
          <div className="flex  flex-col justify-center">
            <h1 className="flex justify-center pt-[20px] pl-[5px]">
              <span className="flex flex-col w-[100%] lg:max-w-[720px] justify-start items-start  gap-[3px] lg:gap-[10px]">
                <span className="text-xl">Apple Watch Studio</span>
                <span className="typeheading">Choose a case.</span>
                <span className="typeheading">Pick a band.</span>
                <span className="typeheading">Create your own style.</span>{" "}
                <button
                  onClick={handleGetStartedClick}
                  className="flex justify-start mt-[2.688rem] bg-[#0071E3] text-lg font-medium pt-[10px] pr-[21px] pb-[10px] pl-[21px] text-white p-[10px] rounded-full "
                >
                  Get started
                </button>
              </span>
            </h1>
          </div>
        </div>
      ) : (
        <div className="lg:hidden flex justify-between flex-row p-4  items-center">
          <div className="relative" style={{ position: "relative" }}>
            <div className=" ">
              <button
                onClick={() => {
                  setPopupOpen(!popupOpen);
                }}
                className="flex items-center"
              >
                Collections <FaAngleDown />
              </button>
            </div>

            <div
              style={{ position: "absolute", left: "-10px" }}
              className={`absolute w-[97vw] lg:w-[320px] top-7 flex gap-3 flex-col p-4 bg-white border rounded-xl shadow-lg z-50 ${
                popupOpen ? "block" : "hidden"
              }`}
            >
              <button
                onClick={() => {
                  setActiveBtn("Apple Watch Series 10"),
                    setTimeout(() => {
                      setPopupOpen(!popupOpen);
                    }, 600);
                }}
                className={` rounded ${
                  activeBtn === "Apple Watch Series 10"
                    ? "activeText"
                    : "notActive"
                }`}
              >
                Apple Watch Series 10
              </button>
              <hr />
              <button
                onClick={() => {
                  setActiveBtn("Apple Watch Hermès Series 10"),
                    setTimeout(() => {
                      setPopupOpen(!popupOpen);
                    }, 600);
                }}
                className={`rounded ${
                  activeBtn === "Apple Watch Hermès Series 10"
                    ? "activeText"
                    : "notActive"
                }`}
              >
                Apple Watch Hermès Series 10
              </button>
              <hr />
              <button
                onClick={() => {
                  setActiveBtn("Apple Watch Se"),
                    setTimeout(() => {
                      setPopupOpen(!popupOpen);
                    }, 600);
                }}
                className={`rounded ${
                  activeBtn === "Apple Watch Se" ? "activeText" : "notActive"
                }`}
              >
                Apple Watch Se
              </button>
            </div>
          </div>
          <button className=" bg-[#0071E3] text-sm font-medium pt-[8px] pr-[15px] pb-[8px] pl-[15px] text-white p-[10px] rounded-full  ">
            Save
          </button>
        </div>
      )}

      <div
        id="watchBox"
        className="w-full flex justify-center items-center m-auto flex-col"
      >
        {frontView ? (
          <div className="relative lg:w-[666px] w-[100vw]" ref={containerRef}>
            <Image
              src={watchbelt}
              alt="imgbelt"
              className="absolute inset-0 z-0"
            />
            <Image src={watchHead} alt="imgwatch" className="relative z-10" />
          </div>
        ) : (
          <div className="lg:w-[666px] w-[100vw]">
            <Image src={sideviewWatch} alt="sideviewImg" />
          </div>
        )}
        {getStated ? (
          <div
            id="switchCnt"
            className=" text-center mt-2 w-full flex flex-col justify-center items-center opacity-0 gap-4"
          >
            <button
              onClick={() => {
                setFrontView(!frontView);
              }}
              className="lg:text-3xl text-[#0066CC] underline  decoration-solid"
            >
              {!frontView ? "Front view" : "Side view"}
            </button>
            <p className="activeText lg:text-2xl font-semibold uppercase">
              {activeBtn}
            </p>
            <h3 className="notActive lg:text-3xl font-semibold hover:text-[#1D1D1F]">
              {activeProductName}
            </h3>
            <h4 className="lg:text-2xl">From ${activePrice}</h4>
            <div className="flex items-center gap-4 lg:mt-14">
              <button className="featureButtons lg:text-3xl flex gap-2 min-w-28 lg:min-w-48 justify-center items-center">
                {" "}
                <svg
                  height={isSmallScreen ? "25" : "50"}
                  viewBox="0 0 19 25"
                  width={isSmallScreen ? "25" : "38"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m0 0h19v25h-19z" fill="none"></path>
                  <path
                    d="m18.25 9.038v1.7427c0 .2972-.0833.5382-.25.7227-.1665.1847-.385.277-.6553.277h-.3447v5.1904c0 2.2253-1.804 4.0293-4.0293 4.0293h-2.3643c.3291-.2865.6082-.6216.8301-1h1.5342c1.6704 0 3.0293-1.3589 3.0293-3.0293v-8.9414c0-1.6704-1.3589-3.0293-3.0293-3.0293h-6.9414c-1.3074 0-2.4136.8372-2.8372 2h-.1748c-.3113 0-.6113.0437-.9026.1111.417-1.781 2.0063-3.1111 3.9146-3.1111h6.9414c2.2253 0 4.0293 1.804 4.0293 4.0293v.0225h.3447c.2703 0 .4888.0902.6553.2703.1667.1803.25.4187.25.7159zm-7.25 8.9447c0 1.6664-1.3508 3.0173-3.0173 3.0173h-4.9654c-1.6665 0-3.0173-1.351-3.0173-3.0173v-6.9653c0-1.6664 1.3508-3.0173 3.0173-3.0173h4.9653c1.6665 0 3.0173 1.351 3.0173 3.0173v.1215h.3076c.2068 0 .3738.069.5012.2067.1274.1379.1912.3202.1912.5475v1.3326c0 .2273-.0637.4116-.1912.5526-.1274.1412-.2944.2118-.5012.2118h-.3076v3.9927zm-1-6.9653c0-1.1123-.905-2.0173-2.0173-2.0173h-4.9654c-.0059 0-.0115.0017-.0173.0017-.366.0032-.7048.1096-1 .2837-.5952.3511-1 .9922-1 1.7319v6.9653c0 1.1123.905 2.0173 2.0173 2.0173h4.9653c1.1123 0 2.0173-.905 2.0173-2.0173v-6.9653z"
                    fill="#1d1d1f"
                  ></path>
                </svg>
                Size
              </button>
              <button className="featureButtons lg:text-3xl flex gap-2 min-w-28 lg:min-w-48 justify-center items-center">
                {" "}
                <svg
                  height={isSmallScreen ? "25" : "50"}
                  viewBox="0 0 17 25"
                  width={isSmallScreen ? "25" : "38"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m0 0h17v25h-17z" fill="none"></path>
                  <path
                    d="m16 8.2017c-.1665-.1801-.385-.2703-.6553-.2703h-.3447v-.0225c0-2.2253-1.804-4.0293-4.0293-4.0293h-6.9414c-2.2253.0001-4.0293 1.804-4.0293 4.0294v8.9414c0 2.2253 1.804 4.0293 4.0293 4.0293h6.9414c2.2253 0 4.0293-1.804 4.0293-4.0293v-5.1904h.3447c.2703 0 .4888-.0923.6553-.277.1667-.1844.25-.4254.25-.7227v-1.7427c0-.2972-.0833-.5356-.25-.7159zm-2 8.6487c0 1.6704-1.3589 3.0293-3.0293 3.0293h-6.9414c-1.6704 0-3.0293-1.3589-3.0293-3.0293v-8.9414c0-1.6704 1.3589-3.0293 3.0293-3.0293h6.9414c1.6704 0 3.0293 1.3589 3.0293 3.0293z"
                    fill="#1d1d1f"
                  ></path>
                </svg>
                Case
              </button>
              <button className="featureButtons lg:text-3xl flex gap-2 min-w-28 lg:min-w-48 justify-center items-center">
                {" "}
                <svg
                  height={isSmallScreen ? "25" : "50"}
                  viewBox="0 0 10 25"
                  width={isSmallScreen ? "25" : "38"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m0 0h10v25h-10z" fill="none"></path>
                  <path
                    d="m9.5 22.5a.5.5 0 0 1 -.5.5h-8a.5.5 0 1 1 0-1h.015a.485.485 0 0 0 .485-.485v-6.2216a4.5231 4.5231 0 0 0 1 .9448v5.2768a1.4779 1.4779 0 0 1 -.0813.485h5.1627a1.4758 1.4758 0 0 1 -.0814-.485v-5.2768a4.5209 4.5209 0 0 0 1-.9448v6.2216a.4851.4851 0 0 0 .4851.485h.0149a.5.5 0 0 1 .5.5zm-1.9194-19.5h-5.1621a1.4732 1.4732 0 0 1 .0815.485v9.015a2.5 2.5 0 0 0 5 0v-9.015a1.4873 1.4873 0 0 1 .0806-.485m1.4194-1a.5.5 0 0 1 .5.5.5.5 0 0 1 -.5.5h-.015a.485.485 0 0 0 -.485.485v9.015a3.5 3.5 0 0 1 -3.5 3.5 3.5 3.5 0 0 1 -3.5-3.5v-9.015a.485.485 0 0 0 -.485-.485h-.015a.5.5 0 0 1 0-1zm-3.2179 10.5a.75.75 0 1 0 -.75.75.75.75 0 0 0 .75-.75zm0-2.5a.75.75 0 1 0 -.75.75.75.75 0 0 0 .75-.75zm0-2.5a.75.75 0 1 0 -.75.75.75.75 0 0 0 .75-.75z"
                    fill="#1d1d1f"
                  ></path>
                </svg>
                Band
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default page;
