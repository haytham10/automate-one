import React from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { howItWorks } from "@/lib/constants";
import { 
  CheckCircleIcon, 
  ClockIcon, 
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  CogIcon,
  RocketLaunchIcon
} from "@heroicons/react/24/outline";

const stepIcons = [ChatBubbleLeftRightIcon, CogIcon, RocketLaunchIcon];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50 to-white">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-slide-up text-gray-900">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in mb-6" style={{animationDelay: '0.2s'}}>
            From problem to solution in 3 simple steps. No technical knowledge required.
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium px-4 py-2 rounded-full animate-fade-in" style={{animationDelay: '0.4s'}}>
            <ClockIcon className="w-4 h-4" />
            Most automations delivered within days, not weeks
          </div>
        </div>
        
        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">          
          <div className="space-y-16 lg:space-y-0">
            {howItWorks.map((step, index) => {
              const IconComponent = stepIcons[index];
              const isEven = index % 2 === 0;
              
              return (
                <div key={step.step} className="relative">                  
                  <div className={`lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center ${
                    index % 2 === 1 ? 'lg:text-right' : ''
                  }`}>
                    {/* Content */}
                    <div className={`animate-slide-up ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`} style={{animationDelay: `${0.2 + (index * 0.3)}s`}}>
                      <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                        {/* Step indicator */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white font-bold text-lg rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                            {step.step}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-cyan-600 font-medium">
                            <ClockIcon className="w-4 h-4" />
                            {step.timeframe}
                          </div>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-cyan-700 transition-colors text-left">
                          {step.title}
                        </h3>
                        
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed text-left">
                          {step.description}
                        </p>

                        {/* Details list */}
                        <div className="space-y-3">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Icon/Visual */}
                    <div className={`hidden lg:flex items-center justify-center animate-scale-in ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`} style={{animationDelay: `${0.4 + (index * 0.3)}s`}}>
                      <div className="relative">
                        {/* Main icon */}
                        <div className="flex items-center justify-center w-32 h-32 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                          <IconComponent className="w-16 h-16 text-cyan-600" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile step separation */}
                  {index < howItWorks.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-12 mb-4">
                      <ArrowRightIcon className="w-6 h-6 text-cyan-400 rotate-90 animate-pulse" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center animate-fade-in" style={{animationDelay: '1.2s'}}>
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 border border-cyan-200 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Automate Your Workflow?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              New studio, fast turnarounds, code included, 30‑day support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="https://calendly.com/automate-one/15min" external={true} variant="primary" size="lg" className="group">
                Start Your Automation
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircleIcon className="w-4 h-4 text-green-500" />
                Money-back guarantee
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
