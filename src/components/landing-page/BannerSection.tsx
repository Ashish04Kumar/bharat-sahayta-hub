"use client";
import React, { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import bannerSectionTranslation from "../../fixtures/landing-page/banner.json";
import { Heart, ShieldAlert } from "lucide-react";

const BannerSection = () => {
  const translations = [
    { text: "सहायता" }, // Hindi
    { text: "உதவி" }, // Tamil
    { text: "મદદ" }, // Gujarati
    { text: "ਸਹਾਇਤਾ" }, // Punjabi
    { text: "Help" }, // English
    { text: "সাহায্য" }, // Bengali
    { text: "সহায়তা" }, // Assamese (North-East)
    { text: "সহায়" }, // Manipuri (Meitei script example)
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const { language } = useLanguage();
  const t =
    bannerSectionTranslation[language] || bannerSectionTranslation["en"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % translations?.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [language]);

  return (
    <div className="banner-section-wrapper position-relative">
      <div className="banner-section-content text-center px-4 sm:px-8 lg:px-16">
        <h1 className="mt-3 font-extrabold text-center">
          <span className="block mb-2 underline text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            {translations[currentIndex].text}
          </span>
          <span className="block text-[#F5A75A] text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
            Map
          </span>
        </h1>
        <p className="mt-8 mb-4 font-medium text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
          {t.subtitle1}
        </p>
        <p className="mt-4 font-medium text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto">
          {t.subtitle2}
        </p>
        <div className="mb-2 lg:mb-4 xl:mb-5">Your content</div>
        <div className="mt-[50px] flex justify-center gap-3 md:gap-4 lg:gap-5 text-center flex-wrap">
          <button className="cursor-pointer flex items-center gap-2 !px-3 lg:!px-5 !py-3 lg:!py-4  rounded-md bg-gradient-to-r from-orange-400 to-orange-600 text-white font-medium hover:brightness-110 transition">
            <Heart /> {t.startButton}
          </button>
          <button className="cursor-pointer !px-3 lg:!px-5 !py-3  lg:py-4 rounded-md bg-red-500 text-white font-medium hover:bg-red-600 transition flex items-center gap-2 heartbeat-shadow">
            <ShieldAlert /> {t.sosButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
