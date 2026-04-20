import React from 'react';
import { VscWarning } from 'react-icons/vsc';
import styles from './styles.module.css';

export function AnnouncementBanner() {
  return (
    <div className={styles.announcementBanner} role="alert" aria-label="Sunset notice">
      <div className={styles.bannerContent}>
        <VscWarning size={20} color="#ffffff" />
        <span className={styles.bannerHeadline}>
          Roo Code (Extension, Cloud, and Router) is sunsetting on May 15, 2026.
        </span>
        <a
          className={styles.bannerLink}
          href="/sunset">
          Learn more
        </a>
      </div>
    </div>
  );
}