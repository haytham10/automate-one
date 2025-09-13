import React from "react";
import { Container } from "../ui/Container";
import { 
  EnvelopeIcon, 
  MapPinIcon
} from "@heroicons/react/24/outline";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-600">
      <Container className="py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-xl mb-3 text-gray-900">
              AutoMate.One
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Python automation specialist helping businesses save time.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MapPinIcon className="w-4 h-4" />
              <span>Morocco • Available worldwide</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-cyan-600 transition-colors">Web Scraping</a></li>
              <li><a href="#" className="hover:text-cyan-600 transition-colors">Data Processing</a></li>
              <li><a href="#" className="hover:text-cyan-600 transition-colors">API Integration</a></li>
              <li><a href="#" className="hover:text-cyan-600 transition-colors">Custom Scripts</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Get in Touch</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="flex items-center gap-2 hover:text-cyan-600 transition-colors">
                <EnvelopeIcon className="w-4 h-4" />
                Start a Project
              </a>
              <div className="space-y-1 pt-2">
                <a href="#" className="block hover:text-cyan-600 transition-colors">LinkedIn</a>
                <a href="#" className="block hover:text-cyan-600 transition-colors">GitHub</a>
                <a href="#" className="block hover:text-cyan-600 transition-colors">Fiverr</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} AutoMate.One. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-cyan-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-cyan-600 transition-colors">Terms</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
