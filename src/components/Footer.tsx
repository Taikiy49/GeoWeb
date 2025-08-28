import React from 'react';
import { MapPin, Phone, Mail, Award, Calendar, Users } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    'Geotechnical Investigation',
    'Foundation Design',
    'Slope Stability Analysis',
    'Construction Monitoring',
    'Forensic Engineering',
    'Environmental Services'
  ];

  const certifications = [
    'Professional Engineering License',
    'ASTM Standards Certified',
    'ISO 9001:2015 Quality Management',
    'OSHA Safety Certified'
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-yellow-500 p-3 rounded-lg">
                <div className="text-slate-900 font-bold text-xl">50</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">GEOLABS, INC.</h3>
                <p className="text-slate-300">Geotechnical Engineering And Drilling Services</p>
                <p className="text-yellow-500 font-semibold text-sm">50TH ANNIVERSARY</p>
              </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
              Since 1975, GeoLabs has been Hawaii's premier geotechnical engineering firm, 
              providing comprehensive soil mechanics, foundation design, and drilling services 
              throughout the Pacific Basin.
            </p>

            {/* Company Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-slate-800 rounded-lg">
                <Calendar className="mx-auto text-yellow-500 mb-2" size={24} />
                <div className="text-2xl font-bold">1975</div>
                <div className="text-xs text-slate-400">Established</div>
              </div>
              <div className="text-center p-4 bg-slate-800 rounded-lg">
                <Users className="mx-auto text-yellow-500 mb-2" size={24} />
                <div className="text-2xl font-bold">80+</div>
                <div className="text-xs text-slate-400">Team Members</div>
              </div>
              <div className="text-center p-4 bg-slate-800 rounded-lg">
                <Award className="mx-auto text-yellow-500 mb-2" size={24} />
                <div className="text-2xl font-bold">16</div>
                <div className="text-xs text-slate-400">Awards Won</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-yellow-500 transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Certifications */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-yellow-500 mt-1 flex-shrink-0" />
                <div className="text-sm text-slate-300">
                  <div>94-429 Koaki Street, Suite 200</div>
                  <div>Waipahu, HI 96797</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-yellow-500 flex-shrink-0" />
                <a
                  href="tel:8086773554"
                  className="text-slate-300 hover:text-yellow-500 transition-colors duration-200 text-sm"
                >
                  808.677.3554
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-yellow-500 flex-shrink-0" />
                <a
                  href="mailto:hawaii@geolabs.net"
                  className="text-slate-300 hover:text-yellow-500 transition-colors duration-200 text-sm"
                >
                  hawaii@geolabs.net
                </a>
              </div>
            </div>

            <h5 className="font-bold mb-3 text-yellow-500">Certifications</h5>
            <ul className="space-y-2">
              {certifications.map((cert, index) => (
                <li key={index} className="text-xs text-slate-400">{cert}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2025 GeoLabs, Inc. All rights reserved. | Licensed Professional Engineers
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-yellow-500 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-yellow-500 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-yellow-500 transition-colors duration-200">
                Safety Standards
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;