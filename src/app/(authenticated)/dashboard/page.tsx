"use client";
import { withAuth } from "@/utils/withAuth";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="dashboard-wrapper mt-[60px] flex-1 pt-8 pb-8">
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/images/construction.gif"
          alt="Under Construction"
          className="text-center"
          height={220}
          width={220}
        />
        <p className="stay-tuned-txt text-gray-500 ">
          The authentication, registration, and login flow has been implemented.
          Working on the rest of the functionality for this website. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default page;
