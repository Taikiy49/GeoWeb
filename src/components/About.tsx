import React from 'react';
import { CheckCircle, Target, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    { icon: <Target size={24} />, text: 'Full service geotechnical engineering firm' },
    { icon: <Award size={24} />, text: 'Over 48 years of soil and geological experience' },
    { icon: <Users size={24} />, text: 'Employee-owned company since 1991' },
    { icon: <CheckCircle size={24} />, text: 'Outstanding record for completing projects on time' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-5xl font-bold text-slate-800 mb-4">ABOUT</h2>
            <div className="w-24 h-1 bg-yellow-500 mb-8"></div>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                GeoLabs, Inc. is a full service geotechnical engineering firm established 
                in 1975. We have assembled competent, well-trained professional staff, 
                equipment, and experienced personnel to successfully accomplish 
                projects ranging from geotechnical foundation investigations to 
                roadway embankments, dams, landslides and rockfall mitigation.
              </p>
              
              <p>
                Our company history has over 48 years of soil and geological information 
                and experience throughout Hawaii and in the Pacific Basin for use as 
                reference on future projects. We are based in Honolulu, with offices in 
                Maui and Oakland, California.
              </p>
              
              <p>
                We have an outstanding record for completing projects within the 
                required schedules. The high quality of our work is demonstrated by 
                engineering awards that we received for outstanding and innovative 
                design accomplishments.
              </p>
              
              <p className="font-semibold text-slate-800">
                GeoLabs, Inc. became an employee-owned company in 1991.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-10 space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="text-yellow-600 flex-shrink-0">
                    {highlight.icon}
                  </div>
                  <span className="text-slate-700">{highlight.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Urban development project"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <Award className="text-slate-900" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-800">16</div>
                  <div className="text-sm text-slate-600">Awards Won</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;