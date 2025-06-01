
import React from 'react';

const ContactCard = () => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center border border-white/20 shadow-2xl">
      <div className="relative mb-6">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-xl">
          <img 
            src="/lovable-uploads/cd5607a9-7109-4e36-867d-8dd0d1849375.png"
            alt="Wasil Anwar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <h1 className="text-3xl font-bold text-white mb-2">
        Wasil Anwar
      </h1>
      
      <p className="text-blue-200 text-lg mb-1">
        Product Consultant | Program Manager
      </p>
      
      <p className="text-blue-300 text-base">
        Linkr | DCore
      </p>
    </div>
  );
};

export default ContactCard;
