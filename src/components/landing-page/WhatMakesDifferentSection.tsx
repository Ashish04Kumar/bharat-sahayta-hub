"use client";
import React, { useState } from "react";
import { whatMakesDifferentText } from "@/fixtures/landing-page/whatMakesDifferent";
import { useLanguage } from "@/context/LanguageContext";

const WhatMakesDifferentSection = () => {
  const { language } = useLanguage();
  const t = whatMakesDifferentText[language] || whatMakesDifferentText.en;
  // track which icon index is rotating
  const [rotatingIndex, setRotatingIndex] = useState(null);

  const handleRotate = (index) => {
    setRotatingIndex(index);
    setTimeout(() => setRotatingIndex(null), 1000);
  };

  return (
    <div className="bg-[#ffffff] pt-10 md:pt-16 pb-10 md:pb-16">
      <div className="container">
        <div className="flex gap-[30px] items-center flex-col-reverse md:flex-row ">
          <div className="w-[80%] md:w-[35%] rounded-2xl overflow-hidden">
            <img src="/images/india-map-2.gif" alt="India Map" />
          </div>

          <div className="common-header-section mt-0 md:mt-20 flex-1">
            <h2
              className="text-4xl md:text-5xl font-bold mb-16 md:mb-10 text-foreground  text-black text-center md:text-start "
              dangerouslySetInnerHTML={{ __html: t.title }}
            />
            <div className="what-makes-different-content-wrapper mt-4 ml-0 md:ml-10]:">
              {t.content.map((obj, idx) => {
                const IconComponent = obj.icon;
                const isRotating = rotatingIndex === idx;

                return (
                  <div key={idx} className="gap-3 flex mb-4">
                    <div
                      onClick={() => handleRotate(idx)}
                      className="group rounded-full flex items-center justify-center flex-shrink-0 bg-[#fdf0e6] hover:bg-gradient-to-br hover:from-[#f97415] hover:to-[#3182ed] cursor-pointer"
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        transformStyle: "preserve-3d",
                        transform: isRotating
                          ? "rotateX(360deg)"
                          : "rotateX(0deg)",
                        transition: "transform 1s ease",
                      }}
                    >
                      <IconComponent
                        size={24}
                        className="text-green-500 group-hover:text-white transition-colors duration-200"
                      />
                    </div>

                    <div>
                      <h3 className="text-dark text-base md:text-xl font-semibold mb-2 text-foreground">
                        {obj.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {obj.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatMakesDifferentSection;
