"use client";
import React, { useEffect, useRef, useState } from "react";

interface StepData {
  title: string;
  description: string;
}

interface StickySectionProps {
  title: string;
  description: string;
  stepsTitle: string;
  stepsData: StepData[];
}

const StickySection: React.FC<StickySectionProps> = ({
  title,
  description,
  stepsTitle,
  stepsData,
}) => {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const stickySectionRef = useRef<HTMLDivElement>(null);
  const progressBarContainerRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const [activeSteps, setActiveSteps] = useState<number[]>([]);

  useEffect(() => {
    const progressBar = progressBarRef.current;
    const stickySection = stickySectionRef.current;
    const progressBarContainer = progressBarContainerRef.current;
    const stepsContainer = stepsContainerRef.current;

    if (
      !progressBar ||
      !stickySection ||
      !progressBarContainer ||
      !stepsContainer
    )
      return;

    const stepsHeight = stepsContainer.offsetHeight;
    const minHeight = 200;
    const progressBarHeight = Math.max(stepsHeight, minHeight);
    progressBarContainer.style.height = `${progressBarHeight}px`;

    const stickyStart = stickySection.offsetTop - 100; // Ajusta este valor según tus necesidades

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (
        scrollY >= stickyStart &&
        scrollY <= stickyStart + progressBarHeight
      ) {
        const progress = ((scrollY - stickyStart) / progressBarHeight) * 100;
        const clampedProgress = Math.min(Math.max(progress, 0), 100);
        const adjustedProgress = clampedProgress;

        progressBar.style.height = `${adjustedProgress}%`;

        const newActiveSteps: number[] = [];
        stepsData.forEach((_, index) => {
          const stepThreshold = ((index + 1) * 100) / stepsData.length;
          if (adjustedProgress >= stepThreshold) {
            newActiveSteps.push(index);
          }
        });
        setActiveSteps(newActiveSteps);
      } else if (scrollY < stickyStart) {
        progressBar.style.height = "0";
        setActiveSteps([]);
      } else if (scrollY > stickyStart + progressBarHeight) {
        progressBar.style.height = "100%";
        setActiveSteps(stepsData.map((_, index) => index));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [stepsData.length, stepsData]);

  return (
    <section className="pt-20 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="h-[1000px]">
        <div
          className="pt-[50px] sticky top-[100px] flex flex-col lg:flex-row justify-evenly items-start z-10 flex-nowrap text-white" // Ajusta el valor de top según tus necesidades
          ref={stickySectionRef}
        >
          <div className="lg:w-[45%] flex flex-col justify-start items-start mx-[20px] mb-16 lg:mb-0">
            <h2 className="text-white text-[30px] font-bold mb-[10px]">
              {title}
            </h2>
            <p className="mt-[10px] text-white text-[16px] leading-[1.5]">
              {description}
            </p>
            <a
              href="#"
              className="mt-[20px] inline-block px-[20px] py-[10px] bg-primary text-white no-underline font-bold rounded-[5px] transition-colors duration-300 ease-in-out hover:bg-secondary"
            >
              PIDE TU PRESUPUESTO
            </a>
          </div>
          <div className="grid" style={{ gridTemplateColumns: "20px auto" }}>
            <div
              className="relative w-[20px] bg-[#e0e0e0] rounded-[10px]"
              ref={progressBarContainerRef}
            >
              <div
                className="absolute w-full h-0 bg-primary rounded-[20px] top-0 transition-all duration-100"
                ref={progressBarRef}
                id="progressBar"
              ></div>
            </div>
            <div
              className="flex flex-col mx-[20px]"
              ref={stepsContainerRef}
            >
              <div className="list-title">
                <h3 className="text-white text-[30px] font-bold mb-[10px]">
                  {stepsTitle}
                </h3>
              </div>
              {stepsData.length > 0 ? (
                stepsData.map((step, index) => {
                  const isActive = activeSteps.includes(index);
                  const stepNumber = (index + 1).toString().padStart(2, "0");
                  const stepId = `step${index + 1}`;
                  return (
                    <div
                      key={stepId}
                      id={stepId}
                      className={`py-[20px] text-white flex items-start justify-start gap-[10px] transition-all duration-400 ease-in ${
                        isActive ? "opacity-100" : "opacity-25"
                      }`}
                    >
                      <div>
                        <p
                          className={`font-bold text-[20px] m-0 transition-all duration-400 ease-in ${
                            isActive ? "text-primary" : "text-primary-transparent"
                          }`}
                        >
                          {stepNumber}
                        </p>
                      </div>
                      <div>
                        <h4 className="m-0 transition-all duration-400 ease-in">
                          {step.title}
                        </h4>
                        <p className="mt-[8px] m-0 transition-all duration-400 ease-in">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-gray-500">No hay pasos disponibles.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickySection;