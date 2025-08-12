"use client";
import { useLanguage } from "@/context/LanguageContext";
import { ecosystemText } from "@/fixtures/landing-page/ecosystem/ecosystem";
import React from "react";
const EcosystemSection = () => {
  const { language } = useLanguage();
  const t = ecosystemText[language] || ecosystemText.en;
  return (
    <div className="ecosystem-wrapper pt-16 pb-16  bg-[#fcfcfb]">
      <div className="common-header-section pb-16 container">
        <h2
          className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-center text-black"
          dangerouslySetInnerHTML={{ __html: t.title }}
        />
        <p className="subheading-text text-xl text-muted-foreground max-w-3xl mx-auto text-center">
          {t.subtitle}
        </p>
      </div>
      <div className="ecosystem-content-wrapper row  container justify-around">
        {t.content.map((obj, idx) => {
          const IconComponent = obj.icon;
          return (
            <div
              key={idx}
              className="col-12 md:col-4 mb-4 mt-4 gap-3 flex rounded-lg text-card-foreground shadow-md p-4 group border-0 shadow-card max-w-[100%] md:max-w-[32%] hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <div
                className="mt-2 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  width: 50,
                  height: 50,
                  background:
                    "linear-gradient(135deg, rgb(249, 116, 21), rgb(49, 130, 237))",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <IconComponent size={28} />
                
              </div>

              <div>
                <h3 className="text-dark text-base md:text-xl font-semibold mb-2 text-foreground">
                  {obj.title}
                </h3>
                <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                  {obj.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EcosystemSection;
