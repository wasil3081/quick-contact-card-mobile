import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { generateVCard } from '../utils/vCardGenerator';

const SaveContactButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  const handleSaveContact = () => {
    const vCardData = generateVCard();

    // Always download the .vcf file
    const blob = new Blob([vCardData], { type: 'text/x-vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Wasil_Anwar.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    // Show tooltip after click (on non-iOS)
    if (!isIOS) {
      setShowTooltip(true);
    }
  };

  return (
    <div className="w-full flex flex-col items-center space-y-2">
      <button
        onClick={handleSaveContact}
        className="w-full bg-gradient-to-r from-gray-700 to-gray-600 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 border border-gray-500"
      >
        <Download size={24} />
        <span>{isIOS ? 'Save Contact' : 'Download Contact'}</span>
      </button>
      {showTooltip && !isIOS && (
        <p className="text-sm text-gray-300 text-center">Open the downloaded ".vcf" file to save it to your Contacts.</p>
      )}
    </div>
  );
};

export default SaveContactButton;
