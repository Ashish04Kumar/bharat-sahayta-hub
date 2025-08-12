"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { footerText } from "@/fixtures/footer";
import { MapPin } from "lucide-react";

const CommonFooter = () => {
  const { language } = useLanguage();
  const t = footerText[language] || footerText.en;

  return (
    <footer className="footer-wrapper  pt-5 md:pt-10 pb-6 border-t">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between gap-5 md:gap-10 px-4">
        <div className="footer-about max-w-sm">
          <div className="flex gap-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center shadow-warm-gradient">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              {" "}
              <h2 className="text-xl font-bold text-black">{t.aboutTitle}</h2>
              <p className="text-sm text-muted-foreground">{t.aboutSubtitle}</p>
            </div>
          </div>
          <p className="mt-4 text-muted-foreground text-base">{t.aboutDesc}</p>
          {/* <p className="mt-4 text-orange-600">{t.loveNote}</p> */}
        </div>

        <div className="footer-links">
          <h3 className="text-lg font-semibold mb-3">{t.quickLinksTitle}</h3>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
            {t.quickLinks.map((link, idx) => (
              <li key={idx} className="hover:text-orange-500 cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <h3 className="text-lg font-semibold mb-3">{t.contactTitle}</h3>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
            <li>📞 {t.contactPhone}</li>
            <li>📧 {t.contactEmail}</li>
            <li>📍 {t.contactLocation}</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom flex flex-col md:flex-row justify-between items-center mt-8 border-t pt-2 md:pt-4 px-4 text-sm text-gray-500">
        <p>{t.copyright}</p>
        <div className="flex gap-4">
          <span className="hover:text-orange-500 cursor-pointer">
            {t.privacyPolicy}
          </span>
          <span className="hover:text-orange-500 cursor-pointer">
            {t.terms}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default CommonFooter;
