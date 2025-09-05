// Form validation utilities

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^(\+966|966|0)?[5-9]\d{8}$/;
  return phoneRegex.test(phone.replace(/\s+/g, ''));
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export const validateMinLength = (value: string, minLength: number): boolean => {
  return value.trim().length >= minLength;
};

export const validateMaxLength = (value: string, maxLength: number): boolean => {
  return value.trim().length <= maxLength;
};

export interface ValidationRule {
  validator: (value: string) => boolean;
  message: string;
}

export interface FormValidation {
  [key: string]: ValidationRule[];
}

export const validateForm = (data: Record<string, string>, rules: FormValidation): Record<string, string> => {
  const errors: Record<string, string> = {};

  Object.keys(rules).forEach(field => {
    const value = data[field] || '';
    const fieldRules = rules[field];

    for (const rule of fieldRules) {
      if (!rule.validator(value)) {
        errors[field] = rule.message;
        break;
      }
    }
  });

  return errors;
};

// Common validation rules
export const commonValidationRules = {
  required: (message: string = 'هذا الحقل مطلوب'): ValidationRule => ({
    validator: validateRequired,
    message
  }),
  email: (message: string = 'البريد الإلكتروني غير صحيح'): ValidationRule => ({
    validator: validateEmail,
    message
  }),
  phone: (message: string = 'رقم الهاتف غير صحيح'): ValidationRule => ({
    validator: validatePhone,
    message
  }),
  minLength: (length: number, message?: string): ValidationRule => ({
    validator: (value: string) => validateMinLength(value, length),
    message: message || `يجب أن يكون الحد الأدنى ${length} أحرف`
  }),
  maxLength: (length: number, message?: string): ValidationRule => ({
    validator: (value: string) => validateMaxLength(value, length),
    message: message || `يجب أن يكون الحد الأقصى ${length} حرف`
  })
};