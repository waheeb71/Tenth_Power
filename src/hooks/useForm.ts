// src/hooks/useForm.ts
import { useState } from 'react';
import { ContactFormData, PreferredContactMethod } from '../types/contact';
import { sendToTelegram } from '../lib/telegramService';

export const useForm = (initialData: ContactFormData) => {
  const [data, setData] = useState<ContactFormData>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const submit = async () => {
    if (!data.name || !data.phone || !data.message) {
      setError('الرجاء تعبئة الحقول المطلوبة: الاسم، الهاتف، والرسالة.');
      return false;
    }

    setIsSubmitting(true);
    setError(null);

    const success = await sendToTelegram(data);

    setIsSubmitting(false);
    if (success) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      return true;
    } else {
      setError('فشل الإرسال. يرجى المحاولة لاحقًا.');
      return false;
    }
  };

  return {
    data,
    setData,
    handleChange,
    submit,
    isSubmitting,
    isSubmitted,
    error
  };
};