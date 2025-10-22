"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  AlertCircle,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  FileText,
  Upload,
  Building,
  Hash,
  Globe,
} from "lucide-react";

import { RegisterHelperDataType } from "@/types/register-user";
import { selectedRolesTranslation } from "@/fixtures/registration/registration-translation";

type RegisterHelperFormProps = {
  registerNGOTranslationData: RegisterHelperDataType;
  register: any;
  errors: any;
  selectedRoles: any;
};

const RegisterNGOForm: React.FC<RegisterHelperFormProps> = ({
  registerNGOTranslationData,
  register,
  errors,
  selectedRoles,
}) => {
  const { language } = useLanguage();

  const getFieldIcon = (fieldName: string) => {
    const iconMap: Record<string, any> = {
      name: User,
      email: Mail,
      phone: Phone,
      address: MapPin,
      date: Calendar,
      bio: FileText,
      file: Upload,
      city: Building,
      registrationnumber: Hash,
      website: Globe,
      organizationdesc: FileText,
    };

    for (const key in iconMap) {
      if (fieldName.toLowerCase().includes(key)) return iconMap[key];
    }

    return User;
  };

  console.log("i675u65yt4r", selectedRoles);

  return (
    <div className="w-full bg-white border border-input shadow-md rounded-xl overflow-hidden mt-4 p-6 pt-8">
      <form className="register-helper-form">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {registerNGOTranslationData &&
            Object.entries(registerNGOTranslationData?.formFields)
              .sort(([, a], [, b]) => a.sequence - b.sequence)
              .map(([, field], idx) => {
                const IconComponent = getFieldIcon(field.name);

                const fullWidthFields = [
                  "city",
                  "registrationNumber",
                  "website",
                  "organizationDesc",
                ];
                const isFullWidth = fullWidthFields.includes(field.name);

                return (
                  <div
                    className={`form-group space-y-2 ${
                      isFullWidth ? "lg:col-span-2 pr-0 pl-0" : ""
                    }`}
                    key={idx}
                  >
                    <label className="text-md font-semibold text-[#374151] flex items-center gap-1">
                      {field.label[language]}{" "}
                      {field.required && (
                        <span className="text-red-500">*</span>
                      )}
                    </label>
                    <div className="relative">
                      <IconComponent className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />

                      {field.type === "textarea" ? (
                        <textarea
                          {...register(field.name)}
                          placeholder={field.placeholder[language]}
                          rows={4}
                          className="w-full pl-10 pr-2 py-[10px] border-[1.3px] border-input rounded-xl bg-white text-[#374151] placeholder-[#9ca3af]"
                        />
                      ) : field.type === "dropdown" ? (
                        <div className="relative">
                          <IconComponent className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9ca3af] z-10" />
                          <select
                            {...register(field.name, {
                              required: field.required,
                            })}
                            className="w-full pl-10 pr-2 py-[10px] border-2 border-input rounded-xl bg-white text-[#374151] focus:border-[#e97431] focus:ring-4 focus:ring-[#e97431]/10 focus:outline-none transition-all duration-300 appearance-none cursor-pointer text-base"
                          >
                            <option value="" disabled>
                              {field.placeholder[language]}
                            </option>
                            {field.name === "state" &&
                              registerNGOTranslationData.indianStates.map(
                                (option: any, i: number) => (
                                  <option key={i} value={option.value}>
                                    {option.label[language]}
                                  </option>
                                )
                              )}
                          </select>
                        </div>
                      ) : field.type === "file" ? (
                        <div className="relative">
                          <label
                            htmlFor={field.name}
                            className="w-full pl-10 pr-2 py-[10px] border-[1.3px] border-input rounded-xl bg-white text-[#374151] cursor-pointer flex items-center justify-between"
                          >
                            <span className="truncate text-muted-color text-[15px]">
                              {field.placeholder[language]}
                            </span>
                          </label>
                          <Upload className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
                          <input
                            id={field.name}
                            type="file"
                            {...register(field.name)}
                            className="hidden"
                          />
                        </div>
                      ) : (
                        <input
                          type={field.type === "file" ? "file" : "text"}
                          {...register(field.name)}
                          placeholder={field.placeholder[language]}
                          className="w-full pl-10 pr-2 py-[10px] border-[1.3px] border-input rounded-xl bg-white text-[#374151]"
                        />
                      )}
                    </div>
                    {errors[field.name] && (
                      <div className="text-start flex items-center gap-2 mt-2 text-red-600">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <p className="text-sm font-medium">
                          {errors[field.name]?.message}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
        </div>
        <hr className="mt-4" />
        <p className="mt-4 text-md font-semibold text-[#374151] flex items-center gap-1">
          {selectedRolesTranslation[language]}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {selectedRoles.map((obj: any, index: number) => {
            return (
              <span
                key={index}
                className="inline-block text-white text-sm font-medium px-3 py-1 rounded-full"
                style={{ backgroundColor: "#9470db" }}
              >
                {obj.title[language]}
              </span>
            );
          })}
        </div>
      </form>
    </div>
  );
};

export default RegisterNGOForm;
