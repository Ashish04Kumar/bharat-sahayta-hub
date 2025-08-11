"use client";
import React from "react";
import {
  MapPin,
  Heart,
  Building,
  Users,
  Phone,
  DollarSign,
  Shield,
  Award,
  Bell,
  Video,
  Gift,
  Upload,
  UserCheck,
  Calendar,
} from "lucide-react";
import { helpCardsData } from "@/fixtures/landing-page/chooseJourney";
import { useLanguage } from "@/context/LanguageContext";
const HelpNetworkCards = () => {
  const getCardIcon = (iconType: string) => {
    switch (iconType) {
      case "heart":
        return <Heart className="w-8 h-8" />;
      case "building":
        return <Building className="w-8 h-8" />;
      case "users":
        return <Users className="w-8 h-8" />;
      default:
        return <Heart className="w-8 h-8" />;
    }
  };

  const getFeatureIcon = (index: number) => {
    const icons = [
      MapPin,
      Bell,
      Video,
      Award,
      Gift,
      Users,
      Calendar,
      UserCheck,
      Phone,
      Upload,
      DollarSign,
      Shield,
    ];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="w-4 h-4" />;
  };

  const Card = ({ cardData, index }) => {
    const { language } = useLanguage();
    const currentData = cardData[language];
    return (
      <div
        className={`bg-white rounded-3xl shadow-xl p-8 max-w-sm mx-auto  relative overflow-hidden ${cardData.cardGradient}`}
      >
        <div className="absolute top-2 right-1 w-20 h-20 opacity-10">
          <MapPin className="w-full h-full" />
        </div>

        <div
          className={`w-20 h-20 rounded-full  flex items-center justify-center text-white mb-6 shadow-lg`}
          style={{
            background:
              "linear-gradient(135deg, hsl(25 95% 53%), hsl(214 84% 56%))",
          }}
        >
          {getCardIcon(cardData.icon)}
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {currentData.title}
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {currentData.description}
        </p>
        
        <div className="space-y-3 mb-8">
          {currentData.features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="text-orange-500 mt-0.5 flex-shrink-0">
                {getFeatureIcon(index)}
              </div>
              <span className="text-sm text-gray-700 leading-relaxed">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <button
          className={`w-full py-[8px] rounded-md   text-white font-semibold text-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${
            index === 2 && "heartbeat-shadow"
          }`}
          style={{ backgroundImage: cardData.btnGradient }}
        >
          {currentData.buttonText}
        </button>
      </div>
    );
  };

  return (
    <div className="  from-blue-50 via-white to-orange-50  px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {helpCardsData.map((cardData, index) => (
          <Card key={index} cardData={cardData} index={index} />
        ))}
      </div>
    </div>
  );
};

export default HelpNetworkCards;
