import styles from 'styles/Logo.module.css';

type LogoProps = {
  currentPage: string;
};

export default function Logo({ currentPage }: LogoProps): JSX.Element {
  return (
    <div className={styles.container}>
      <h1>
        Pablo
        <span> Verduzco</span>
      </h1>
      <span aria-label='Page name'>{currentPage}</span>
    </div>
  );
}
