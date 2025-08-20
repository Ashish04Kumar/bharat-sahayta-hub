type StepTranslations = {
  step: string;
  next: string;
  prev: string;
  complete: string;
};

export const stepTranslations: Record<string, StepTranslations> = {
  en: {
    step: "Step",
    next: "Next",
    prev: "Previous",
    complete: "Complete Registration",
  },
  hi: {
    step: "चरण",
    next: "आगे",
    prev: "पीछे",
    complete: "पंजीकरण पूरा करें",
  },
  pa: {
    step: "ਕਦਮ",
    next: "ਅੱਗੇ",
    prev: "ਪਿਛੇ",
    complete: "ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਪੂਰਾ ਕਰੋ",
  },
  ta: {
    step: "படி",
    next: "அடுத்து",
    prev: "முந்தைய",
    complete: "பதிவை நிறைவு செய்",
  },
  bn: {
    step: "ধাপ",
    next: "পরবর্তী",
    prev: "পূর্ববর্তী",
    complete: "নিবন্ধন সম্পূর্ণ করুন",
  },
};
export const selectedRolesTranslation = {
  en: "Selected Roles",
  hi: "चयनित भूमिकाएँ",
  ta: "தேர்ந்தெடுக்கப்பட்ட பங்குகள்",
  pa: "ਚੁਣੀਆਂ ਹੋਈਆਂ ਭੂਮਿਕਾਵਾਂ",
  bn: "নির্বাচিত ভূমিকা"
};
