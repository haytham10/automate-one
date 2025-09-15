import React from "react";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Hero = () => {
  return (
    <section 
      className="relative pt-20 pb-16 md:pt-24 md:pb-24 lg:pt-32 lg:pb-32 overflow-hidden min-h-screen flex items-center"
      role="banner"
      aria-labelledby="hero-heading"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50" aria-hidden="true"></div>
      
      {/* Animated background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full max-w-6xl" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-200 opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-200 opacity-20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-200 opacity-15 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full opacity-20 animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-purple-400 rounded-full opacity-25 animate-bounce" style={{animationDelay: '2.5s'}}></div>
      </div>

      <Container className="relative">
        <div className="text-center max-w-4xl mx-auto">

          {/* Main heading */}
          <h1 
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-slide-up text-gray-900"
          >
            I Automate Your Boring Tasks with{" "}
            <span className="gradient-text">Python + AI</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Stop wasting hours on spreadsheets, scraping, or repetitive DMs.
            <br />
            <span className="font-semibold text-gray-900"> Focus on growth while I handle the boring stuff.</span>
          </p>

          {/* Intro Video Section */}
          <div className="mb-12 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative max-w-2xl mx-auto">
              <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl border border-gray-300">
                {/* Placeholder for Loom video - replace with actual embed */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-50 to-blue-50">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-gray-600 font-medium">Watch 60s Intro Video</p>
                    <p className="text-sm text-gray-500">See how we automate your workflows</p>
                  </div>
                </div>
                {/* 
                Replace this placeholder with actual Loom embed:
                <iframe 
                  src="https://www.loom.com/embed/YOUR_LOOM_VIDEO_ID"
                  frameBorder="0" 
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
                */}
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-20"></div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="animate-scale-in" style={{animationDelay: '0.4s'}}>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch md:items-center mb-6">
              <Button href="https://calendly.com/automate-one/15min" external={true} size="lg" className="group text-lg px-8 py-4 shadow-lg hover:shadow-xl transform transition-all duration-300 w-full md:w-auto">
                Get Started
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button href="#pricing" variant="secondary" size="lg" className="text-lg px-8 py-4 border-2 hover:shadow-lg transform transition-all duration-300 w-full md:w-auto">
                View Pricing
              </Button>
            </div>
            
            {/* Scroll indicator */}
            <div className="mt-16 animate-fade-in" style={{animationDelay: '0.8s'}}>
              <a href="#pricing" className="inline-flex flex-col items-center text-gray-500 hover:text-gray-700 transition-colors group">
                <span className="text-sm mb-2">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center group-hover:border-gray-500 transition-colors">
                  <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce group-hover:bg-gray-600 transition-colors"></div>
                </div>
              </a>
            </div>
          </div>

          {/* Trust badges with integration icons */}
          <div className="mt-16 pt-12 border-t border-gray-200 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <p className="text-sm text-gray-500 mb-10">New studio, fast turnarounds, code included, 30‑day support.</p>
            
            <p className="text-sm font-medium text-gray-700 mb-6">Works with</p>
            
            {/* Integration icons */}
            <div className="grid grid-cols-4 md:grid-cols-8 gap-6 max-w-4xl mx-auto mb-6">
              {[
                { name: 'GA4', icon: '/icons/google_analytics.png' },
                { name: 'Meta', icon: '/icons/meta.png' },
                { name: 'Google Ads', icon: '/icons/google_ads.png' },
                { name: 'Google Sheets', icon: '/icons/google_sheets.png' },
                { name: 'Slack', icon: '/icons/slack.png' },
                { name: 'HubSpot', icon: '/icons/hubspot.png' },
                { name: 'ClickUp', icon: '/icons/clickup.png' },
                { name: 'Shopify', icon: '/icons/shopify.png' },
              ].map(({ name, icon }) => (
                <div key={name} className="flex flex-col items-center space-y-2 hover:scale-110 transition-transform cursor-pointer">
                  <div className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center border border-gray-200 hover:shadow-lg transition-shadow p-2">
                    <Image 
                      src={icon} 
                      alt={`${name} integration - Connect ${name} with AutoMate.One automation services`} 
                      width={24} 
                      height={24} 
                      className="w-6 h-6 object-contain"
                      loading="lazy"
                      sizes="(max-width: 768px) 24px, 24px"
                    />
                  </div>
                  <span className="text-xs text-gray-500 text-center">{name}</span>
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
