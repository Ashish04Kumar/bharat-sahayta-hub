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
    const url = new URL(config.API_ENDPOINTS.FETCH_REGISTER_HELPER_TRANSLATION)
      .href;
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
    const url = new URL(config.API_ENDPOINTS.FETCH_REGISTER_NGO_TRANSLATION)
      .href;
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
    const url = new URL(
      config.API_ENDPOINTS.FETCH_HELPER_PREFRENCES_TRANSLATION
    ).href;
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
    const url = new URL(config.API_ENDPOINTS.FETCH_LOGIN_SCREEN_TRANSLATION)
      .href;
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

export const postFormData = async (
  formData: FormData,
  currentStep: number,
  roles: string
) => {
  console.log("87i67y5t4r", formData);
  try {
    const url = new URL(config.API_ENDPOINTS.POST_FORM_DATA(currentStep, roles))
      .href;
    const response = await fetch(url, {
      method: "POST",
      body: formData,
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

    // Return the response object so you can access status in React component
    return response;
  } catch (error) {
    console.log("error", error);
    handleError(error);
    throw error;
  }
};

export const loginUser = async (loginData: Record<string, string>) => {
  try {
    const url = new URL(config.API_ENDPOINTS.LOGIN_USER).href;

    const response = await fetch(url, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(loginData),
      credentials: "include", 
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

    return response;
  } catch (error) {
    handleError(error);
    throw error; // Re-throw so React component can catch it
  }
};
export const logoutUser = async () => {
  try {
    const url = new URL(config.API_ENDPOINTS.LOGOUT_USER).href;

    const response = await fetch(url, {
      method: "POST",
      headers: getHeaders(),
      credentials: "include", 
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

    return response;
  } catch (error) {
    handleError(error);
    throw error; // Re-throw so React component can catch it
  }
};

export const fetchDashboardTranslation = async () => {
  try {
    const url = new URL(config.API_ENDPOINTS.FETCH_DASHBOARD_TRANSLATION)
      .href;
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
