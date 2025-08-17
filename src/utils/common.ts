import { config } from "./constants";

// good pattern for browser-only APIs
export const getAccessToken = () => {
  if (typeof window === "undefined") return null; // SSR-safe
  return localStorage.getItem(config.LOCAL_STORAGE_VARIABLES.ACCESS_TOKEN);
};
