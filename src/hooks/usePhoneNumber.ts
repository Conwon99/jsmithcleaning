import { useState, useEffect } from 'react';

// Canonical phone number (for SEO - appears in initial HTML and structured data)
export const CANONICAL_PHONE = '+447857353191';
export const CANONICAL_PHONE_DISPLAY = '07857 353191';

// Tracking phone number (for analytics - appears after JavaScript loads)
export const TRACKING_PHONE = '+447857353191';
export const TRACKING_PHONE_DISPLAY = '07857 353191';

/**
 * Hook for call tracking functionality
 * Returns canonical number initially (for SSR), then switches to tracking number after mount
 * This ensures search engines see the canonical number in initial HTML,
 * while users see the tracking number after JavaScript loads
 */
export const usePhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState(CANONICAL_PHONE);
  const [phoneDisplay, setPhoneDisplay] = useState(CANONICAL_PHONE_DISPLAY);
  const [phoneHref, setPhoneHref] = useState(`tel:${CANONICAL_PHONE}`);

  useEffect(() => {
    // Only switch to tracking number on client-side after mount
    if (typeof window !== 'undefined') {
      setPhoneNumber(TRACKING_PHONE);
      setPhoneDisplay(TRACKING_PHONE_DISPLAY);
      setPhoneHref(`tel:${TRACKING_PHONE}`);
    }
  }, []);

  return {
    phoneNumber,
    phoneDisplay,
    phoneHref,
    // Also expose canonical for cases where we need it explicitly
    canonicalPhone: CANONICAL_PHONE,
    canonicalPhoneDisplay: CANONICAL_PHONE_DISPLAY,
    canonicalPhoneHref: `tel:${CANONICAL_PHONE}`,
  };
};

