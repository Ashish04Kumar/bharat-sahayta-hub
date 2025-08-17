import { RegisterHelperDataType } from "@/types/register-user";
import React from "react";

const RegisterHelperForm = ({
  registerHelperTranslationData,
}: {
  registerHelperTranslationData: RegisterHelperDataType;
}) => {
  console.log("tgeef", registerHelperTranslationData);
  return <div>RegisterHelperForm</div>;
};

export default RegisterHelperForm;
