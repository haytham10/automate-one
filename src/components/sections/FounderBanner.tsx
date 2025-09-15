import React from "react";
import { Container } from "../ui/Container";
import { SparklesIcon } from "@heroicons/react/24/outline";

const FounderBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-orange-50 via-red-50 to-pink-50 border-y border-orange-200/50 py-4">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-100/20 to-red-100/20"></div>
      
      <Container className="relative z-10">
        <div className="flex items-center justify-center gap-3 text-center">
          <div className="flex items-center gap-2">
            <div className="p-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full shadow-sm">
              <SparklesIcon className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium text-orange-800">
              Founder Rate:
            </span>
          </div>
          <span className="text-sm text-gray-700">
            First 3 agencies get their first automation for{" "}
            <span className="font-bold text-red-600">$199</span>{" "}
            <span className="text-gray-500 line-through">(regular $299)</span>
          </span>
          <div className="hidden sm:flex items-center gap-1 text-xs text-orange-600 font-medium bg-orange-100 px-2 py-1 rounded-full">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            Limited time
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FounderBanner;