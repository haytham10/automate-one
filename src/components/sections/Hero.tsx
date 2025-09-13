import React from "react";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import ReactCountryFlag from "react-country-flag";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden min-h-screen flex items-center">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50"></div>
      
      {/* Animated background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full max-w-6xl">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-200 opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-200 opacity-20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-200 opacity-15 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full opacity-20 animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-purple-400 rounded-full opacity-25 animate-bounce" style={{animationDelay: '2.5s'}}></div>
      </div>

      <Container className="relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 text-red-700 text-sm font-semibold px-4 py-2 rounded-full mb-8 shadow-sm animate-fade-in">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse-slow"></span>
            First 3 clients → FREE 24h rush delivery
            <span className="text-base">🚨</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-slide-up text-gray-900">
            I Automate Your Boring Tasks with{" "}
            <span className="gradient-text">Python + AI</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Stop wasting hours on spreadsheets, scraping, or repetitive DMs.
            <br className="hidden md:block" />
            <span className="font-semibold text-gray-800">Focus on growth while I handle the boring stuff.</span>
          </p>

          {/* CTA Section */}
          <div className="animate-scale-in" style={{animationDelay: '0.4s'}}>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
              <Button href="#" size="lg" className="group text-lg px-8 py-4 shadow-lg hover:shadow-xl transform transition-all duration-300">
                Get Started
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button href="#services" variant="secondary-white" size="lg" className="text-lg px-8 py-4">
                View Examples
              </Button>
            </div>
          </div>

          {/* Trust badges with country flags */}
          <div className="mt-16 pt-12 border-t border-gray-200 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <p className="text-sm text-gray-500 mb-10">Trusted by 100+ solopreneurs worldwide</p>
            
            {/* Country flags with names - optimized */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-10 max-w-lg mx-auto mb-6">
              {[
                { code: 'US', name: 'USA' },
                { code: 'GB', name: 'UK' },
                { code: 'CA', name: 'Canada' },
                { code: 'MA', name: 'Morocco' },
                { code: 'FR', name: 'France' },
                { code: 'DE', name: 'Germany' },
              ].map(({ code, name }) => (
                <div key={code} className="flex flex-col items-center space-y-1 hover:scale-110 transition-transform cursor-pointer">
                  <ReactCountryFlag countryCode={code} svg style={{width: '1.5em', height: '1.5em'}} title={code} />
                  <span className="text-xs text-gray-400">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
