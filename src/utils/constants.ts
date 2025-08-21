export const API_VERSION = "api/v1";
export const BASE_API_ENDPOINT = `${process.env.NEXT_PUBLIC_API_URL}/${API_VERSION}`;
export const config = {
  AUTH: {
    COOKIE_NAME: "__AT__",
  },
  LOCAL_STORAGE_VARIABLES: {
    USER__UUID: "user_uuid",
    COOKIE_CHOICE: "cookie_choice",
    ACCESS_TOKEN: "access_token",
    USER_FULLNAME: "user_fullname",
  },
  MESSAGES: {
    INVALID_LOGIN_CREDENTIALS: {
      en: "Invalid email or password",
      hi: "अमान्य ईमेल या पासवर्ड",
      pa: "ਗਲਤ ਈਮੇਲ ਜਾਂ ਪਾਸਵਰਡ",
      ta: "தவறான மின்னஞ்சல் அல்லது கடவுச்சொல்",
      bn: "অবৈধ ইমেল বা পাসওয়ার্ড",
    },
    ACCESS_TOKEN_EXPIRED: {
      en: "Access token expired. Please login again",
      hi: "एक्सेस टोकन समाप्त हो गया। कृपया फिर से लॉगिन करें",
      pa: "ਐਕਸੈੱਸ ਟੋਕਨ ਦੀ ਮਿਆਦ ਖਤਮ ਹੋ ਗਈ। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਲਾਗਇਨ ਕਰੋ",
      ta: "அணுகல் டோக்கன் காலாவதியானது. தயவுசெய்து மீண்டும் உள்நுழைக",
      bn: "অ্যাক্সেস টোকেনের মেয়াদ শেষ হয়েছে। আবার লগইন করুন",
    },
    USER_EMAIL_VERIFIED: {
      en: "Email verified successfully",
      hi: "ईमेल सफलतापूर्वक सत्यापित किया गया",
      pa: "ਈਮੇਲ ਸਫਲਤਾਪੂਰਵਕ ਪ੍ਰਮਾਣਿਤ ਹੋ ਗਿਆ",
      ta: "மின்னஞ்சல் வெற்றிகரமாக சரிபார்க்கப்பட்டது",
      bn: "ইমেল সফলভাবে যাচাই হয়েছে",
    },
    USER_LOGIN_SUCCESS: {
      en: "Great to see you!",
      hi: "आपसे मिलकर अच्छा लगा!",
      pa: "ਤੁਹਾਨੂੰ ਵੇਖ ਕੇ ਖੁਸ਼ੀ ਹੋਈ!",
      ta: "உங்களை சந்திப்பதில் மகிழ்ச்சி!",
      bn: "আপনাকে দেখে ভালো লাগলো!",
    },
    OTP_RESENT_SUCCESS: {
      en: "OTP sent successfully",
      hi: "ओटीपी सफलतापूर्वक भेजा गया",
      pa: "ਓਟੀਪੀ ਸਫਲਤਾਪੂਰਵਕ ਭੇਜਿਆ ਗਿਆ",
      ta: "OTP வெற்றிகரமாக அனுப்பப்பட்டது",
      bn: "OTP সফলভাবে পাঠানো হয়েছে",
    },
    OTP_RESENT_FAIL: {
      en: "Unable to send OTP",
      hi: "ओटीपी भेजने में असमर्थ",
      pa: "ਓਟੀਪੀ ਭੇਜਣ ਵਿੱਚ ਅਸਮਰੱਥ",
      ta: "OTP அனுப்ப முடியவில்லை",
      bn: "OTP পাঠাতে ব্যর্থ",
    },
    INVALID_OTP: {
      en: "Invalid OTP",
      hi: "अमान्य ओटीपी",
      pa: "ਗਲਤ ਓਟੀਪੀ",
      ta: "தவறான OTP",
      bn: "অবৈধ OTP",
    },
    GENERIC_ERROR: {
      en: "Something went wrong",
      hi: "कुछ गलत हो गया",
      pa: "ਕੁਝ ਗਲਤ ਹੋ ਗਿਆ",
      ta: "ஏதோ தவறு நடந்துள்ளது",
      bn: "কিছু ভুল হয়েছে",
    },
    FORM_SUBMITTED_SUCCESS: {
      en: "Form submitted successfully",
      hi: "फॉर्म सफलतापूर्वक सबमिट हुआ",
      pa: "ਫਾਰਮ ਸਫਲਤਾਪੂਰਵਕ ਜਮ੍ਹਾਂ ਹੋ ਗਿਆ",
      ta: "படிவம் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது",
      bn: "ফর্ম সফলভাবে জমা হয়েছে",
    },
    PASSWORD_RESET_SUCCESS: {
      en: "Password reset successfully. Please login",
      hi: "पासवर्ड सफलतापूर्वक रीसेट हुआ। कृपया लॉगिन करें",
      pa: "ਪਾਸਵਰਡ ਸਫਲਤਾਪੂਰਵਕ ਰੀਸੈਟ ਹੋ ਗਿਆ। ਕਿਰਪਾ ਕਰਕੇ ਲਾਗਇਨ ਕਰੋ",
      ta: "கடவுச்சொல் வெற்றிகரமாக மீட்டமைக்கப்பட்டது. தயவுசெய்து உள்நுழைக",
      bn: "পাসওয়ার্ড সফলভাবে রিসেট হয়েছে। অনুগ্রহ করে লগইন করুন",
    },
    PASSWORD_CHANGE_SUCCESS: {
      en: "Password changed successfully",
      hi: "पासवर्ड सफलतापूर्वक बदला गया",
      pa: "ਪਾਸਵਰਡ ਸਫਲਤਾਪੂਰਵਕ ਬਦਲਿਆ ਗਿਆ",
      ta: "கடவுச்சொல் வெற்றிகரமாக மாற்றப்பட்டது",
      bn: "পাসওয়ার্ড সফলভাবে পরিবর্তিত হয়েছে",
    },
    PASSWORS_SET_SUCCESS: {
      en: "Password has been set successfully. Please login",
      hi: "पासवर्ड सफलतापूर्वक सेट किया गया है। कृपया लॉगिन करें",
      pa: "ਪਾਸਵਰਡ ਸਫਲਤਾਪੂਰਵਕ ਸੈੱਟ ਕੀਤਾ ਗਿਆ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਲਾਗਇਨ ਕਰੋ",
      ta: "கடவுச்சொல் வெற்றிகரமாக அமைக்கப்பட்டது. தயவுசெய்து உள்நுழைக",
      bn: "পাসওয়ার্ড সফলভাবে সেট করা হয়েছে। অনুগ্রহ করে লগইন করুন",
    },
    UNABLE_TO_LOAD_DATA: {
      en: "Unable to load data",
      hi: "डेटा लोड करने में असमर्थ",
      pa: "ਡਾਟਾ ਲੋਡ ਕਰਨ ਵਿੱਚ ਅਸਮਰੱਥ",
      ta: "தரவை ஏற்ற முடியவில்லை",
      bn: "ডেটা লোড করা যায়নি",
    },
    USER_EMAIL_UPDATE_SUCCESS: {
      en: "User email updated successfully. Please login again",
      hi: "यूज़र ईमेल सफलतापूर्वक अपडेट हुआ। कृपया दोबारा लॉगिन करें",
      pa: "ਯੂਜ਼ਰ ਈਮੇਲ ਸਫਲਤਾਪੂਰਵਕ ਅਪਡੇਟ ਹੋ ਗਿਆ। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਲਾਗਇਨ ਕਰੋ",
      ta: "பயனர் மின்னஞ்சல் வெற்றிகரமாக புதுப்பிக்கப்பட்டது. தயவுசெய்து மீண்டும் உள்நுழைக",
      bn: "ইউজারের ইমেল সফলভাবে আপডেট হয়েছে। আবার লগইন করুন",
    },
  },
  DEFAULT_MESSAGES: {
    TOKEN_EXPIRED: "Token expired. Please login again",
  },
  TOASTER_OPTIONS: {
    SUCCESS: {
      duration: 6000,
      style: {
        maxWidth: 450,
        borderRadius: "10px",
        background: "#14e4ea",
        color: "#fff",
      },
    },
    ERROR: {
      duration: 6000,
      style: {
        maxWidth: 450,
        borderRadius: "10px",
        background: "#CD0000",
        color: "#fff",
      },
    },
    HOLD: {
      duration: 6000,
      style: {
        maxWidth: 450,
        borderRadius: "10px",
        background: "#FFFF00",
        color: "#000",
      },
    },
  },

  STATUS: {
    UNAUTHORIZED: 401,
  },
  DEBOUNCE_TIMEOUT: 500,
  PAGINATION: {
    TYPE: "pagination",
    SIZE: 10,
    Page: 1,
  },
  Page_SIZE_OPTIONS: [10, 25, 50, 100],
  SKELETON_CONFIGURATION: {
    SKELETON_ROWS_COUNT: 5,
    SKELETON_HEIGHT: 60,
  },
  VALIDATIONS: {
    CHARS_255: 255,
    CHARS_3: 3,
    CHARS_6: 6,
    CHARS_8: 8,
    CHARS_10: 10,
  },

  LOADER_TYPES: {
    TABLE_SKELETON: "table-skeleton",
    CARD_SKELETON: "card-skeleton",
  },
  DEFAULT_TABLE_SKELETON_ROW_COUNT: 4,
  CARD_SKELETON_BASIS: 95,
  STATUS_CODES: {
    NO_CONTENT: 204,
    UNAUTHORIZED: 401,
  },
  API_ENDPOINTS: {
    FETCH_STEP1_TRANSLATION: new URL(`${BASE_API_ENDPOINT}/register-step-1-translation`),
    FETCH_REGISTER_HELPER_TRANSLATION: new URL(`${BASE_API_ENDPOINT}/register-helper-translation`),
    FETCH_REGISTER_NGO_TRANSLATION: new URL(`${BASE_API_ENDPOINT}/register-ngo-translation`),
    FETCH_HELPER_PREFRENCES_TRANSLATION: new URL(`${BASE_API_ENDPOINT}/helper-prefrences-txt`),
  },
};
