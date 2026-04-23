import React, {type ReactNode} from 'react';
import Logo from '@theme/Logo';
import styles from './styles.module.css';

export default function NavbarLogo(): ReactNode {
  return (
    <Logo
      className={`navbar__brand ${styles.logoLink}`}
      imageClassName={`navbar__logo ${styles.logoImage}`}
      titleClassName="navbar__title text--truncate"
    />
  );
}
