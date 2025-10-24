import React from 'react';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type IconName = keyof typeof Icons;

export default function PlanBox({
  title,
  subtitle,
  description,
  icon = 'Users',
  id,
  price,
  checklist,
  children,
}: {
  title: string;
  subtitle?: string;
  description?: string;
  icon?: IconName;
  id?: string;
  price?: string;
  checklist?: boolean;
  children?: React.ReactNode;
}) {
  const IconComponent = (Icons[icon] as LucideIcon) || (Icons.Users as LucideIcon);
  const anchorId = id || title.toLowerCase().replace(/\s+/g, '-');

  return (
    <div
      id={anchorId}
      style={{
        background: '#000',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 'var(--ifm-global-radius)',
        margin: '20px 0',
        padding: '20px 24px 16px 24px',
        color: '#fff',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginBottom: '12px',
        }}
      >
        <div style={{ flex: 1 }}>
          <a
            href={`#${anchorId}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              color: '#fff',
              marginBottom: '6px',
            }}
          >
            <IconComponent size={24} color="#fff" />
            <span style={{ fontWeight: 600, fontSize: '1.5rem', lineHeight: 1 }}>{title}</span>
          </a>
          {subtitle && (
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '4px' }}>
              {subtitle}
            </div>
          )}
          {description && (
            <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem' }}>
              {description}
            </div>
          )}
        </div>
        {price && (
          <span style={{ fontWeight: 500, fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', flexShrink: 0, paddingLeft: '20px' }}>{price}</span>
        )}
      </div>
      <div style={{ fontSize: '1rem', lineHeight: 1.6 }}>
        {checklist && (
          <style>{`#${anchorId} ul{list-style:none;padding-left:0;margin:0}#${anchorId} ul>li{position:relative;padding-left:28px;margin:10px 0;color:#fff}#${anchorId} ul>li::before{content:"✓";position:absolute;left:0;top:0.15rem;color:#fff;font-weight:700;font-size:1.1rem}#${anchorId} a{color:#fff;text-decoration:underline}#${anchorId} a:hover{color:rgba(255,255,255,0.8)}`}</style>
        )}
        {children}
      </div>
    </div>
  );
}