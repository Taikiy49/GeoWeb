import React from 'react';
import { Building2, HardHat, Search } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Building2 size={48} />,
      title: 'Design',
      description: 'Comprehensive geotechnical engineering design services including foundation analysis, slope stability, and soil mechanics.',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Foundation Design', 'Slope Stability Analysis', 'Soil Testing', 'Structural Analysis']
    },
    {
      icon: <HardHat size={48} />,
      title: 'Construction Support',
      description: 'On-site construction support services ensuring project success through expert monitoring and quality assurance.',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Site Monitoring', 'Quality Control', 'Safety Oversight', 'Progress Reporting']
    },
    {
      icon: <Search size={48} />,
      title: 'Forensic',
      description: 'Forensic investigation services for foundation failures, landslides, and other geotechnical-related issues.',
      image: 'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Failure Analysis', 'Expert Testimony', 'Investigation Reports', 'Remediation Planning']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-800 mb-4">SERVICES</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Delivering comprehensive geotechnical engineering solutions with five decades of expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors duration-300"></div>
                <div className="absolute top-6 left-6 bg-yellow-500 p-4 rounded-lg text-slate-900">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-700">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-slate-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-slate-700 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;