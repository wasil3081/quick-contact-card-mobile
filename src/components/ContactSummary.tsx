
import React from 'react';

const ContactSummary = () => {
  return (
    <div className="bg-gray-800/90 backdrop-blur-lg rounded-lg p-6 border border-gray-700 shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-4">About</h2>
      
      <div className="space-y-4 text-gray-300">
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
        
        <div className="pt-4 border-t border-gray-600">
          <h3 className="text-lg font-semibold text-white mb-2">Contact Info</h3>
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-gray-400">Mobile:</span>
              <span className="ml-2 text-gray-200">+92 345 8299601</span>
            </div>
            <div>
              <span className="text-gray-400">Email:</span>
              <span className="ml-2 text-gray-200">wasil1996@gmail.com</span>
            </div>
            <div>
              <span className="text-gray-400">Work:</span>
              <span className="ml-2 text-gray-200">wasil.anwar@din.global</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSummary;
