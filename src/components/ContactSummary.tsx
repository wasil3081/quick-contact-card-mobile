
import React from 'react';

const ContactSummary = () => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-4">About</h2>
      
      <div className="space-y-4 text-blue-100">
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
        
        <div className="pt-4 border-t border-white/20">
          <h3 className="text-lg font-semibold text-white mb-2">Contact Info</h3>
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-blue-300">Mobile:</span>
              <span className="ml-2 text-white">+92 345 8299601</span>
            </div>
            <div>
              <span className="text-blue-300">Email:</span>
              <span className="ml-2 text-white">wasil1996@gmail.com</span>
            </div>
            <div>
              <span className="text-blue-300">Work:</span>
              <span className="ml-2 text-white">wasil.anwar@din.global</span>
            </div>
            <div>
              <span className="text-blue-300">LinkedIn:</span>
              <a 
                href="https://www.linkedin.com/in/wasilanwar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-2 text-blue-400 hover:text-blue-300 underline"
              >
                wasilanwar
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-4 border-t border-white/20">
          <h3 className="text-lg font-semibold text-white mb-2">Education</h3>
          <div className="space-y-1 text-sm">
            <div>M.S. in Project Management – SZABIST</div>
            <div>B.S. in Computer Science – SZABIST</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSummary;
