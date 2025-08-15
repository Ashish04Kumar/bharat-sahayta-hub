"use client";
import { useLanguage } from "@/context/LanguageContext";
import {
  allUsersTogetherContent,
  joinText,
} from "@/fixtures/landing-page/allUsersTogetherSection";
import React from "react";

const AllUsersTogetherSection = () => {
  const { language } = useLanguage();
  const text = joinText[language];
  const handleButtonClick = (buttonType) => {
    console.log(`${buttonType} clicked in ${language}`);
  };

  return (
    <div className="all_user_together_wrapper bg-white">
      <section className="container pt-10 pb-10 md:pt-16 md:pb-16">
        <div className="common-header-section pb-10">
          <h2
            className="text-3xl md:text-5xl font-bold mb-4 text-center text-black"
            dangerouslySetInnerHTML={{
              __html: allUsersTogetherContent.header[language],
            }}
          />
          <p className="subheading-text text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-center">
            {allUsersTogetherContent.subheader[language]}
          </p>
        </div>
        <div className="row justify-center container">
          {allUsersTogetherContent.cards.map((obj, index) => {
            const IconComponent = obj.icon;
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-3 cards-container mb-8 md:mb-0 mx-auto rounded-lg bg-card text-card-foreground bg-[#fcf6f6] border-0 shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white mb-6 shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, rgb(249, 116, 21), rgb(49, 130, 237))",
                  }}
                >
                  <IconComponent size={24} className="" />
                </div>
                <h3 className="text-dark text-2xl font-semibold">
                  {obj.title[language]}
                </h3>
                <p
                  className="text-lg font-medium text-primary mb-2"
                  style={{ color: "#fb8b15" }}
                >
                  {obj.subtitle[language]}
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {obj.description[language]}
                </p>
              </div>
            );
          })}
        </div>

        <hr></hr>
        <div className="space-y-6 mt-6  md:mt-20 bg-[#f3f8fd] w-fit mx-auto p-8 rounded-2xl"
        
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center text-black">
            {text.title}
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {text.subtitle}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 ">
            {/* Join as Helper Button */}
            <button
              onClick={() => handleButtonClick("joinHelper")}
              className="px-8 mt-5 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-md transition-all duration-300 transform  shadow-lg hover:shadow-xl "
            >
              {text.joinHelper}
            </button>

            {/* Register NGO Button */}
            <button
              onClick={() => handleButtonClick("registerNGO")}
              className="px-8 mt-5 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium rounded-md transition-all duration-300 transform  shadow-lg hover:shadow-xl "
            >
              {text.registerNGO}
            </button>

            {/* Seek Help Now Button */}
            <button
              onClick={() => handleButtonClick("seekHelp")}
              className="heartbeat-shadow px-8 mt-5 py-3 bg-gradient-to-r from-red-500 to-red-600  text-white font-medium rounded-md   "
            >
              {text.seekHelp}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllUsersTogetherSection;
