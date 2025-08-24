"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Stethoscope,
  DollarSign,
  Utensils,
  AlertTriangle,
  Pill,
  Truck,
  TrendingUp,
  PawPrint,
  Heart,
} from "lucide-react";

type RegisterHelperFormProps = {
  registerHelperPrefrencesTranslationData: any;
  register: any;
  errors: any;
  selectedRoles: any;
};

const RegisterHelperPrefrencesForm: React.FC<RegisterHelperFormProps> = ({
  registerHelperPrefrencesTranslationData,
  register,
  errors,
  // selectedRoles,
}) => {
  const { language } = useLanguage();

  console.log("87i7uy64", errors);
  const getHelpCategoriesIcon = (name: string): React.ReactNode => {
    switch (name) {
      case "healthcare":
        return <Stethoscope className="w-5 h-5 text-red-500" />;
      case "financialAid":
        return <DollarSign className="w-5 h-5 text-green-500" />;
      case "foodHelp":
        return <Utensils className="w-5 h-5 text-orange-500" />;
      case "emergencySos":
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case "medicines":
        return <Pill className="w-5 h-5 text-blue-500" />;
      case "transportPickup":
        return <Truck className="w-5 h-5 text-purple-500" />;
      case "crowdFunding":
        return <TrendingUp className="w-5 h-5 text-indigo-500" />;
      case "animalHelp":
        return <PawPrint className="w-5 h-5 text-gray-700" />;
      default:
        return null;
    }
  };

  const renderError = (fieldName: string) => {
    if (errors?.[fieldName]) {
      return (
        <div className="text-start flex items-center gap-2 mt-2 text-red-600">
          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
          <p className="text-sm font-medium">{errors[fieldName]?.message}</p>
        </div>
      );
    }
    return null;
  };
  return (
    <div className=" overflow-hidden mt-4   pt-8">
      {registerHelperPrefrencesTranslationData && (
        <form className="register-helper-form grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white border border-input shadow-sm rounded-xl  p-4 pt-6">
            <div className="flex gap-2">
              <Heart color="red" />
              <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
                {
                  registerHelperPrefrencesTranslationData?.helpCategories
                    .header[language]
                }
              </h3>
              {registerHelperPrefrencesTranslationData?.helpCategories
                .formFields.required && <span className="text-red-500">*</span>}
            </div>
            <p className="text-left ml-1 mt-2 text-sm text-muted-color">
              {
                registerHelperPrefrencesTranslationData?.helpCategories
                  .subHeader[language]
              }
            </p>
            <div className="mt-8">
              {registerHelperPrefrencesTranslationData.helpCategories.formFields.fields.map(
                (obj, idx: number) => {
                  return (
                    <div
                      className="flex items-center space-x-3 p-3 rounded-lg border-2 transition-all duration-300 cursor-pointer border-transparent hover:border-primary/20 hover:bg-gray-50"
                      key={idx}
                    >
                      <input
                        id={obj.name}
                        type="checkbox"
                        value={obj.name}
                        {...register(registerHelperPrefrencesTranslationData.helpCategories.formFields
                  .commonFieldName)}
                      />
                      {getHelpCategoriesIcon(obj.name)}
                      <label
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer font-medium"
                        htmlFor={obj.name}
                      >
                        {obj.label[language]}
                      </label>
                    </div>
                  );
                }
              )}
            </div>
            {renderError(registerHelperPrefrencesTranslationData.helpCategories.formFields
                  .commonFieldName)}
          </div>
          <div className="flex flex-col gap-5">
            <div className="bg-white border border-input shadow-sm rounded-xl  p-4 pt-6">
              <div className="flex gap-2">
                <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
                  {
                    registerHelperPrefrencesTranslationData?.availability
                      .header[language]
                  }
                  {registerHelperPrefrencesTranslationData?.availability
                    .formFields.required && (
                    <span className="text-red-500">*</span>
                  )}
                </h3>
              </div>
              <p className="text-left ml-1 mt-2 text-sm text-muted-color">
                {
                  registerHelperPrefrencesTranslationData?.availability
                    .subHeader[language]
                }
              </p>
              <div className="mt-8">
                <select
                  {...register(
                    registerHelperPrefrencesTranslationData.availability
                      .formFields.name
                  )}
                  defaultValue=""
                  className="w-full pl-10 pr-2 py-[10px] border-2 border-input rounded-xl bg-white text-[#374151] focus:border-[#e97431] focus:ring-4 focus:ring-[#e97431]/10 focus:outline-none transition-all duration-300 appearance-none cursor-pointer text-base"
                >
                  <option value="" disabled hidden>
                    {
                      registerHelperPrefrencesTranslationData.availability
                        .formFields.dropdownText[language]
                    }
                  </option>

                  {registerHelperPrefrencesTranslationData.availability.formFields.options.map(
                    (option: any, i: number) => (
                      <option key={i} value={option.name}>
                        {option.label[language]}
                      </option>
                    )
                  )}
                </select>
              </div>
              {renderError(
                registerHelperPrefrencesTranslationData.availability.formFields
                  .name
              )}
            </div>
            <div className="bg-white border border-input shadow-sm rounded-xl  p-4 pt-6">
              <div className="flex gap-2">
                <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
                  {
                    registerHelperPrefrencesTranslationData?.locationRange
                      .header[language]
                  }
                </h3>
                {registerHelperPrefrencesTranslationData?.locationRange
                  .formFields.required && (
                  <span className="text-red-500">*</span>
                )}
              </div>
              <p className="text-left ml-1 mt-2 text-sm text-muted-color">
                {
                  registerHelperPrefrencesTranslationData?.locationRange
                    .subHeader[language]
                }
              </p>
              <div className="mt-8">
                <select
                  {...register(
                    registerHelperPrefrencesTranslationData.locationRange
                      .formFields.name
                  )}
                  defaultValue=""
                  className="w-full pl-10 pr-2 py-[10px] border-2 border-input rounded-xl bg-white text-[#374151] focus:border-[#e97431] focus:ring-4 focus:ring-[#e97431]/10 focus:outline-none transition-all duration-300 appearance-none cursor-pointer text-base"
                >
                  <option value="" disabled hidden>
                    {
                      registerHelperPrefrencesTranslationData.locationRange
                        .formFields.dropdownText[language]
                    }
                  </option>

                  {registerHelperPrefrencesTranslationData.locationRange.formFields.options.map(
                    (option: any, i: number) => (
                      <option key={i} value={option.name}>
                        {option.label[language]}
                      </option>
                    )
                  )}
                </select>
              </div>
              {renderError(
                registerHelperPrefrencesTranslationData.locationRange.formFields
                  .name
              )}
            </div>
            <div className="bg-white border border-input shadow-sm rounded-xl  p-4">
              <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
                {
                  registerHelperPrefrencesTranslationData?.typeOfHelp.header[
                    language
                  ]
                }
              </h3>
              {registerHelperPrefrencesTranslationData?.typeOfHelp.formFields
                .required && <span className="text-red-500">*</span>}
              <p className="text-left ml-1 mt-2 text-sm text-muted-color">
                {
                  registerHelperPrefrencesTranslationData?.typeOfHelp.subHeader[
                    language
                  ]
                }
              </p>
              <div className="mt-8">
                {registerHelperPrefrencesTranslationData.typeOfHelp.formFields.fields.map(
                  (obj, idx) => {
                    return (
                      <div
                        className="flex items-center space-x-3 p-3 rounded-lg border-2 transition-all duration-300 cursor-pointer border-transparent hover:border-primary/20 hover:bg-gray-50"
                        key={idx}
                      >
                        <input
                          id={obj.name}
                          type={obj.type}
                          value={obj.name}
                          {...register(
                            registerHelperPrefrencesTranslationData.typeOfHelp
                              .formFields.commonFieldName
                          )}
                        />
                        <label
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer font-medium"
                          htmlFor={obj.name}
                        >
                          {obj.label[language]}
                        </label>
                      </div>
                    );
                  }
                )}
              </div>
              {renderError(
                registerHelperPrefrencesTranslationData.typeOfHelp.formFields
                  .commonFieldName
              )}
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default RegisterHelperPrefrencesForm;
