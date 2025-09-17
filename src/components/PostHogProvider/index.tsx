import React, { useEffect, useState } from 'react';
import { hasConsent, onConsentChange } from '../../lib/analytics/consent-manager';

declare global {
  interface Window {
    posthog?: any;
  }
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const [isPostHogEnabled, setIsPostHogEnabled] = useState(false);

  useEffect(() => {
    // Check initial consent status
    const consentGiven = hasConsent();
    setIsPostHogEnabled(consentGiven);

    if (consentGiven) {
      enablePostHog();
    } else {
      disablePostHog();
    }

    // Listen for consent changes
    const cleanup = onConsentChange((granted) => {
      setIsPostHogEnabled(granted);
      if (granted) {
        enablePostHog();
      } else {
        disablePostHog();
      }
    });

    return cleanup;
  }, []);

  const enablePostHog = () => {
    if (typeof window !== 'undefined' && window.posthog) {
      // Re-initialize PostHog if it was previously disabled
      window.posthog.opt_in_capturing();
      window.posthog.start_session_recording();
    }
  };

  const disablePostHog = () => {
    if (typeof window !== 'undefined' && window.posthog) {
      window.posthog.opt_out_capturing();
      window.posthog.stop_session_recording();
      if (document) {
        const cookies = document.cookie.split(';');
        cookies.forEach(cookie => {
          const eqPos = cookie.indexOf('=');
          const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
          if (name.startsWith('ph_') || name.startsWith('posthog')) {
            // Delete PostHog related cookies
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.roocode.com`;
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
          }
        });
      }
    }
  };

  return <>{children}</>;
}