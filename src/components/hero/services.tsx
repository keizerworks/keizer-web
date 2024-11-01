'use client'
import React from 'react';

const ServicesScroller = () => {
  const services = [
    {
      title: 'SaaS Application',
      description: 'Custom Software Solutions',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16V8C21 5.23858 18.7614 3 16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M3 8H21" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="7" cy="5.5" r="1" fill="currentColor"/>
          <circle cx="11" cy="5.5" r="1" fill="currentColor"/>
        </svg>
      )
    },
    {
      title: 'E-commerce',
      description: 'Online Store Solutions',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17Z" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      title: 'Digital Marketing',
      description: 'Growth Strategies',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8H8M16 8C18.2091 8 20 9.79086 20 12V18C20 20.2091 18.2091 22 16 22H8C5.79086 22 4 20.2091 4 18V12C4 9.79086 5.79086 8 8 8M16 8V6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6V8M12 13V17M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      title: 'UI/UX Design',
      description: 'User Experience',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 16L8.586 11.414C9.367 10.633 10.633 10.633 11.414 11.414L16 16M13 14L14.586 12.414C15.367 11.633 16.633 11.633 17.414 12.414L20 15M14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      title: '3D Design',
      description: 'Immersive Experiences',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 21C7.02944 21 3 16.9706 3 12M12 21C12 21 12 17 12 12M12 21C12 21 8 17 8 12M12 21C12 21 16 17 16 12M3 12C3 7.02944 7.02944 3 12 3M3 12H21M12 3C12 3 12 7 12 12M12 3C12 3 8 7 8 12M12 3C12 3 16 7 16 12M16 12C16 12 12 12 8 12" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      title: 'Web Development',
      description: 'Custom Solutions',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 7L7 17M7 7L17 17" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    }
  ];

  return (
    <div className="w-full min-h-screen relative py-16 bg-black overflow-hidden font-['Sora']">
      {/* Background with noise texture and gradient */}
      

      <div className="max-w-7xl mx-auto px-4 relative z-20 bg-black">
        <h2 className="text-5xl font-bold text-white mb-16 text-center">
          Our Services
        </h2>
     
        <div className="relative overflow-hidden">
          {/* Gradient masks for vignette effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-20"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-20"></div>
          
          <div className="flex gap-8 animate-scroll whitespace-nowrap">
            {[...services, ...services, ...services].map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 h-[320px] rounded-3xl p-8 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 relative group"
              >
                {/* Glass effect background */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.03] backdrop-blur-md border border-white/[0.05] shadow-2xl"></div>
                
                <div className="h-full flex flex-col relative z-10">
                  <div className="mb-6 text-white/75 group-hover:text-white/90 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                  
                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-6 h-6 text-white/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 7L7 17M17 7H8M17 7V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .animate-scroll {
          animation: scroll 50s linear infinite;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-288px * 6 - 2rem * 6));
          }
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ServicesScroller;