// src/components/contact/ContactMap.tsx
import { MapPin } from 'lucide-react';

const ContactMap = () => (
  <div className="bg-gray-100 rounded-2xl p-8 text-center">
    <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
    <h3 className="text-xl font-semibold text-gray-900 mb-2">موقعنا</h3>
    <p className="text-gray-600">
      نقع في قلب مدينة الرياض، في منطقة حيوية تسهل الوصول إلينا
    </p>
  </div>
);

export default ContactMap;