import React, { useEffect, useState, useRef } from 'react';

const Statistics: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    established: 0,
    esop: 0,
    staff: 0,
    awards: 0
  });
  
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { key: 'established', label: 'Year Established', value: 1975, suffix: '' },
    { key: 'esop', label: 'Inception of ESOP', value: 1991, suffix: '' },
    { key: 'staff', label: 'Staff', value: 80, suffix: '+' },
    { key: 'awards', label: 'Awards Won', value: 16, suffix: '' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animateCount = (key: string, target: number) => {
        const duration = 2000;
        const steps = 60;
        const stepValue = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += stepValue;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          
          setCounts(prev => ({
            ...prev,
            [key]: Math.floor(current)
          }));
        }, duration / steps);
      };

      stats.forEach(stat => {
        animateCount(stat.key, stat.value);
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-yellow-500">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-slate-900 mb-2">
                {counts[stat.key as keyof typeof counts]}{stat.suffix}
              </div>
              <div className="text-lg font-semibold text-slate-800 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;