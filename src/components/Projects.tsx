import React, { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const projects = [
    {
      title: 'International Marketplace',
      category: 'Commercial Development',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Major commercial complex requiring extensive foundation design and soil analysis'
    },
    {
      title: 'Honolulu High Capacity Transit',
      category: 'Transportation Infrastructure',
      image: 'https://images.pexels.com/photos/7974825/pexels-photo-7974825.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Critical transit system project with complex geotechnical challenges'
    },
    {
      title: 'Ala Moana Center Expansion',
      category: 'Retail Development',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Large-scale retail expansion requiring specialized foundation solutions'
    },
    {
      title: 'Moana Pacific',
      category: 'Residential High-Rise',
      image: 'https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Twin tower residential development with complex foundation requirements'
    },
    {
      title: 'Kamehameha School Athletic Field',
      category: 'Educational Facility',
      image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Athletic facility with specialized drainage and soil stabilization'
    },
    {
      title: 'Kahului Airport Terminal Complex',
      category: 'Aviation Infrastructure',
      image: 'https://images.pexels.com/photos/1089302/pexels-photo-1089302.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Major airport terminal requiring extensive geotechnical analysis'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(projects.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(projects.length / 3)) % Math.ceil(projects.length / 3));
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-800 mb-4">PROJECTS</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Showcasing our expertise across diverse project types throughout Hawaii and the Pacific Basin
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-yellow-400 text-sm font-semibold mb-1">{project.category}</div>
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 p-2 rounded-full">
                    <ExternalLink size={20} className="text-slate-800" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                    <div className="relative h-64">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="text-yellow-400 text-sm font-semibold mb-1">{project.category}</div>
                        <h3 className="text-white text-xl font-bold">{project.title}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-slate-600">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: projects.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-yellow-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-yellow-500 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-200">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;