import React, {type ReactNode} from 'react';
import Logo from '@theme/Logo';

// Valentine's Day heart decoration component
function ValentineHeart(): ReactNode {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#ff69b4"
      className="valentine-heart"
      style={{
        width: '16px',
        height: '16px',
        marginLeft: '4px',
        marginTop: '-4px',
        animation: 'heartbeat 1.5s ease-in-out infinite',
      }}
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  );
}

export default function NavbarLogo(): ReactNode {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Logo
        className="navbar__brand"
        imageClassName="navbar__logo"
        titleClassName="navbar__title text--truncate"
      />
      <ValentineHeart />
      <style>{`
        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
}
