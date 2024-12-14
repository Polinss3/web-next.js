'use client';
import React, { useState } from "react";

interface Question {
  q: string;
  a: string;
}

interface FaqProps {
  questions: Question[];
}

const Faq: React.FC<FaqProps> = ({ questions }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
      <h1 className="text-center dark:text-white lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">
        FAQ&apos;s
      </h1>
      <div className="lg:w-5/6 w-full mx-auto">
        {questions.map((item, index) => (
          <div key={index}>
            <hr className="w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />
            <div className="w-full md:px-6">
              <div
                className="flex justify-between items-center w-full cursor-pointer"
                id="mainHeading"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div>
                  <p
                    className={`flex justify-center items-center dark:text-white font-medium text-base leading-6 md:leading-4 text-gray-800 ${
                      openIndex === index ? "font-semibold" : ""
                    }`}
                  >
                    <span className="lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-primary">
                      Q{index + 1}.
                    </span>
                    {item.q}
                  </p>
                </div>
                <div>
                  <img
                    className={`transform dark:hidden ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                    alt="toggler"
                  />
                  <img
                    className={`transform dark:block hidden ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg"
                    alt="toggler"
                  />
                </div>
              </div>
              {openIndex === index && (
                <div className="mt-6 w-full" id="menu">
                  <p className="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
        <hr className="w-full lg:mt-10 my-8" />
      </div>
    </div>
  );
};

export default Faq;