
import React from 'react';
import ContactCard from '../components/ContactCard';
import ContactActions from '../components/ContactActions';
import ContactSummary from '../components/ContactSummary';
import SaveContactButton from '../components/SaveContactButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-md">
        <div className="space-y-6">
          <ContactCard />
          <ContactActions />
          <SaveContactButton />
          <ContactSummary />
        </div>
      </div>
    </div>
  );
};

export default Index;
