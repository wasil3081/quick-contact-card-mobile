
import React from 'react';
import { Linkedin } from 'lucide-react';

const ContactCard = () => {
  return (
    <div className="bg-gray-800/90 backdrop-blur-lg rounded-xl p-8 text-center border border-gray-700 shadow-xl">
      <div className="relative mb-6">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-600 shadow-lg">
          <img 
            src="/lovable-uploads/cd5607a9-7109-4e36-867d-8dd0d1849375.png"
            alt="Wasil Anwar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="flex items-center justify-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-white">
          Wasil Anwar
        </h1>
        <a 
          href="https://www.linkedin.com/in/wasilanwar" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          <Linkedin size={28} />
        </a>
      </div>
      
      <p className="text-gray-300 text-lg mb-1">
        Product Consultant | Program Manager
      </p>
      
      <p className="text-gray-400 text-base">
        Linkr | DCore
      </p>
    </div>
  );
};

export default ContactCard;
