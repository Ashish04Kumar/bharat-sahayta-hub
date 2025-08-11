"use client";
import React from "react";
import ParticlesBackground from "../common/ParticlesBackground";
import { useLanguage } from "@/context/LanguageContext";

// Lucide icons
import {
  MapPinCheck,
  Image as ImageIcon,
  Languages,
  AlertTriangle,
  Map,
  Ruler,
  ShieldCheck,
  Route,
  Bell,
  UserCheck,
  Zap,
  Eye,
  Clock,
  MessageSquareLock,
  Activity,
  CheckCircle,
  FileText,
  MessageCircle,
  TrendingUp,
} from "lucide-react";
import { howItWorksText } from "@/fixtures/how-it-works/how-it-words";

const HowItWorksSection = () => {
  const { language } = useLanguage();
  const t = howItWorksText[language] || howItWorksText.en;
  const stepIcons = [
    [MapPinCheck, ImageIcon, Languages, AlertTriangle],
    [Map, Ruler, ShieldCheck, Route],
    [Bell, UserCheck, Zap, Eye],
    [Activity, Clock, MessageSquareLock, TrendingUp],
    [CheckCircle, FileText, MessageCircle, TrendingUp],
  ];

  const steps = [
    t.steps.requestHelp,
    t.steps.realTimeAlert,
    t.steps.helperNotification,
    t.steps.helperResponse,
    t.steps.helpDelivered,
  ];

  return (
    <div className="how-it-works-wrapper pt-16 pb-16 relative">
      <div className="common-header-section pb-16 container">
        <h2
          className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-center"
          dangerouslySetInnerHTML={{ __html: t.chooseYourJourneyTitle }}
        />
        <p className="subheading-text text-xl text-muted-foreground max-w-3xl mx-auto text-center">
          {t.chooseYourJourneySubtitle}
        </p>
      </div>

      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      <div className="container">
        <div className="timeline relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative timeline-item ${
                index % 2 === 0 ? "left" : "right"
              } mb-5`}
            >
              <div
                className={`step-number ${
                  index % 2 === 0 ? "right-0" : "left-0"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="timeline-content">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 md:mb-6 lg:mb-8">
                  {step.description}
                </p>
                <div className="row feature-grid gap-2 justify-center">
                  {step.features.map((feature, featureIndex) => {
                    const IconComponent = stepIcons[index][featureIndex];
                    return (
                      <div
                        key={featureIndex}
                        className="col-5 feature-point items-center flex flex-col md:flex-row justify-center "
                      >
                        <IconComponent  />
                        <p className="mb-0  md:text-start text-sm md:text-base text-gray-800">{feature}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
