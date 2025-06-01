
import React from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';

const ContactActions = () => {
  const actions = [
    {
      icon: MessageCircle,
      label: 'message',
      action: () => window.open('sms:+923458299601', '_self'),
      color: 'bg-blue-600 hover:bg-blue-500'
    },
    {
      icon: Phone,
      label: 'call',
      action: () => window.open('tel:+923458299601', '_self'),
      color: 'bg-green-600 hover:bg-green-500'
    },
    {
      icon: null,
      iconImage: '/lovable-uploads/fe4488e5-da78-4084-977d-dfb23a4f8b1f.png',
      label: 'WhatsApp',
      action: () => window.open('https://wa.me/923458299601', '_blank'),
      color: 'bg-emerald-600 hover:bg-emerald-500'
    },
    {
      icon: Mail,
      label: 'mail',
      action: () => window.open('mailto:wasil1996@gmail.com', '_self'),
      color: 'bg-red-600 hover:bg-red-500'
    }
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {actions.map((action, index) => {
        const IconComponent = action.icon;
        return (
          <button
            key={index}
            onClick={action.action}
            className={`${action.color} text-white p-4 rounded-md transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex flex-col items-center space-y-2`}
          >
            {action.iconImage ? (
              <img src={action.iconImage} alt={action.label} className="w-6 h-6" />
            ) : (
              <IconComponent size={24} />
            )}
            <span className="text-xs font-medium capitalize">{action.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ContactActions;
