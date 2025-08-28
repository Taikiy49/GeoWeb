import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Robin M. Lim',
      title: 'President & CEO',
      email: 'rlim@geolabs.net',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop'
    },
    {
      name: 'Gerald Y. Seki',
      title: 'Vice President',
      email: 'gerald@geolabs.net',
      image: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop'
    },
    {
      name: 'John Y.L. Chen',
      title: 'Senior Engineer',
      email: 'john.chen@geolabs.net',
      image: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop'
    },
    {
      name: 'Payton Klinzki',
      title: 'Project Manager',
      email: 'payton.klinzki@geolabs.net',
      image: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop'
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-800 mb-4">OUR TEAM</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Meet the experienced professionals behind GeoLabs' success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
            >
              {/* Photo */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Social Links - appear on hover */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-center space-x-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="bg-white/90 p-3 rounded-full hover:bg-yellow-500 transition-colors duration-200"
                    >
                      <Mail size={18} className="text-slate-800" />
                    </a>
                    <button className="bg-white/90 p-3 rounded-full hover:bg-yellow-500 transition-colors duration-200">
                      <Linkedin size={18} className="text-slate-800" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{member.name}</h3>
                <p className="text-yellow-600 font-semibold mb-3">{member.title}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="text-slate-600 hover:text-yellow-600 transition-colors duration-200 text-sm"
                >
                  {member.email}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-600 mb-6">
            Join our team of geotechnical engineering experts
          </p>
          <button className="bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-700 transition-colors duration-200">
            View Career Opportunities
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;