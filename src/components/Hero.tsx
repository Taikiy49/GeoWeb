import React from 'react';
import { ArrowRight, Award, Users, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-slate-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          GEOTECHNICAL
          <span className="block text-yellow-400">ENGINEERING</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
          50 years of expertise in soil mechanics, foundation design, and drilling services across Hawaii and the Pacific Basin
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-yellow-500 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-200 flex items-center justify-center space-x-2 group">
            <span>View Our Services</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-colors duration-200">
            Contact Us Today
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-center space-x-3">
            <div className="bg-yellow-500 p-3 rounded-full">
              <Award className="text-slate-900" size={24} />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm opacity-80">Years Experience</div>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-3">
            <div className="bg-yellow-500 p-3 rounded-full">
              <Users className="text-slate-900" size={24} />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold">80+</div>
              <div className="text-sm opacity-80">Expert Staff</div>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-3">
            <div className="bg-yellow-500 p-3 rounded-full">
              <MapPin className="text-slate-900" size={24} />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold">4</div>
              <div className="text-sm opacity-80">Office Locations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;