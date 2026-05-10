import React, { useRef } from 'react';
import styles from './styles.module.css';

export function OpenClawHomepage(): React.ReactElement {
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Full-page hero takeover */}
      <div className={styles.heroContainer}>
        {/* Animated background */}
        <div className={styles.backgroundCanvas} aria-hidden="true">
          <div className={styles.gradientOrb1} />
          <div className={styles.gradientOrb2} />
          <div className={styles.gradientOrb3} />
          <div className={styles.gridOverlay} />
        </div>

        {/* Decorative claw marks */}
        <div className={styles.clawMarksLeft} aria-hidden="true">
          <div className={styles.clawMark} />
          <div className={styles.clawMark} />
          <div className={styles.clawMark} />
        </div>
        <div className={styles.clawMarksRight} aria-hidden="true">
          <div className={styles.clawMark} />
          <div className={styles.clawMark} />
          <div className={styles.clawMark} />
        </div>

        {/* Main hero content */}
        <div className={styles.heroContent}>
          {/* Trending badge */}
          <div className={styles.trendingBadge}>
            <span className={styles.trendingDot} aria-hidden="true" />
            <span>Now Trending</span>
          </div>

          {/* Logo and headline */}
          <h1 className={styles.mainHeadline}>
            <span className={styles.introducing}>Introducing</span>
            <span className={styles.openClawLogo}>
              <span className={styles.openText}>Open</span>
              <span className={styles.clawText}>Claw</span>
            </span>
          </h1>

          {/* Tagline */}
          <p className={styles.tagline}>
            The open-source AI agent framework powering the next generation of autonomous coding.
          </p>

          {/* Feature highlights */}
          <div className={styles.featureGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon} aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span>Modular Architecture</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon} aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <span>Real-time Execution</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon} aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <span>Community Driven</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon} aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <span>Enterprise Ready</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className={styles.ctaContainer}>
            <a
              href="https://github.com/RooCodeInc/OpenClaw?utm_source=docs&utm_medium=homepage&utm_campaign=openclaw_launch"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryCta}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Star on GitHub
            </a>
            <a
              href="/features/openclaw?utm_source=docs&utm_medium=homepage&utm_campaign=openclaw_launch"
              className={styles.secondaryCta}
            >
              Explore Documentation
            </a>
          </div>

          {/* Stats */}
          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>10K+</span>
              <span className={styles.statLabel}>GitHub Stars</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.statItem}>
              <span className={styles.statValue}>500+</span>
              <span className={styles.statLabel}>Contributors</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.statItem}>
              <span className={styles.statValue}>MIT</span>
              <span className={styles.statLabel}>License</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          className={styles.scrollIndicator}
          onClick={scrollToContent}
          aria-label="Scroll to documentation"
          type="button"
        >
          <span className={styles.scrollText}>Explore Roo Code Docs</span>
          <svg
            className={styles.scrollArrow}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </button>
      </div>

      {/* Anchor for scroll target */}
      <div ref={contentRef} className={styles.contentAnchor} />
    </>
  );
}

export default OpenClawHomepage;
