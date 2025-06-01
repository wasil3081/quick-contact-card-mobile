
import React from 'react';

const ContactSummary = () => {
  return (
    <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-6 border border-gray-200 shadow-xl">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
      
      <div className="space-y-4 text-gray-700">
        <p className="leading-relaxed">
          Wasil Anwar is an accomplished product and technology leader with nearly a decade of 
          hands-on experience across fintech, digital banking, customer experience platforms, 
          and mobile wallet ecosystems.
        </p>
        
        <p className="leading-relaxed">
          He currently serves as Program Manager at DCore Technologies in Singapore, where he 
          is leading the development and delivery of advanced banking and wallet platforms 
          across emerging markets.
        </p>
        
        <div className="pt-4 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Info</h3>
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-gray-600">Mobile:</span>
              <span className="ml-2 text-gray-900">+92 345 8299601</span>
            </div>
            <div>
              <span className="text-gray-600">Email:</span>
              <span className="ml-2 text-gray-900">wasil1996@gmail.com</span>
            </div>
            <div>
              <span className="text-gray-600">Work:</span>
              <span className="ml-2 text-gray-900">wasil.anwar@din.global</span>
            </div>
            <div>
              <span className="text-gray-600">LinkedIn:</span>
              <a 
                href="https://www.linkedin.com/in/wasilanwar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-2 text-gray-800 hover:text-gray-600 underline"
              >
                wasilanwar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSummary;
