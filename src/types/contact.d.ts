// src/types/contact.d.t
 export type PreferredContactMethod = 'whatsapp' | 'phone' | 'email' | 'any';s
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
preferredMethod: PreferredContactMethod;
}