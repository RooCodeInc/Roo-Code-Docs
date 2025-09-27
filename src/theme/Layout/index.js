import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import { AnimatedBackground } from '../../components/AnimatedBackground';
import { CookieConsent } from '../../components/CookieConsent';
import { PostHogProvider } from '../../components/PostHogProvider';
import { TeamsBanner } from '../../components/TeamsBanner';

export default function Layout(props) {
  return (
    <PostHogProvider>
      <TeamsBanner />
      <AnimatedBackground />
      <OriginalLayout {...props} />
      <CookieConsent />
    </PostHogProvider>
  );
}