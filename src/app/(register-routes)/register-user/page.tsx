"use client";
import React, { useEffect, useState } from "react";
import {
  fetchRegisterHelperTranslation,
  fetchRegisterNGOTranslation,
  fetchRegisterStep1Data,
} from "@/services/service-clients";
import { handleError } from "@/utils/handle-error";
import { useLanguage } from "@/context/LanguageContext";
import { Progress } from "@/components/ui/progress";
import {
  HeartPlus,
  HeartHandshake,
  Building2,
  Check,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import Loader from "@/components/common/Loader";
import { RegisterHelperDataType } from "@/types/register-user";
import RegisterHelperForm from "@/components/registration/RegisterHelperForm";
import { SubmitHandler, useForm } from "react-hook-form";
import { z, ZodTypeAny } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import RegisterNGOForm from "@/components/registration/RegisterNGOForm";
import { stepTranslations } from "@/fixtures/registration/registration-translation";

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

const generateRegisterHelperSchema = (
  formFields: RegisterHelperDataType["formFields"],
  language: string
) => {
  if (!formFields) return z.object({});
  const shape: Record<string, ZodTypeAny> = {};

  Object.entries(formFields).forEach(([, field]) => {
    let schema: ZodTypeAny;
    switch (field.type) {
      case "email":
        schema = z.string().email(field.errorMessage[language]);
        break;
      case "tel":
        schema = z.string().min(10, field.errorMessage[language]);
        break;
      case "text":
        schema = z.string().min(2, field.errorMessage[language]);
        break;
      case "number":
        schema = z
          .string()
          .regex(/^\d+$/, field.errorMessage[language])
          .transform((val) => parseInt(val, 10));
        break;
      case "file":
        schema = z
          .any()
          .refine((files) => files?.length > 0, field.errorMessage[language]);
        break;
      case "textarea":
        schema = z.string().min(1, field.errorMessage[language]);
        break;
      default:
        schema = z.string(field.errorMessage[language]);
    }
    if (field.required) {
      if (schema instanceof z.ZodString) {
        schema = schema.min(1, `${field.label.en || field.name} is required`);
      }
    }
    shape[field.name] = schema;
  });
  return z.object(shape);
};

const Page: React.FC = () => {
  const [step1TranslationData, setStep1TranslationData] =
    useState<Step1TranslationData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { language } = useLanguage();
  const [selectedRoles, setSelectedRoles] = useState<Role[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [registerHelperTranslationData, setRegisterHelperTranslationData] =
    useState<RegisterHelperDataType | null>(null);
  const [registerNGOTranslationData, setRegisterNGOrTranslationData] =
    useState<RegisterHelperDataType | null>(null);
  const t = stepTranslations[language] || stepTranslations.en;

  const registerHelperSchema = generateRegisterHelperSchema(
    registerHelperTranslationData?.formFields,
    language
  );

  type FormData = z.infer<typeof registerHelperSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(registerHelperSchema),
    defaultValues: {},
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form submitted from parent:", data);
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (selectedRoles.length > 0) {
        setCurrentStep(2);
      }
    } else if (currentStep === 2) {
      if (
        selectedRoles[0]?.title.en === "Helper" ||
        selectedRoles[0]?.title.en === "NGO"
      ) {
        handleSubmit(onSubmit)();
        setCurrentStep(3);
      } else if (selectedRoles[0]?.title.en === "Seeker") {
        handleSubmit(onSubmit)();
      }
    } else if (currentStep === 3) {
      handleSubmit(onSubmit)();
    }
  };

  const handleRoleClick = (role: Role) => {
    setSelectedRoles((prev) => {
      if (role.title.en === "NGO") {
        return prev.some((r) => r.title.en === "NGO") ? [] : [role];
      }

      if (role.title.en === "Helper" || role.title.en === "Seeker") {
        const newRoles = prev.filter((r) => r.title.en !== "NGO");

        if (newRoles.some((r) => r.title.en === role.title.en)) {
          return newRoles.filter((r) => r.title.en !== role.title.en);
        } else {
          return [...newRoles, role];
        }
      }

      return prev;
    });
  };

  const getProgressValue = () => {
    if (selectedRoles.length === 0) return 0;
    if (selectedRoles.length === 1 && selectedRoles[0].title.en === "Seeker") {
      return currentStep === 1 ? 50 : 100;
    } else {
      if (currentStep === 1) {
        return 33;
      } else if (currentStep === 2) {
        return 66;
      } else {
        return 33;
      }
    }
  };

  const getStepCount = () => {
    if (selectedRoles.length === 1 && selectedRoles[0]?.title.en === "Seeker") {
      return `${t.step} ${currentStep}/2`;
    } else {
      return `${t.step} ${currentStep}/3`;
    }
  };

  const getTotalSteps = () => {
    if (selectedRoles.length === 1 && selectedRoles[0]?.title.en === "Seeker") {
      return 2;
    }
    return 3;
  };

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

    const fetchRegisterNGOData = async () => {
      setLoading(true);
      try {
        const res = await fetchRegisterNGOTranslation();
        setRegisterNGOrTranslationData(res.data);
      } catch (err) {
        handleError(err);
      } finally {
        setLoading(false);
      }
    };

    if (currentStep === 1) {
      fetchData();
    } else if (
      currentStep >= 2 &&
      selectedRoles.length > 0 &&
      (selectedRoles.some((r) => r.title.en === "Seeker") ||
        selectedRoles.some((r) => r.title.en === "Helper")) &&
      !selectedRoles.some((r) => r.title.en === "NGO")
    ) {
      fetchRegisterHelperData();
    } else if (
      currentStep >= 2 &&
      selectedRoles.some((r) => r.title.en === "NGO")
    ) {
      fetchRegisterNGOData();
    }
  }, [currentStep, selectedRoles]);

  if (loading) return <Loader />;

  return (
    <section className="registration-steps-wrapper mt-[60px] flex-1">
      {step1TranslationData && (
        <div className="max-w-4xl mx-auto pt-8 pb-8">
          <h2 className="custom-gradient-text text-4xl font-bold">
            {step1TranslationData.header.title[language]}
          </h2>
          <p className="custom-gradient-text text-xl mt-2">
            {step1TranslationData.header.subtitle[language]}
          </p>

          <div className="mt-8 text-center">
            <p
              className="text-start text-lg font-semibold text-gray-600 mb-0"
              style={{ height: "29px" }}
            >
              {selectedRoles.length > 0 && getStepCount()}
            </p>

            <Progress value={getProgressValue()} />

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

                      const isSelected = selectedRoles.some(
                        (r) => r.title.en === value.title.en
                      );

                      return (
                        <div
                          key={key}
                          onClick={() => handleRoleClick(value)}
                          className={`
                            cursor-pointer register_role_selector_container p-6 
                            w-full md:w-[31%] bg-white shadow-md rounded-lg 
                            transition-all duration-400 ease-in-out 
                            border-2 border-transparent
                            hover:shadow-lg hover:border-[#f97415]
                            ${
                              isSelected
                                ? "border-blue-500 shadow-lg hover:border-blue-500"
                                : ""
                            }
                          `}
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

            {currentStep === 2 &&
              selectedRoles.length >= 1 &&
              (selectedRoles.some((r) => r.title.en === "Seeker") ||
                selectedRoles.some((r) => r.title.en === "Helper")) &&
              !selectedRoles.some((r) => r.title.en === "NGO") && (
                <>
                  <h4 className="text-2xl font-semibold mt-8 text-custom-color1">
                    {
                      registerHelperTranslationData?.commonTexts.header[
                        language
                      ]
                    }
                  </h4>
                  <p className="text-muted-color text-lg mt-1">
                    {registerHelperTranslationData?.commonTexts.desc[language]}
                  </p>

                  <RegisterHelperForm
                    registerHelperTranslationData={
                      registerHelperTranslationData
                    }
                    register={register}
                    errors={errors}
                    selectedRoles={selectedRoles}
                  />
                </>
              )}

            {currentStep === 2 &&
              selectedRoles.length >= 1 &&
              selectedRoles.some((r) => r.title.en === "NGO") && (
                <>
                  <h4 className="text-2xl font-semibold mt-8 text-custom-color1">
                    {registerNGOTranslationData?.commonTexts.header[language]}
                  </h4>
                  <p className="text-muted-color text-lg mt-1">
                    {registerNGOTranslationData?.commonTexts.desc[language]}
                  </p>

                  <RegisterNGOForm
                    registerNGOTranslationData={registerNGOTranslationData}
                    register={register}
                    errors={errors}
                    selectedRoles={selectedRoles}
                  />
                </>
              )}

            {currentStep === 3 && selectedRoles.length > 0 && <></>}

            <hr className="mt-8" />
            <div className="flex justify-between mt-6">
              {currentStep > 1 ? (
                <>
                  <button
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                    className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex items-center gap-2"
                  >
                    <ArrowLeft size={16} />
                    {t.prev}
                  </button>

                  <button
                    onClick={handleNext}
                    className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center gap-2"
                  >
                    {currentStep === getTotalSteps() ? (
                      <>
                        <CheckCircle size={16} />
                        {t.complete}
                      </>
                    ) : (
                      <>
                        {t.next}
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </>
              ) : (
                <div className="flex justify-end w-full">
                  <button
                    onClick={handleNext}
                    disabled={selectedRoles.length === 0}
                    className={`
                      px-6 py-2 rounded-lg text-white font-semibold transition-all duration-300 flex items-center gap-2
                      ${
                        selectedRoles.length > 0
                          ? "bg-gradient-to-r from-[#fd843d] to-[#f97415] hover:from-[#f97415] hover:to-[#fd843d]"
                          : "bg-[#fd843d]/50 cursor-not-allowed"
                      }
                    `}
                  >
                    {t.next}
                    <ArrowRight size={16} />
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
