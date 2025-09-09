import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useLocation} from '@docusaurus/router';
import OriginalSearchBar from '@theme-original/SearchBar';

type Props = React.ComponentProps<typeof OriginalSearchBar>;

export default function SearchBarWrapper(props: Props) {
  const {
    siteConfig: {baseUrl},
  } = useDocusaurusContext();
  const location = useLocation();

  // When on /update-notes/*, show a clear "scope indicator" and a shortcut to search the whole docs
  const inReleaseNotes =
    location.pathname === `${baseUrl}update-notes` ||
    location.pathname.startsWith(`${baseUrl}update-notes/`);

  const searchEverywhereHref = `${baseUrl}search/`;

  return (
    <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
      <OriginalSearchBar {...props} />
      {inReleaseNotes && (
        <span
          className="badge badge--secondary"
          title="Search currently scoped to Release Notes on this page"
        >
          Release Notes
        </span>
      )}
      {inReleaseNotes && (
        <Link
          className="button button--link"
          href={searchEverywhereHref}
          title="Open full-site search (all docs)"
          style={{marginLeft: '0.25rem'}}
        >
          Search everywhere
        </Link>
      )}
    </div>
  );
}