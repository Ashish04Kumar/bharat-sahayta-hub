import toast from "react-hot-toast";
import { config } from "./constants";

export function iterateObject(obj: Record<string, any>): string {
  let errorMessage: string = "";
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((msg) => {
          if (typeof msg === "string") {
            errorMessage +=
              key[0].toUpperCase() + key.slice(1) + " " + msg + "\n";
          } else if (Array.isArray(msg) && typeof msg[0] === "string") {
            errorMessage +=
              key[0].toUpperCase() + key.slice(1) + " " + msg[0] + "\n";
          } else if (typeof msg === "object") {
            errorMessage += iterateObject(msg);
          }
        });
      } else if (typeof value === "object") {
        errorMessage += iterateObject(value);
      } else if (typeof value === "string") {
        errorMessage += value + "\n";
      }
    }
  }
  return errorMessage;
}

export const handleError = (error: string) => {
  // console.log("978i6u54", error);
  // const lang = localStorage.getItem("appLang") || "en";
  toast.error(error);
};
