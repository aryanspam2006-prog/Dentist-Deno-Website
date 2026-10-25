const CALENDLY_URL = 'https://calendly.com/aryanspam2006';

type CalendlyWindow = Window & {
  Calendly?: { initPopupWidget: (options: { url: string }) => void };
};

export const PHONE_HREF = 'tel:8005592648';
export const PHONE_LABEL = '(800) 559-2648';

export function openBooking() {
  (window as CalendlyWindow).Calendly?.initPopupWidget({ url: CALENDLY_URL });
}
