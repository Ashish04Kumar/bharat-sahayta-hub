import React from "react";
import ChooseJourneySection from "@/components/landing-page/ChooseJourneySection";
import HowItWorksSection from "@/components/landing-page/HowItWorksSection";
import EcosystemSection from "@/components/landing-page/EcosystemSection";
import DetailedUserJourney from "@/components/landing-page/DetailedUserJourney";
import AllUsersTogetherSection from "@/components/landing-page/AllUsersTogetherSection";
import ImpactSection from "@/components/landing-page/ImpactSection";
import BannerSection from "@/components/landing-page/BannerSection";

const page = () => {
  return (
    <div>
      <BannerSection />
      <ChooseJourneySection />
      <HowItWorksSection />
      <EcosystemSection />
      <DetailedUserJourney />
      <AllUsersTogetherSection />
      <ImpactSection />
    </div>
  );
};

export default page;
