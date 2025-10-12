// src/components/contact/ContactMap.tsx
import { MapPin } from 'lucide-react';

const ContactMap = () => {
  return (
    <div className="bg-gray-100 rounded-2xl p-8 text-center">
      <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">موقعنا</h3>
      <p className="text-gray-600 mb-4">
        نقع في قلب مدينة الرياض، في منطقة حيوية تسهل الوصول إلينا
      </p>

      <div className="overflow-hidden rounded-xl shadow-md" style={{ width: "100%", height: "300px" }}>
        <iframe
          title="موقعنا على الخريطة"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11592.073878266427!2d46.7414511!3d24.6381881!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM4JzE3LjUgTiA0NsKwNDQnMjkuMiJF!5e0!3m2!1sar!2s!4v169707…"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;
