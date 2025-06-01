
import React from 'react';
import { MessageCircle, Phone, Video, Mail } from 'lucide-react';

const ContactActions = () => {
  const actions = [
    {
      icon: MessageCircle,
      label: 'message',
      action: () => window.open('sms:+923458299601', '_self'),
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: Phone,
      label: 'call',
      action: () => window.open('tel:+923458299601', '_self'),
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: Video,
      label: 'video',
      action: () => window.open('facetime:+923458299601', '_self'),
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      icon: Mail,
      label: 'mail',
      action: () => window.open('mailto:wasil1996@gmail.com', '_self'),
      color: 'bg-red-500 hover:bg-red-600'
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
            className={`${action.color} text-white p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex flex-col items-center space-y-2`}
          >
            <IconComponent size={24} />
            <span className="text-xs font-medium capitalize">{action.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ContactActions;
