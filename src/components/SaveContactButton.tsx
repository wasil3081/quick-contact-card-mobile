import React from 'react';
import { Download } from 'lucide-react';
import { generateVCard } from '../utils/vCardGenerator';

const SaveContactButton = () => {
  const isAndroid = /Android/i.test(navigator.userAgent);

  if (isAndroid) {
    return null; // Hide the button on Android devices
  }

  const handleSaveContact = () => {
    const vCardData = generateVCard();

    // Directly download the .vcf file
    const blob = new Blob([vCardData], { type: 'text/x-vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Wasil_Anwar.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleSaveContact}
      className="w-full bg-gradient-to-r from-gray-700 to-gray-600 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 border border-gray-500"
    >
      <Download size={24} />
      <span>Save Contact</span>
    </button>
  );
};

export default SaveContactButton;
