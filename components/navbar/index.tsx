// Next
import { useRouter } from 'next/router';

// Components
import Logo from 'components/logo';

// Utils
import getPageName from 'utils/getPageName';

// Styles
import styles from 'styles/Navbar.module.css';

export default function Navbar(): JSX.Element {
  const router = useRouter();
  const pageName = getPageName(router);

  return (
    <header className={styles.container}>
      <Logo currentPage={pageName} />
    </header>
  );
}
