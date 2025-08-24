// import { getAccessToken, getFormattedDate } from "@/utils/common";
import { config } from "@/utils/constants";
import { handleError } from "@/utils/handle-error";

const getHeaders = (): Record<string, string> => {
  const headers: Record<string, string> = {
    // "Auth-Token": getAccessToken() ?? "",
    "Content-Type": "application/json",
    "Client-Type": "web",
  };
  const lang = localStorage.getItem("appLang") || "en";
  headers["Accept-Language"] = lang;

  return headers;
};

export const fetchRegisterStep1Data = async () => {
  try {
    const url = new URL(config.API_ENDPOINTS.FETCH_STEP1_TRANSLATION).href;
    const response = await fetch(url, {
      method: "GET",
      headers: getHeaders(),
    });

    if (response.status === config.STATUS.UNAUTHORIZED) {
      localStorage.clear();
      sessionStorage.clear();

      setTimeout(() => {
        window.location.href = "/login";
      }, 3000);

      throw {
        status: config.STATUS.UNAUTHORIZED,
        message: config.MESSAGES.ACCESS_TOKEN_EXPIRED,
      };
    }

    if (!response.ok) {
      const errorBody = await response.json();
      throw errorBody?.message ? errorBody : new Error("Something went wrong");
    }

    return await response.json();
  } catch (error) {
    handleError(error);
  }
};
export const fetchRegisterHelperTranslation = async () => {
  try {
    const url = new URL(config.API_ENDPOINTS.FETCH_REGISTER_HELPER_TRANSLATION).href;
    const response = await fetch(url, {
      method: "GET",
      headers: getHeaders(),
    });

    if (response.status === config.STATUS.UNAUTHORIZED) {
      localStorage.clear();
      sessionStorage.clear();

      setTimeout(() => {
        window.location.href = "/login";
      }, 3000);

      throw {
        status: config.STATUS.UNAUTHORIZED,
        message: config.MESSAGES.ACCESS_TOKEN_EXPIRED,
      };
    }

    if (!response.ok) {
      const errorBody = await response.json();
      throw errorBody?.message ? errorBody : new Error("Something went wrong");
    }

    return await response.json();
  } catch (error) {
    handleError(error);
  }
};

export const fetchRegisterNGOTranslation = async () => {
  try {
    const url = new URL(config.API_ENDPOINTS.FETCH_REGISTER_NGO_TRANSLATION).href;
    const response = await fetch(url, {
      method: "GET",
      headers: getHeaders(),
    });

    if (response.status === config.STATUS.UNAUTHORIZED) {
      localStorage.clear();
      sessionStorage.clear();

      setTimeout(() => {
        window.location.href = "/login";
      }, 3000);

      throw {
        status: config.STATUS.UNAUTHORIZED,
        message: config.MESSAGES.ACCESS_TOKEN_EXPIRED,
      };
    }

    if (!response.ok) {
      const errorBody = await response.json();
      throw errorBody?.message ? errorBody : new Error("Something went wrong");
    }

    return await response.json();
  } catch (error) {
    handleError(error);
  }
};

export const fetchRegisterHelperPrefrencesTranslation = async () => {
  try {
    const url = new URL(config.API_ENDPOINTS.FETCH_HELPER_PREFRENCES_TRANSLATION).href;
    const response = await fetch(url, {
      method: "GET",
      headers: getHeaders(),
    });

    if (response.status === config.STATUS.UNAUTHORIZED) {
      localStorage.clear();
      sessionStorage.clear();

      setTimeout(() => {
        window.location.href = "/login";
      }, 3000);

      throw {
        status: config.STATUS.UNAUTHORIZED,
        message: config.MESSAGES.ACCESS_TOKEN_EXPIRED,
      };
    }

    if (!response.ok) {
      const errorBody = await response.json();
      throw errorBody?.message ? errorBody : new Error("Something went wrong");
    }

    return await response.json();
  } catch (error) {
    handleError(error);
  }
};
export const fetchLoginScreenTranslation = async () => {
  try {
    const url = new URL(config.API_ENDPOINTS.FETCH_LOGIN_SCREEN_TRANSLATION).href;
    const response = await fetch(url, {
      method: "GET",
      headers: getHeaders(),
    });

    if (response.status === config.STATUS.UNAUTHORIZED) {
      localStorage.clear();
      sessionStorage.clear();

      setTimeout(() => {
        window.location.href = "/login";
      }, 3000);

      throw {
        status: config.STATUS.UNAUTHORIZED,
        message: config.MESSAGES.ACCESS_TOKEN_EXPIRED,
      };
    }

    if (!response.ok) {
      const errorBody = await response.json();
      throw errorBody?.message ? errorBody : new Error("Something went wrong");
    }

    return await response.json();
  } catch (error) {
    handleError(error);
  }
};
