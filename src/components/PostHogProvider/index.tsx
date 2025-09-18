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
      window.posthog.startSessionRecording();
    }
  };

  const disablePostHog = () => {
    if (typeof window !== 'undefined' && window.posthog) {
      window.posthog.opt_out_capturing();
      window.posthog.stopSessionRecording();
    }
  };

  return <>{children}</>;
}