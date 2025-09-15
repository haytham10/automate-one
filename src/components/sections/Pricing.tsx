"use client";

import React from "react";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import {
  ChartBarIcon,
  DocumentTextIcon,
  CpuChipIcon,
  ClockIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";

// Tool icons helper component
const ToolIcons = ({ icons }: { icons: string[] }) => (
  <div className="flex flex-wrap justify-center gap-2 mb-4">
    {icons.map((icon, i) => (
      <div key={i} className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200">
        <Image src={icon} alt="Tool" width={20} height={20} className="w-5 h-5 object-contain" />
      </div>
    ))}
  </div>
);

interface Tier {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  examples: string[];
  icons: string[];
  price: string;
  originalPrice?: string; // for founder rate
  timeframe: string;
  popular?: boolean;
  scarcity?: string | null;
  iconComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const tiers: Tier[] = [
  {
    id: "pro",
    title: "Pro Build",
    description: "When you need multi-source automations with write-backs and moderate scraping complexity.",
    features: [
      "Multi-source data flows",
      "Write-back + auth complexity",
      "Moderate scraping",
      "Advanced scheduling",
      "Error handling & logging",
      "Documentation + handoff"
    ],
    examples: [
      "GA4 + Meta + Google Ads → dashboard + PDF export",
      "Scrape + enrich → push to HubSpot/Sheets",
      "Marketing + sales dataset sync"
    ],
    icons: [
      "/icons/google_analytics.png",
      "/icons/meta.png",
      "/icons/hubspot.png",
      "/icons/google_sheets.png"
    ],
    price: "$599–$799",
    timeframe: "10–14 days",
    popular: false,
    iconComponent: ChartBarIcon,
    scarcity: null
  },
  {
    id: "starter",
    title: "Starter Automation",
    description: "Your first automation: focused, fast, and built for immediate leverage.",
    features: [
      "1 source → 1 destination",
      "Up to 3 steps",
      "Scheduler + Slack/Email",
      "Code repo + Loom walkthrough",
      "30‑day support",
      "Light error alerts"
    ],
    examples: [
      "Ad spend → Slack at 6am",
      "Clutch leads → Sheet + dedupe + alert",
      "Weekly CSV cleanup → formatted PDF"
    ],
    icons: [
      "/icons/google_ads.png",
      "/icons/slack.png",
      "/icons/google_sheets.png"
    ],
    price: "$199",
    originalPrice: "$299",
    timeframe: "5–7 days",
    popular: true,
    iconComponent: DocumentTextIcon,
    scarcity: "2 of 3 founder slots left this month"
  },
  {
    id: "custom",
    title: "Custom Solutions",
    description: "For complex workflows, multi-account rollups, advanced AI, or bespoke integrations.",
    features: [
      "Complex multi-step chains",
      "Multi-account rollups",
      "Bespoke API builds",
      "Advanced AI pipelines",
      "Custom dashboards",
      "Scalable architecture"
    ],
    examples: [
      "Multi-brand reporting consolidation",
      "Advanced AI content pipeline",
      "Complex API orchestration"
    ],
    icons: [
      "/icons/shopify.png",
      "/icons/clickup.png",
      "/icons/hubspot.png"
    ],
    price: "from $1,200",
    timeframe: "2–4 weeks",
    popular: false,
    iconComponent: CpuChipIcon,
    scarcity: null
  }
];

const Pricing = () => {
  return (
    <Section className="py-20 md:py-28 bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Pricing</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Transparent founder-friendly pricing. Your automation includes source code, documentation, and support.
          </p>
        </div>

        {/* Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map(tier => {
            const Icon = tier.iconComponent;
            return (
              <div key={tier.id} className="relative flex flex-col">
                {/* Card */}
                <div
                  className={`relative h-full p-6 ${tier.popular ? 'pt-12 ring-2 ring-cyan-500 shadow-xl lg:scale-[1.02]' : ''} bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col transition-all duration-300 ${!tier.popular ? 'hover:shadow-xl lg:hover:scale-[1.02]' : ''}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-md">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-5">
                    <div className={`inline-flex p-3 rounded-2xl mb-4 ${tier.popular ? 'bg-gradient-to-r from-cyan-100 to-blue-100' : 'bg-gray-100'}`}>
                      <Icon className={`w-8 h-8 ${tier.popular ? 'text-cyan-600' : 'text-gray-600'}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{tier.description}</p>
                  </div>

                  <ToolIcons icons={tier.icons} />

                  <div className="space-y-2 mb-5">
                    {tier.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <div className="mt-1 w-1.5 h-1.5 bg-cyan-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Examples:</h4>
                    {tier.examples.map((ex, i) => (
                      <div key={i} className="text-xs text-gray-600 mb-1">• {ex}</div>
                    ))}
                  </div>

                  <div className="mt-auto border-t pt-5">
                    <div className="text-center mb-4">
                      <div className="mt-2 flex flex-row-reverse items-end justify-center gap-1">
                        <span className="text-3xl font-extrabold text-gray-900">{tier.price}</span>
                        {/* {tier.originalPrice && (
                          <span className="text-xs md:text-sm line-through text-gray-400">{tier.originalPrice}</span>
                        )} */}
                      </div>
                      <div className="flex items-center justify-center gap-1 text-sm text-gray-500 mt-2">
                        <ClockIcon className="w-4 h-4" /> {tier.timeframe}
                      </div>
                      {tier.scarcity && (
                        <div className="text-xs text-orange-600 font-medium mt-2">{tier.scarcity}</div>
                      )}
                    </div>

                    <Button
                      href="https://calendly.com/automate-one/15min"
                      external
                      variant={tier.popular ? 'primary' : 'secondary'}
                      size="md"
                      className="w-full mb-2"
                    >
                      Book this build
                    </Button>
                    <a href="#services" className="block text-center text-xs text-cyan-600 hover:text-cyan-700 transition-colors">
                      See what&#39;s included
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500 mt-12">
          <div className="flex items-center gap-1"><CodeBracketIcon className="w-4 h-4" />Code included</div>
          <div className="flex items-center gap-1"><ShieldCheckIcon className="w-4 h-4" />Money-back guarantee</div>
          <div className="flex items-center gap-1"><CurrencyDollarIcon className="w-4 h-4" />No monthly fees</div>
        </div>
      </Container>
    </Section>
  );
};

export default Pricing;