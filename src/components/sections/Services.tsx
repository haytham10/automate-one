import React from "react";
import Card from "../ui/Card";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { services } from "@/lib/constants";
import { PlusIcon, ClockIcon } from "@heroicons/react/24/outline";

const Services = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50" id="services">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-slide-up text-gray-900">
            What I Can Automate for You
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in mb-4" style={{animationDelay: '0.2s'}}>
            From messy spreadsheets to complex AI workflows, I turn your repetitive tasks into automated solutions.
          </p>
          <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 text-cyan-700 text-sm font-medium px-4 py-2 rounded-full animate-fade-in" style={{animationDelay: '0.4s'}}>
            <ClockIcon className="w-4 h-4" />
            Save 10-25 hours per week on average
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="animate-scale-in"
                style={{animationDelay: `${0.1 * (index + 1)}s`}}
              >
                <Card
                  title={service.title}
                  description={service.description}
                  icon={<Icon className="w-7 h-7 text-cyan-600" />}
                  className={`h-full group transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    service.isCustom 
                      ? 'bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200 shadow-lg' 
                      : 'hover:shadow-lg'
                  }`}
                >
                  {/* Features list */}
                  <div className="mt-4 space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Time saved badge */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 font-medium">Time Saved:</span>
                      <span className="text-sm font-semibold text-cyan-600">{service.timesSaved}</span>
                    </div>
                  </div>

                  {/* Custom automation CTA */}
                  {service.isCustom && (
                    <div className="mt-4">
                      <Button 
                        variant="primary" 
                        size="sm" 
                        className="w-full group-hover:scale-105 transition-transform"
                      >
                        <PlusIcon className="w-4 h-4 mr-2" />
                        Request Custom Automation
                      </Button>
                    </div>
                  )}
                </Card>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Services;
