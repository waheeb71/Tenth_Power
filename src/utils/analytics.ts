// Google Analytics utility functions
export const gtag = (...args: any[]) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag(...args);
  }
};

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const trackPageView = (path: string) => {
  gtag('config', 'GA_TRACKING_ID', {
    page_path: path,
  });
};

// Track contact form submissions
export const trackContactSubmission = (service: string) => {
  trackEvent('form_submit', 'contact', service);
};

// Track project views
export const trackProjectView = (projectId: string, category: string) => {
  trackEvent('view_project', 'projects', `${category}_${projectId}`);
};

// Track language changes
export const trackLanguageChange = (language: string) => {
  trackEvent('language_change', 'user_preference', language);
};

// Track chatbot interactions
export const trackChatbotMessage = (messageType: string) => {
  trackEvent('chatbot_interaction', 'engagement', messageType);
};