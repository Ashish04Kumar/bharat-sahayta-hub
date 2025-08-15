"use client";
import { useLanguage } from "@/context/LanguageContext";
import {
  journeyDataHeader,
  tabsSelection,
  journeyData,
  animalCare,
} from "@/fixtures/landing-page/detailedUserJourney";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Check, Dog } from "lucide-react";

const DetailedUserJourney = () => {
  const { language } = useLanguage();
  const t = journeyDataHeader[language] || journeyDataHeader.en;
  const animalCareText = animalCare[language];
  const [activeTab, setActiveTab] = useState<string>("");
  const [activeSwiper, setActiveSwiper] = useState("helpSeekerJourney");

  // Default select first tab
  useEffect(() => {
    const firstTabKey = Object.keys(tabsSelection)[0];
    setActiveTab(firstTabKey);
  }, []);

  useEffect(() => {
    if (activeTab === "tab1") {
      setActiveSwiper("helperJourney");
    } else if (activeTab === "tab2") {
      setActiveSwiper("ngoJourney");
    } else {
      setActiveSwiper("helpSeekerJourney");
    }
  }, [activeTab]);
  return (
    <div className="detailed_user_journey_wrapper pt-10 pb-10 md:pt-16 md:pb-16  bg-[#fdfcfb]">
      <section className="container">
        <div className="common-header-section pb-10">
          <h2
            className="text-3xl md:text-5xl font-bold mb-4 text-center text-black"
            dangerouslySetInnerHTML={{ __html: t.mainHeader }}
          />
          <p className="subheading-text text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-center">
            {t.description}
          </p>
        </div>

        {/* Tabs */}
        <div className="user-selection-tab flex flex-wrap gap-3 justify-center px-4 mb-10">
          {Object.entries(tabsSelection).map(([key, tab]) => {
            const tabText = tab[language]?.header || tab.en.header;
            const Icon = tab.icon;
            const isActive = activeTab === key;

            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`group flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all duration-300 
                text-sm md:text-base shadow-sm hover:shadow-md backdrop-blur-sm
                ${
                  isActive
                    ? "bg-gradient-to-r from-rose-500 via-red-500 to-amber-500 text-white border-transparent shadow-lg"
                    : "bg-white/80 text-gray-700 border-gray-200 hover:border-gray-400"
                }
              `}
              >
                <Icon
                  size={20}
                  className={`transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-gray-500 group-hover:text-rose-500"
                  }`}
                />
                <span className="whitespace-nowrap font-medium">{tabText}</span>
              </button>
            );
          })}
        </div>

        <div className="container position-relative pb-4">
          <hr className="mb-5"></hr>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: ".custom-swiper-prev",
              nextEl: ".custom-swiper-next",
            }}
            pagination={{
              clickable: true,
              el: ".custom-swiper-pagination",
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {journeyData[language][activeSwiper].sections.map(
              (section, index: number) => (
                <SwiperSlide key={index} className="mt-4">
                  <div className="journey-card ">
                    <div className="flex gap-3 items-center mb-3">
                      <div className="icon-circle">
                        <section.icon size={28} color="#fff" />
                      </div>
                      <h3 className="text-dark journey-title">
                        {section.title}
                      </h3>
                    </div>
                    <ul className="steps-list">
                      {section.steps.map((step, i: number) => (
                        <li key={i}>
                          <span className="step-number">{i + 1}</span>
                          <span className="step-text">{step}</span>
                        </li>
                      ))}
                    </ul>
                    {section.footer && (
                      <p className="journey-footer">
                        <span className="footer-check-icon">
                          <Check size={14} color="#f97516" />
                        </span>
                        {section.footer}
                      </p>
                    )}
                  </div>
                </SwiperSlide>
              )
            )}

            {/* Custom navigation arrows */}
            <div className="custom-swiper-prev position-absolute">‹</div>
            <div className="custom-swiper-next position-absolute">›</div>

            {/* Custom pagination */}
            <div className="custom-swiper-pagination`"></div>
          </Swiper>
        </div>

        <div className="animal_care_focus mt-4 md:mt-24 flex gap-3">
          <div className="h-28 w-28">
            <Dog color="#FF9751" size={38} />
          </div>
          <div className="gap-2 items-center">
            <h3 className="text-dark text-base md:text-xl font-semibold mb-2 text-foreground">
              {animalCareText.header}
            </h3>
            <p className=" mt-2 text-muted-foreground leading-relaxed">
              {animalCareText.desc}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailedUserJourney;
