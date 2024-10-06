"use client";

import { useEffect, useState } from "react";
import carProgressBar from "../../../public/carProgressBar.png";
import Image from "next/image";

interface VehicleProgressBarProps {
  currentPath: string;
}

export default function VehicleProgressBar({currentPath} : VehicleProgressBarProps) {
    const [step, setStep] = useState(0);
  
    const totalSteps = 4; // Number of steps in the image

    useEffect(() => {
      if (currentPath === "/showPrice") {
        setStep(1);
      }
      if (currentPath === "/vehicleform") {
        setStep(2);
      }
      if (currentPath === "/payment") {
        setStep(3);
      }
    }
    , [currentPath]);

    // const nextStep = () => {
    //   if (step < totalSteps - 1) {
    //     setStep(step + 1);
    //   }
    // };
  
    // const prevStep = () => {
    //   if (step > 0) {
    //     setStep(step - 1);
    //   }
    // };
  
    return (
      <div className="flex flex-col items-center justify-center h-48 w-80">
        {/* Progress Line */}
        <div className="relative w-full max-w-5xl mt-10 flex justify-between">

          <div className="-z-10 absolute top-2 w-full h-[1px] bg-black" />

          {/* Dots on the progress line */}
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`w-6 h-6 rounded-full border-[1px] ${
                step >= index ? "bg-primaryText border-black" : "bg-border border-black"
              } ${step == index ? "opacity-0" : "opacity-100"} delay-300`}
            />
          ))}
          <Image
            className="z-10 absolute -top-20 -left-20 select-none cursor-pointer pointer-events-none w-44 h-44"
            alt="Car"
            src={carProgressBar}
            quality={100}
            draggable={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: 'contain',
              transform: `translateX(${((step / (totalSteps - 1)) * 170)}%)`,
              // opacity: isInView ? 1 : 0,
              transition: "all 0.8s ease"
            }}
        />

        </div>
        {/* Navigation Buttons */}
        {/* <div className="mt-10 flex space-x-4">
          <button
            onClick={prevStep}
            className="px-4 py-2 bg-gray-400 text-white rounded-md"
            disabled={step === 0}
          >
            Previous
          </button>
          <button
            onClick={nextStep}
            className="px-4 py-2 bg-gray-700 text-white rounded-md"
            disabled={step === totalSteps - 1}
          >
            Next
          </button>
        </div> */}
      </div>
    );
  }