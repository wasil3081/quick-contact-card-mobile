import React from 'react';
import { Download } from 'lucide-react';
import { generateVCard } from '../utils/vCardGenerator';

const SaveContactButton = () => {
  const handleSaveContact = async () => {
    const vCardData = generateVCard();
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const file = new File([blob], 'Wasil_Anwar.vcf', { type: 'text/vcard' });

    if (
      navigator.share &&
      navigator.canShare &&
      navigator.canShare({ files: [file] })
    ) {
      try {
        await navigator.share({
          title: 'Save Contact',
          text: 'Add Wasil Anwar to your contacts.',
          files: [file],
        });
      } catch (error) {
        console.error('Sharing failed:', error);
      }
    } else {
      // fallback for unsupported devices/browsers
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Wasil_Anwar.vcf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }
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
