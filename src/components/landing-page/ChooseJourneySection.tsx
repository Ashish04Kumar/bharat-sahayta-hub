"use client";
import React from "react";
import HelpNetworkCards from "./HelpNetworkCards";
import { headerSectionText } from "@/fixtures/landing-page/chooseJourney";
import { useLanguage } from "@/context/LanguageContext";

const ChooseJourneySection = () => {
  const { language } = useLanguage();
  const t = headerSectionText[language];

  return (
    <div className=" mx-auto pt-16  pb-16 bg-white">
      <div className="journey-section-wrapper container">
        <div className="common-header-section pb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-center"
            dangerouslySetInnerHTML={{ __html: t.chooseYourJourneyTitle }}
          />
          <p className="subheading-text text-xl text-muted-foreground max-w-3xl mx-auto text-center">
            {t.chooseYourJourneySubtitle}
          </p>
        </div>
        <HelpNetworkCards />
      </div>
    </div>
  );
};

export default ChooseJourneySection;
