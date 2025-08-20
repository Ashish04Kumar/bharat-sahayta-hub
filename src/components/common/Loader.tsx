import React from "react";
import { MapPin, Heart, Users } from "lucide-react";

interface LoaderProps {
  onComplete?: () => void;
  size?: "small" | "medium" | "large";
  message?: string;
}

const Loader: React.FC<LoaderProps> = ({
  onComplete,
  size = "medium",
  message = "Loading...",
}) => {
  React.useEffect(() => {
    if (onComplete) {
      const timer = setTimeout(onComplete, 2000);
      return () => clearTimeout(timer);
    }
  }, [onComplete]);       


  const sizeClasses = {
    small: {
      container: "w-16 h-16",
      icon: "w-6 h-6",
      text: "text-sm",
      orbit: "w-20 h-20",
    },
    medium: {
      container: "w-24 h-24",
      icon: "w-8 h-8",
      text: "text-base",
      orbit: "w-32 h-32",
    },
    large: {
      container: "w-32 h-32",
      icon: "w-12 h-12",
      text: "text-lg",
      orbit: "w-40 h-40",
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-50/80 to-teal-50/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-8">
        <div className="relative flex items-center justify-center">
          <div
            className={`absolute ${currentSize.orbit} border-2 border-transparent border-t-orange-400 border-r-teal-400 rounded-full animate-spin`}
          ></div>
          <div
            className={`absolute ${currentSize.container} border-2 border-orange-200 rounded-full animate-pulse`}
          ></div>
          <div
            className={`relative ${currentSize.container} bg-gradient-to-br from-orange-500 to-teal-500 rounded-full flex items-center justify-center shadow-2xl`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-teal-400 rounded-full blur-md opacity-60 animate-pulse"></div>
            <MapPin
              className={`${currentSize.icon} text-white relative z-10 drop-shadow-lg`}
            />
          </div>
          <div
            className={`absolute ${currentSize.orbit} animate-spin`}
            style={{ animationDuration: "3s", animationDirection: "reverse" }}
          >
            <Heart className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-orange-400 animate-pulse" />
            <Users className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 text-teal-400 animate-pulse" />
          </div>
        </div>
        <div className="text-center space-y-2">
          <p
            className={`font-semibold text-gray-700 ${currentSize.text} tracking-wide`}
          >
            {message}
          </p>
          <div className="flex justify-center space-x-1">
            <div
              className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className="w-2 h-2 bg-teal-400 rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
