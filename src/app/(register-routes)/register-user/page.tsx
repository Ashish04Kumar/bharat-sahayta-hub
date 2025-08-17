"use client";
import React, { useEffect, useState } from "react";
import {
  fetchRegisterHelperTranslation,
  fetchRegisterStep1Data,
} from "@/services/service-clients";
import { handleError } from "@/utils/handle-error";
import { useLanguage } from "@/context/LanguageContext";
import { Progress } from "@/components/ui/progress";
import { HeartPlus, HeartHandshake, Building2, Check } from "lucide-react";
import Loader from "@/components/common/Loader";
import { RegisterHelperDataType } from "@/types/register-user";
import RegisterHelperForm from "@/components/registration/RegisterHelperForm";

type Role = {
  title: Record<string, string>;
  description: Record<string, string>;
  examples?: Record<string, string[]>;
};

type Step1TranslationData = {
  header: {
    title: Record<string, string>;
    subtitle: Record<string, string>;
  };
  chooseRole: {
    title: Record<string, string>;
    subtitle: Record<string, string>;
  };
  roles: Record<string, Role>;
};

type StepTranslations = {
  step1: string;
  step2: string;
  next: string;
  prev: string;
  complete: string;
};

const stepTranslations: Record<string, StepTranslations> = {
  en: {
    step1: "Step 1/2",
    step2: "Step 2/2",
    next: "Next",
    prev: "Previous",
    complete: "Complete Registration",
  },
  hi: {
    step1: "चरण 1/2",
    step2: "चरण 2/2",
    next: "आगे",
    prev: "पीछे",
    complete: "पंजीकरण पूरा करें",
  },
  pa: {
    step1: "ਕਦਮ 1/2",
    step2: "ਕਦਮ 2/2",
    next: "ਅੱਗੇ",
    prev: "ਪਿਛੇ",
    complete: "ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਪੂਰਾ ਕਰੋ",
  },
  ta: {
    step1: "படி 1/2",
    step2: "படி 2/2",
    next: "அடுத்து",
    prev: "முந்தைய",
    complete: "பதிவை நிறைவு செய்",
  },
  bn: {
    step1: "ধাপ 1/2",
    step2: "ধাপ 2/2",
    next: "পরবর্তী",
    prev: "পূর্ববর্তী",
    complete: "নিবন্ধন সম্পূর্ণ করুন",
  },
};

const Page: React.FC = () => {
  const [step1TranslationData, setStep1TranslationData] =
    useState<Step1TranslationData | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // loader state
  const { language } = useLanguage();
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [registerHelperTranslationData, setRegisterHelperTranslationData] =
    useState<RegisterHelperDataType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetchRegisterStep1Data();
        setStep1TranslationData(res?.data);
      } catch (err) {
        handleError(err);
      } finally {
        setLoading(false);
      }
    };
    const fetchRegisterHelperData = async () => {
      setLoading(true);
      try {
        const res = await fetchRegisterHelperTranslation();
        setRegisterHelperTranslationData(res.data);
      } catch (err) {
        handleError(err);
      } finally {
        setLoading(false);
      }
    };

    if (currentStep === 1) {
      fetchData();
    } else if (currentStep === 2) {
      fetchRegisterHelperData();
    }
  }, [currentStep]);

  const handleRoleClick = (role: string) => {
    setSelectedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  const t = stepTranslations[language] || stepTranslations.en;

  if (loading) return <Loader />;

  return (
    <section className="registration-steps-wrapper mt-[60px] flex-1 bg-white">
      {step1TranslationData && (
        <div className="container pt-8 pb-8">
          <h2 className="custom-gradient-text text-4xl font-bold">
            {step1TranslationData.header.title[language]}
          </h2>
          <p className="custom-gradient-text text-xl mt-2">
            {step1TranslationData.header.subtitle[language]}
          </p>

          <div className="mt-8 text-center">
            <p className="text-lg font-semibold text-gray-600 mb-2">
              {currentStep === 1 ? t.step1 : t.step2}
            </p>
            <Progress value={currentStep === 1 ? 50 : 100} />

            {currentStep === 1 && (
              <>
                <h4 className="text-2xl font-semibold mt-8 text-custom-color1">
                  {step1TranslationData.chooseRole.title[language]}
                </h4>
                <p className="text-muted-color text-lg mt-1">
                  {step1TranslationData.chooseRole.subtitle[language]}
                </p>

                <div className="register_role_selector_wrapper flex flex-col md:flex-row md:justify-between gap-5 mt-5">
                  {Object.entries(step1TranslationData.roles).map(
                    ([key, value]) => {
                      let Icon: React.FC<{
                        size?: number;
                        className?: string;
                      }> | null = null;
                      if (value.title.en === "Seeker") Icon = HeartPlus;
                      if (value.title.en === "Helper") Icon = HeartHandshake;
                      if (value.title.en === "NGO") Icon = Building2;

                      const isSelected = selectedRoles.includes(value.title.en);

                      return (
                        <div
                          key={key}
                          onClick={() => handleRoleClick(value.title.en)}
                          className={`cursor-pointer register_role_selector_container p-6 
                            w-full md:w-[31%] bg-[#fbfbfa] rounded-lg 
                            transition-all duration-400 ease-in-out 
                            hover:shadow-lg hover:border-2  ${
                              !isSelected
                                ? "hover:border-[#f97415]"
                                : "hover:border-blue-500"
                            }
                            ${
                              isSelected
                                ? "border-2 border-blue-500 shadow-lg"
                                : ""
                            }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="rounded-full h-14 w-14 bg-[#ebf2fd] p-2 icon_container mb-4 flex items-center justify-center">
                              {Icon && (
                                <Icon size={35} className="text-blue-400" />
                              )}
                            </div>
                            {isSelected && (
                              <div className="rounded-full h-8 w-8 bg-blue-500 p-2 flex items-center justify-center">
                                <Check size={20} className="text-white" />
                              </div>
                            )}
                          </div>

                          <h5 className="text-start text-dark text-xl font-semibold mb-0">
                            {value.title[language]}
                          </h5>
                          <p className="text-start text-muted-color text-sm mt-2">
                            {value.description[language]}
                          </p>

                          <div className="pills-wrapper flex flex-wrap gap-2 mt-5">
                            {value.examples?.[language]?.map(
                              (example, exIndex) => (
                                <span
                                  key={exIndex}
                                  className="whitespace-nowrap pills pt-1 pb-1 px-2 bg-white rounded-full text-sm text-dark font-medium text-[13px] border border-gray"
                                >
                                  {example}
                                </span>
                              )
                            )}
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </>
            )}

            {currentStep === 2 && (
              <>
                <h4 className="text-2xl font-semibold mt-8 text-custom-color1">
                  {registerHelperTranslationData.commonTexts.header[language]}
                </h4>
                <p className="text-muted-color text-lg mt-1">
                   {registerHelperTranslationData.commonTexts.desc[language]}
                </p>

                <RegisterHelperForm
                  registerHelperTranslationData={registerHelperTranslationData}
                />
              </>
            )}
            <hr className="mt-8" />
            <div className="flex justify-between mt-6">
              {currentStep === 2 ? (
                <>
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="px-6 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                  >
                    {t.prev}
                  </button>

                  <button
                    onClick={() => alert("🎉 Registration Completed!")}
                    className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                  >
                    {t.complete}
                  </button>
                </>
              ) : (
                <div className="flex justify-end w-full">
                  <button
                    onClick={() =>
                      selectedRoles.length > 0 && setCurrentStep(2)
                    }
                    disabled={selectedRoles.length === 0}
                    className={`
      px-6 py-2 rounded-lg text-white font-semibold transition-all duration-300
      ${
        selectedRoles.length > 0
          ? "bg-gradient-to-r from-[#fd843d] to-[#f97415] hover:from-[#f97415] hover:to-[#fd843d]"
          : "bg-[#fd843d]/50 cursor-not-allowed"
      }
    `}
                  >
                    {t.next}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Page;
