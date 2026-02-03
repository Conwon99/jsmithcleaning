/// <reference path="../.astro/types.d.ts" />

// Google Analytics gtag type declarations
interface Window {
  dataLayer: any[];
  gtag: (
    command: 'config' | 'event' | 'js' | 'set',
    targetId: string | Date,
    config?: {
      [key: string]: any;
      event_category?: string;
      event_label?: string;
      value?: number;
    }
  ) => void;
}