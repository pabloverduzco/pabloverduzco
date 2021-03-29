import type { NextRouter } from 'next/router';

/**
 * Get the name of the current page.
 * @param router A router object returned by `useRouter`.
 * @returns {string} The name of the current page.
 */
export default function getPageName(router: NextRouter): string {
  const pageName = router.pathname.split('/').slice(1)[0];

  if (pageName === '') {
    return 'home';
  }

  return pageName;
}
