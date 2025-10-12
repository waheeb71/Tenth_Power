// src/components/contact/ContactInfo.tsx
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  { icon: Phone, title: 'الهاتف', content: '+966 532438253', href: 'tel:+966532438253' },
  { icon: Mail, title: 'البريد الإلكتروني', content: 'Zjajkryt78@gmail.com', href: 'mailto:Zjajkryt78@gmail.com' },
  { icon: MapPin, title: 'العنوان', content: 'الرياض، المملكة العربية السعودية', href: '#' },
  
];

const ContactInfo = () => (
  <div className="space-y-6">
    {contactInfo.map((info, index) => (
      <div
        key={index}
        className="flex items-start space-x-4 rtl:space-x-reverse p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
      >
        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <info.icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
          {info.href !== '#' ? (
            <a href={info.href} className="text-gray-600 hover:text-amber-600 transition-colors">
              {info.content}
            </a>
          ) : (
            <p className="text-gray-600">{info.content}</p>
          )}
        </div>
      </div>
    ))}
  </div>
);

export default ContactInfo;