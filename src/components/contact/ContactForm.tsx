// src/components/contact/ContactForm.tsx
import { Send } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useForm } from '../../hooks/useForm';
import { ContactFormData } from '../../types/contact';
import SuccessMessage from './SuccessMessage';
import { useState } from 'react';

const ContactForm = () => {
  const { t } = useLanguage();

  const initialData: ContactFormData = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredMethod: 'any'
  };

  const [data, setData] = useState<ContactFormData>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!data.name || !data.phone || !data.message) {
      setError('الرجاء تعبئة الحقول المطلوبة: الاسم، الهاتف، والرسالة.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/.netlify/functions/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        // إعادة تعيين النموذج بعد 3 ثواني
        setTimeout(() => {
          setIsSubmitted(false);
          setData({ ...initialData });
        }, 3000);
      } else {
        setError(result.error || 'فشل الإرسال. يرجى المحاولة لاحقًا.');
      }
    } catch (err) {
      setError('تعذر الاتصال بالخادم. تحقق من اتصالك بالإنترنت.');
      console.error('Network error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return <SuccessMessage />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* الاسم والهاتف */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            الاسم الكامل *
          </label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            placeholder="أدخل اسمك الكامل"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            رقم الجوال *
          </label>
          <input
            type="tel"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            placeholder="+966 50 123 4567"
          />
        </div>
      </div>

      {/* البريد (اختياري) */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          البريد الإلكتروني (اختياري)
        </label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white"
          placeholder="example@email.com"
        />
      </div>

      {/* نوع الخدمة */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          نوع الخدمة
        </label>
        <select
          name="service"
          value={data.service}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
        >
          <option value="">{t('contact.form.selectService') || 'اختر نوع الخدمة'}</option>
          <option value="glass">أعمال الزجاج</option>
          <option value="aluminum">أعمال الألمنيوم</option>
          <option value="contracting">المقاولات العامة</option>
          <option value="consultation">استشارة</option>
        </select>
      </div>

      {/* طريقة التواصل */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          طريقة التواصل المفضلة
        </label>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { value: 'any', label: 'أي وسيلة' },
            { value: 'whatsapp', label: 'واتساب' },
            { value: 'phone', label: 'مكالمة' },
            { value: 'email', label: 'بريد إلكتروني' }
          ].map(({ value, label }) => (
            <label
              key={value}
              className={`p-3 border rounded-lg text-center text-sm font-medium cursor-pointer transition-all duration-200 ${
                data.preferredMethod === value
                  ? 'border-amber-500 bg-amber-50 text-amber-700'
                  : 'border-gray-300 hover:border-gray-400 text-gray-700'
              }`}
            >
              <input
                type="radio"
                name="preferredMethod"
                value={value}
                checked={data.preferredMethod === value}
                onChange={handleChange}
                className="sr-only"
              />
              {label}
            </label>
          ))}
        </div>
      </div>

      {/* الرسالة */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          الرسالة *
        </label>
        <textarea
          name="message"
          value={data.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          placeholder="أخبرنا بمشروعك أو استفسارك..."
        ></textarea>
      </div>

      {/* رسالة الخطأ */}
      {error && (
        <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
          {error}
        </div>
      )}

      {/* زر الإرسال */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse disabled:opacity-70"
      >
        <Send className="w-5 h-5" />
        <span>{isSubmitting ? 'جاري الإرسال...' : 'أرسل الرسالة'}</span>
      </button>
    </form>
  );
};

export default ContactForm;