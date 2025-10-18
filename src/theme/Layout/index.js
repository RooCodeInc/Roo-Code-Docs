import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import { CookieConsent } from '../../components/CookieConsent';
import { PostHogProvider } from '../../components/PostHogProvider';
import { IntercomProvider } from '../../components/IntercomProvider';
import { TeamsBanner } from '../../components/TeamsBanner';

export default function Layout(props) {
  return (
    <PostHogProvider>
      <IntercomProvider>
        <TeamsBanner />
        <OriginalLayout {...props} />
        <CookieConsent />
      </IntercomProvider>
    </PostHogProvider>
  );
}