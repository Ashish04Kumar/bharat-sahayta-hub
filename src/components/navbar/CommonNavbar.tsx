"use client";
import translations from "../../fixtures/navbar/navbar.json";
import { MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

const CommonNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();

  const t = translations[language] || translations["en"]; 

  const navItems = [
    { label: t.nav.howItWorks, href: "#how-it-works" },
    { label: t.nav.features, href: "#features" },
    { label: t.nav.forNgos, href: "#ngos" },
    { label: t.nav.about, href: "#about" },
  ];

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "Hindi" },
    { code: "ta", name: "Tamil" },
    { code: "pa", name: "Punjabi" },
    { code: "bn", name: "Bengali" },
  ];

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(e.target.value as typeof language);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-border/50 common-nav-wrapper">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center shadow-warm-gradient">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">
                {t.logo.title}
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">
                {t.logo.subtitle}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Selector */}
            <select
              value={language}
              onChange={handleLanguageChange}
              className="border border-gray-300 rounded-md px-2 py-1 text-sm bg-white text-foreground text-dark"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>

            <button className="font-medium text-dark">{t.buttons.signIn}</button>
            <button className="shadow-warm-gradient p-2 pr-[16px] pl-[16px] text-white rounded-2xl cursor-pointer font-medium">
              {t.buttons.joinNetwork}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              {/* Mobile Language Selector */}
              <select
                value={language}
                onChange={handleLanguageChange}
                className="border border-gray-300 rounded-md px-2 py-1 text-sm bg-white text-foreground"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>

              <div className="flex flex-col gap-3 pt-4 border-t border-border/50">
                <button className="banner-help-btn">{t.buttons.signIn}</button>
                <button className="banner-sos-btn">{t.buttons.joinNetwork}</button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default CommonNavbar;
