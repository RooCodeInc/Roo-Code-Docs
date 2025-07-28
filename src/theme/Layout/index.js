import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import { AnimatedBackground } from '../../components/AnimatedBackground';

export default function Layout(props) {
  return (
    <>
      <AnimatedBackground />
      <OriginalLayout {...props} />
    </>
  );
}