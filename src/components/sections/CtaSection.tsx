import React from "react";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { SparklesIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

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
                <RocketLaunchIcon className="w-10 h-10 text-white" />
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
            Join <span className="font-bold text-cyan-600">100+ entrepreneurs</span> who&apos;ve already automated their boring tasks.
            <br />
            <span className="font-semibold text-gray-800 text-xl">Start with just $39 - no setup fees, no monthly charges.</span>
          </p>

          {/* Enhanced CTA Buttons with better hierarchy */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in" style={{animationDelay: '0.4s'}}>
            <Button 
              href="#" 
              size="lg"
              className="group relative bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white text-lg px-8 py-4 shadow-xl hover:shadow-2xl hover:scale-[1.05] transform transition-all duration-300 font-semibold"
            >
              Start Automating for $39 →
            </Button>
            <Button 
              href="#services" 
              variant="secondary" 
              size="lg"
              className="border-2 border-gray-700 text-gray-700 hover:bg-white hover:border-cyan-400 hover:text-cyan-600 backdrop-blur-sm text-lg px-8 py-4 font-medium transition-all duration-300 hover:shadow-lg"
            >
              See Examples First
            </Button>
          </div>

          {/* Enhanced trust indicators with premium styling */}
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.6s'}}>
            {[
              { color: 'green', text: '48h Delivery', icon: '⚡' },
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
