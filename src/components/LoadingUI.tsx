import React from "react";
import Image from "next/image";

const LoadingUI: React.FC = () => {
  return (
    <div className="bg-white w-1/3 flex items-center justify-center h-[84vh]">
      <Image
        src="/images/mobile-preview.svg"
        alt="mobile preview"
        width={300}
        height={300}
      />
    </div>
  );
};

export default LoadingUI;
{
  /* <div className="bg-white w-3/4 h-3/4 rounded-lg shadow-lg p-4">
        <div className="bg-gray-300 h-12 w-full mb-4 rounded"></div>
        <div className="bg-gray-300 h-12 w-full mb-4 rounded"></div>
        <div className="bg-gray-300 h-12 w-full mb-4 rounded"></div>
        <div className="bg-gray-300 h-12 w-full mb-4 rounded"></div>
        <div className="bg-gray-300 h-12 w-full mb-4 rounded"></div>
      </div> */
}
