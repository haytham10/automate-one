import React from "react";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { SparklesIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const CtaSection = () => {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Enhanced background with layered gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
      </div>
      
      {/* Enhanced background decoration with better positioning */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-cyan-100/30 to-blue-100/30 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Enhanced icon accent with better visual appeal */}
          <div className="flex justify-center mb-8 animate-scale-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative p-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl shadow-xl">
                <Image 
                  src="/logo.svg" 
                  alt="AutoMate.One Logo" 
                  width={64} 
                  height={64} 
                  className="w-16 h-16 object-contain filter brightness-0 invert" 
                />
              </div>
              <div className="absolute -top-2 -right-2 p-1.5 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full shadow-lg animate-bounce-gentle">
                <SparklesIcon className="w-4 h-4 text-gray-800" />
              </div>
            </div>
          </div>

          {/* Enhanced main heading with better typography */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up">
            Save Hours Every Week
            <br />
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Let&apos;s Automate Together
            </span>
          </h2>

          {/* Enhanced subheading with better contrast */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            <span className="font-bold text-cyan-600">New studio, fast turnarounds, code included, 30‑day support.</span>
            <br />
            <span className="font-semibold text-gray-800 text-xl">Get started today - no setup fees, no monthly charges.</span>
          </p>

          {/* Enhanced CTA Buttons with better hierarchy */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in" style={{animationDelay: '0.4s'}}>
            <Button 
              href="https://calendly.com/automate-one/15min" 
			  external={true}
              size="lg"
              className="group relative bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white text-lg px-8 py-4 shadow-xl hover:shadow-2xl hover:scale-[1.05] transform transition-all duration-300 font-semibold"
            >
              Book 15-min Call
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              href="https://wa.me/212658377929?text=Hi%20AutoMate.One!%20I'm%20interested%20in%20automating%20my%20business%20processes.%20Can%20you%20help%20me?" 
              variant="secondary" 
              size="lg"
              className="group !border-2 !border-green-500 !bg-green-500 !text-white hover:!bg-green-600 hover:!border-green-600 !backdrop-blur-sm !text-lg !px-8 !py-4 !font-medium transition-all duration-300 hover:shadow-lg hover:scale-[1.02] flex items-center gap-2"
              external={true}
            >
              <svg className="w-5 h-5 !text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.548"/>
              </svg>
              <span className="!text-white">Chat on WhatsApp</span>
            </Button>
          </div>

          {/* Enhanced trust indicators with premium styling */}
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.6s'}}>
            {[
              { color: 'green', text: 'Fast Delivery', icon: '⚡' },
              { color: 'blue', text: 'Money Back Guarantee', icon: '🛡️' },
              { color: 'cyan', text: 'Source Code Included', icon: '💾' }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-full border border-gray-200 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                <span className="text-sm text-gray-700 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CtaSection;
