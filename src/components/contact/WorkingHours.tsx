// src/components/contact/WorkingHours.tsx
import { Clock } from 'lucide-react';

const WorkingHours = () => (
  <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8">
    <Clock className="w-12 h-12 text-amber-600 mb-4" />
    <h3 className="text-xl font-semibold text-gray-900 mb-4">ساعات العمل</h3>
    <div className="space-y-2 text-gray-700">
      <div className="flex justify-between"><span>الأحد - الخميس</span><span>8:00 ص - 6:00 م</span></div>
      <div className="flex justify-between"><span>الجمعة</span><span>مغلق</span></div>
      <div className="flex justify-between"><span>السبت</span><span>9:00 ص - 3:00 م</span></div>
    </div>
  </div>
);

export default WorkingHours;