"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import Image from "next/image";

const Header = () => {
  const [, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg transition-all duration-300"
      style={{ boxShadow: 'none', borderBottom: 'none' }}
      role="banner"
    >
      <Container>
  <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Image 
                src="/logo.svg" 
                alt="AutoMate.One - Agency Automation Services Logo" 
                width={32} 
                height={32} 
                className="w-8 h-8 object-contain" 
              />
            </div>
            <span className="font-bold text-xl gradient-text bg-clip-text text-transparent select-none">
              AutoMate.One
            </span>
          </div>

          {/* Navigation Links - Hidden on mobile, visible on desktop */}
          <nav className="hidden md:flex flex-1 justify-center items-center gap-10">
            {[
              { href: '#pricing', label: 'Pricing' },
              { href: '#services', label: 'Services' },
              { href: '#how-it-works', label: 'How It Works' },
              { href: '#faq', label: 'FAQ' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="transition-colors font-medium duration-300 text-gray-700 hover:text-cyan-600 px-2 py-1 rounded"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <Button
            href="https://calendly.com/automate-one/15min"
            variant="primary"
            external={true}
            size="md"
            className="transition-all duration-300"
            style={{ boxShadow: 'none' }}
          >
            Book a Call
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;