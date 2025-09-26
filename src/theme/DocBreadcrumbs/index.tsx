import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useSidebarBreadcrumbs} from '@docusaurus/plugin-content-docs/client';
import {useHomePageRoute} from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import HomeBreadcrumbItem from '@theme/DocBreadcrumbs/Items/Home';
import DocBreadcrumbsStructuredData from '@theme/DocBreadcrumbs/StructuredData';
import CopyPageContent from '@site/src/components/CopyPageURL';

import styles from './styles.module.css';

// TODO move to design system folder
function BreadcrumbsItemLink({
  children,
  href,
  isLast,
}: {
  children: ReactNode;
  href: string | undefined;
  isLast: boolean;
}): ReactNode {
  const className = 'breadcrumbs__link';
  if (isLast) {
    return <span className={className}>{children}</span>;
  }
  return href ? (
    <Link className={className} href={href}>
      <span>{children}</span>
    </Link>
  ) : (
    <span className={className}>{children}</span>
  );
}

// TODO move to design system folder
function BreadcrumbsItem({
  children,
  active,
}: {
  children: ReactNode;
  active?: boolean;
}): ReactNode {
  return (
    <li
      className={clsx('breadcrumbs__item', {
        'breadcrumbs__item--active': active,
      })}>
      {children}
    </li>
  );
}

export default function DocBreadcrumbs(): ReactNode {
  const breadcrumbs = useSidebarBreadcrumbs();
  const homePageRoute = useHomePageRoute();

  if (!breadcrumbs) {
    return null;
  }

  const lastBreadcrumb = breadcrumbs[breadcrumbs.length - 1];
  const showTeamsBanner = lastBreadcrumb?.label === 'Welcome';

  return (
    <>
      <DocBreadcrumbsStructuredData breadcrumbs={breadcrumbs} />
      {showTeamsBanner && (
        <div className={styles.teamsPromo} role="complementary" aria-label="Roo Code Teams announcement">
          <span className={styles.teamsPromoHeadline}>Ship Faster with Roo Code Teams.</span>
          <a
            className={styles.teamsPromoLink}
            href="https://app.roocode.com/l/teams?utm_source=docs&utm_medium=banner&utm_campaign=teams_promo"
            target="_blank"
            rel="noopener noreferrer">
            Get early access now.
          </a>
        </div>
      )}
      <nav
        className={clsx(
          ThemeClassNames.docs.docBreadcrumbs,
          styles.breadcrumbsContainer,
        )}
        aria-label={translate({
          id: 'theme.docs.breadcrumbs.navAriaLabel',
          message: 'Breadcrumbs',
          description: 'The ARIA label for the breadcrumbs',
        })}>
        <div className={styles.breadcrumbsWrapper}>
          <ul className="breadcrumbs">
            {homePageRoute && <HomeBreadcrumbItem />}
            {breadcrumbs.map((item, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              const href =
                item.type === 'category' && item.linkUnlisted
                  ? undefined
                  : item.href;
              return (
                <BreadcrumbsItem key={idx} active={isLast}>
                  <BreadcrumbsItemLink href={href} isLast={isLast}>
                    {item.label}
                  </BreadcrumbsItemLink>
                </BreadcrumbsItem>
              );
            })}
          </ul>
          <CopyPageContent />
        </div>
      </nav>
    </>
  );
}
