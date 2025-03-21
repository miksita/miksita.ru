import React from "react";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

interface CentralImageProps {
  src: string;
  alt: string;
  text?: string;
}

const CentralImage: React.FC<CentralImageProps> = ({ src, alt, text }) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center sm:pl-0 sm:pt-0 pl-6 pt-4">
      <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
      {text && (
        <p
          className={`-mt-6 text-center text-2xl sm:text-4xl ${caveat.className} text-gray-800 dark:text-white`}
        >
          {text}
        </p>
      )}
    </div>
  );
};

export default CentralImage;
