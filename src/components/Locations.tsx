import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Locations: React.FC = () => {
  const locations = [
    {
      city: 'Oahu',
      address: '94-429 Koaki Street, Suite 200',
      city_state: 'Waipahu, HI 96797',
      phone: '808.677.3554',
      email: 'hawaii@geolabs.net',
      mapUrl: 'https://images.pexels.com/photos/15922301/pexels-photo-15922301.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      city: 'Maui',
      address: '780 Alua Street, 1st Floor',
      city_state: 'Wailuku, Maui, HI 96793',
      phone: '808.244.4435',
      email: 'maui@geolabs.net',
      mapUrl: 'https://images.pexels.com/photos/15922300/pexels-photo-15922300.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      city: 'Kauai',
      address: '1659 Haleukana Street, Unit #5',
      city_state: 'Lihue, HI 96766',
      phone: '808.335.5161 or 808.639.3480',
      email: 'kauai@geolabs.net',
      mapUrl: 'https://images.pexels.com/photos/15922299/pexels-photo-15922299.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      city: 'Oakland',
      address: '344 20th Street, Suite 340',
      city_state: 'Oakland, CA 94612',
      phone: '510.710.3140',
      email: 'oakland@geolabs.net',
      mapUrl: 'https://images.pexels.com/photos/15922298/pexels-photo-15922298.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  return (
    <section id="locations" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">LOCATIONS</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Strategically located to serve Hawaii and the Pacific Basin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Map Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={location.mapUrl}
                  alt={`${location.city} location`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/20"></div>
                <div className="absolute top-4 left-4 bg-yellow-500 text-slate-900 px-3 py-1 rounded-full font-bold text-sm">
                  {location.city}
                </div>
              </div>

              {/* Location Details */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">{location.city} Office</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin size={20} className="text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-slate-800 font-medium">{location.address}</div>
                      <div className="text-slate-600">{location.city_state}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone size={20} className="text-yellow-600 flex-shrink-0" />
                    <a
                      href={`tel:${location.phone.replace(/[^\d]/g, '')}`}
                      className="text-slate-800 hover:text-yellow-600 transition-colors duration-200"
                    >
                      {location.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail size={20} className="text-yellow-600 flex-shrink-0" />
                    <a
                      href={`mailto:${location.email}`}
                      className="text-slate-800 hover:text-yellow-600 transition-colors duration-200"
                    >
                      {location.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock size={20} className="text-yellow-600 flex-shrink-0" />
                    <div className="text-slate-600">
                      Mon - Fri: 8:00 AM - 5:00 PM
                    </div>
                  </div>
                </div>

                <button className="w-full mt-6 bg-yellow-500 text-slate-900 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200">
                  Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center">
          <div className="bg-yellow-500 text-slate-900 p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">24/7 Emergency Services</h3>
            <p className="mb-4">Need immediate geotechnical support? We're here to help.</p>
            <a
              href="tel:8088773554"
              className="inline-flex items-center bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-200"
            >
              <Phone size={20} className="mr-2" />
              Call Emergency Line
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;