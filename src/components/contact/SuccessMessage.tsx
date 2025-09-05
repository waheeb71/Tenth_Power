// src/components/contact/SuccessMessage.tsx
import { CheckCircle } from 'lucide-react';

const SuccessMessage = () => (
  <div className="text-center py-8">
    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
    <h3 className="text-xl font-semibold text-gray-900 mb-2">تم الإرسال بنجاح!</h3>
    <p className="text-gray-600">سيتم التواصل معكم في أقرب وقت ممكن</p>
  </div>
);

export default SuccessMessage;