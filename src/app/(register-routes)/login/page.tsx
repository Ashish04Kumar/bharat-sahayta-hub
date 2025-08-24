"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useLanguage } from "@/context/LanguageContext";
import { fetchLoginScreenTranslation } from "@/services/service-clients";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

// ✅ Validation schema with Zod
const schema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .nonempty("Password is required"),
});

type FormData = z.infer<typeof schema>;

// List of images
const images = [
  "/images/help_arrived.jpeg",
  "/images/ngo_camp.jpeg",
  "/images/poor_person.jpeg",
  "/images/stray_animal.jpeg",
];

const Page = () => {
  const router = useRouter();
  const { language } = useLanguage();
  const [loginScreenTranslationData, setLoginScreenTranslationData] = useState<
    Record<string, Record<string, string | string[]>>
  >({});

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchLoginScreenTranslation();
      setLoginScreenTranslationData(resp);
    };
    fetchData();
  }, []);

  console.log("8i67uy6t", loginScreenTranslationData);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <section className="registration-steps-wrapper mt-[60px] flex-1 pt-8 pb-8">
      {Object.keys(loginScreenTranslationData).length > 0 && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto justify-center ">
          {/* Left Side - Swiper */}
          <div
            className="hidden md:flex bg-blue-100 rounded-xl justify-center items-center relative"
            style={{ height: "550px" }}
          >
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              spaceBetween={0}
              slidesPerView={1}
              className="rounded-xl overflow-hidden w-full h-full"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-full bg-gray-200 rounded-xl overflow-hidden relative">
                    <Image
                      src={img}
                      alt={`Slide ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="absolute bottom-16 left-5 z-10 text-white pointer-events-none">
              <h2 className="text-3xl font-extrabold">
                {loginScreenTranslationData?.data.appName?.[language]}
              </h2>
              <p className="text-lg opacity-90 font-bold">
                {loginScreenTranslationData?.data.appDesc?.[language]}
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="container">
            <h2 className="text-start custom-gradient-text text-4xl font-bold">
              {loginScreenTranslationData?.data.welcomeBack?.[language]}
            </h2>
            <p className="text-start custom-gradient-text text-xl mt-2">
              {loginScreenTranslationData?.data.choosePath?.[language]}
            </p>

            <div className=" mt-[20px] md:mt-[40px]  p-6 rounded-lg border bg-card text-card-foreground shadow-sm border-hope/20 shadow-elegant">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Email */}
                <div className="form-group ">
                  <label className="text-md font-semibold text-[#374151] flex items-center gap-1">
                    {loginScreenTranslationData?.data.email?.[language]}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
                    <input
                      type="email"
                      {...register("email")}
                      placeholder={
                        loginScreenTranslationData?.data.enterEmail?.[language]
                      }
                      className="w-full pl-10 pr-2 py-[10px] border-[1.3px] border-input rounded-xl bg-white text-[#374151]"
                    />
                  </div>
                  {errors.email && (
                    <div className="text-start flex items-center gap-2 mt-2 text-red-600">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <p className="text-sm font-medium">
                        {errors.email.message}
                      </p>
                    </div>
                  )}
                </div>

                {/* Password */}
                <div className="form-group space-y-2">
                  <label className="text-md font-semibold text-[#374151] flex items-center gap-1">
                    {loginScreenTranslationData?.data.password?.[language]}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
                    <input
                      type="password"
                      {...register("password")}
                      placeholder={
                        loginScreenTranslationData?.data.enterPassword?.[
                          language
                        ]
                      }
                      className="w-full pl-10 pr-2 py-[10px] border-[1.3px] border-input rounded-xl bg-white text-[#374151]"
                    />
                  </div>
                  {errors.password && (
                    <div className="text-start flex items-center gap-2 mt-2 text-red-600">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <p className="text-sm font-medium">
                        {errors.password.message}
                      </p>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  style={{
                    background:
                      "linear-gradient(81deg, rgb(35, 219, 164) 0%, rgb(68, 68, 68) 62%)",
                  }}
                  className="w-full py-3 bg-[#9470db] text-white font-semibold rounded-xl shadow-md hover:bg-[#7b5ec1] transition-all"
                >
                  Submit
                </button>
              </form>
              <div className="text-center mt-5 text-base flex gap-3 justify-center">
                <button className="text-black text-center">
                  {loginScreenTranslationData?.data.forgotPassword?.[language]}
                </button>
                <button
                  className="text-[14px] text-muted-color"
                  onClick={() => router.push("/register-user")}
                >
                  {" "}
                  {loginScreenTranslationData?.data.signupPrompt?.[language]}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Page;
