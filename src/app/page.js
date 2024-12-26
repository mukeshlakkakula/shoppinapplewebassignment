"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import appleLogo from "./Images/appleLogowatch.png";
import watchHead from "./Images/applewatchbox.png";
import watchbelt from "./Images/applewatchband.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/all";
import "./globals.css";
gsap.registerPlugin(ScrollToPlugin);
const page = () => {
  const [getStated, setGetStarted] = useState(false);
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
  const handleGetStartedClick = () => {
    setGetStarted(true);
    gsap.to("#watchBox", {
      y: -10,
      scale: 0.8,
      duration: 1,
    });
    // Define animations for different screen sizes
    gsap.matchMedia().add("(min-width: 1024px)", () => {
      // For larger screens (desktop)
      gsap.to("#watchBox", {
        y: -160, // Move slightly up
        scale: 0.5, // Slightly shrink
        duration: 1,
      });
    });

    gsap.matchMedia().add("(max-width: 1023px)", () => {
      // For smaller screens (tablet and below)
      gsap.to("#watchBox", {
        y: -10, // Move slightly up
        scale: 0.8, // Smaller scaling
        duration: 1,
      });
    });

    gsap.matchMedia().add("(max-width: 768px)", () => {
      // For very small screens (mobile)
      gsap.to("#watchBox", {
        y: -5, // Minimal upward movement
        scale: 0.8, // Further scaling down
        duration: 1,
      });
    });
    // Animate the zoom-out effect on the container
  };
  return (
    <div>
      <div className="p-[18px] lg:p-[33px]">
        <Image
          src={appleLogo}
          alt="appleLogo"
          className="w-[77px] sm:w-[90px] lg:w-[90px]"
        />
      </div>
      {!getStated ? (
        <div className="p-[15px] lg:p-[20px] ">
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
        ""
      )}

      <div
        id="watchBox"
        className="w-full flex justify-center items-center m-auto"
      >
        <div className="relative w-[50%] lg:w-[666px]" ref={containerRef}>
          <Image
            src={watchbelt}
            alt="imgbelt"
            className="absolute inset-0 z-0"
          />
          <Image src={watchHead} alt="imgwatch" className="relative z-10" />
        </div>
      </div>
    </div>
  );
};

export default page;
