"use client";
import translations from "../../fixtures/navbar/navbar.json";
import {
  MapPin,
  Menu,
  X,
  LayoutDashboard,
  Bell,
  FilePlus2,
  Map,
  LogOut,
} from "lucide-react";
import { JSX, useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useRouter, usePathname } from "next/navigation";
import {
  fetchDashboardTranslation,
  logoutUser,
} from "@/services/service-clients";
import { handleError } from "@/utils/handle-error";

const AuthenticatedNavbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();
  const [navbarTranslationData, setNavbarTranslationData] = useState<{
    navbarItems: any[];
    profileText: string;
  }>({
    navbarItems: [],
    profileText: "",
  });

  const t = translations[language] || translations["en"];
  const router = useRouter();

  const iconMap: Record<string, JSX.Element> = {
    Dashboard: <LayoutDashboard className="w-5 h-5" />,
    "Create Request": <FilePlus2 className="w-5 h-5" />,
    "Sahayta Map": <Map className="w-5 h-5" />,
    Notifications: <Bell className="w-5 h-5" />,
  };

  useEffect(() => {
    const navbarTranslation = async () => {
      const resp = await fetchDashboardTranslation();
      console.log("resp", resp);

      if (resp.success && resp.data) {
        setNavbarTranslationData({
          navbarItems: resp.data.navbarItems || [],
          profileText: resp.data.profileOptions?.profileText?.[language] || "",
        });
      }
    };

    navbarTranslation();
  }, [language]);

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "Hindi" },
    { code: "ta", name: "Tamil" },
    { code: "pa", name: "Punjabi" },
    { code: "bn", name: "Bengali" },
  ];

  const logoutTexts: Record<string, string> = {
    en: "Logout",
    hi: "लॉगआउट",
    ta: "வெளியேறு",
    pa: "ਲੌਗਆਉਟ",
    bn: "লগআউট",
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(e.target.value as typeof language);
  };

  const handleLogout = async () => {
    try {
      router.push("/login");
      const res = await logoutUser();
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-border/50 common-nav-wrapper">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Logo + Nav */}
          <div className="flex items-center gap-16 h-16">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => router.push("/")}
            >
              <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center shadow-warm-gradient">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-black text-xl font-bold text-foreground">
                  {t.logo.title}
                </h1>
                <p className="text-xs text-muted-foreground -mt-1">
                  {t.logo.subtitle}
                </p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              {navbarTranslationData.navbarItems.map((item, index) => {
                const isActive = pathname === `/${item.href}`;
                return (
                  <button
                    key={index}
                    onClick={() => router.push(`/${item.href}`)}
                    className={`flex p-2 rounded-md items-center gap-2 text-foreground hover:text-primary transition-colors ${
                      isActive ? "authenticated-nav-active-items" : ""
                    }`}
                  >
                    {iconMap[item.en] || (
                      <LayoutDashboard className="w-5 h-5" />
                    )}
                    <span className="font-semibold text-md">
                      {item[language] || item.en}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Mobile menu button */}
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

          {/* 🟢 Language & Logout */}
          <div className="flex items-center gap-4">
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

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              {logoutTexts[language] || "Logout"}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4">
            <nav className="flex flex-col space-y-4">
              {navbarTranslationData.navbarItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    router.push(`/${item.href}`);
                  }}
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  {iconMap[item.en] || <LayoutDashboard className="w-5 h-5" />}
                  <span>{item[language] || item.en}</span>
                </button>
              ))}

              {/* Language Selector */}
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

              {/* 🟢 Logout in mobile */}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleLogout();
                }}
                className="flex items-center gap-2 px-3 py-2 rounded-md bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                {logoutTexts[language] || "Logout"}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default AuthenticatedNavbar;
