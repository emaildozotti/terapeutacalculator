declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export const PIXEL_ID = '1382214186778804';

export const initPixel = (userData?: { em?: string; ph?: string; fn?: string; ln?: string }) => {
  if (typeof window !== 'undefined') {
    const fbq = window.fbq || (window as any).fbq;
    if (fbq) {
      if (userData) {
        fbq('init', PIXEL_ID, userData);
      } else {
        fbq('init', PIXEL_ID);
      }
    }
  }
};

export const trackPixelEvent = (eventName: string, params?: object) => {
  if (typeof window !== 'undefined') {
    const fbq = window.fbq || (window as any).fbq;
    if (fbq) {
      fbq('track', eventName, params);
    }
  }
};

export const trackPixelCustomEvent = (eventName: string, params?: object) => {
  if (typeof window !== 'undefined') {
    const fbq = window.fbq || (window as any).fbq;
    if (fbq) {
      fbq('trackCustom', eventName, params);
    }
  }
};
