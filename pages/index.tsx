import styles from 'styles/Home.module.css';

export default function Home(): JSX.Element {
  return (
    <main>
      <section className={styles.container}>
        <h2 className={styles.heading}>
          Hi, I&apos;m <strong>Pablo Verduzco</strong>.<span>Frontend developer based in Mexico.</span>
        </h2>
        <p>
          My goal as developer is to create incredible websites and apps that can be accessible to everyone and also I
          want to put my problem solving skills to use for a greater purpose.
        </p>
        <p className={styles.contact}>
          You can contact me at: <a href='https://www.linkedin.com/in/pabloverduzco/'>LinkedIn</a>,{' '}
          <a href='https://github.com/pabloverduzco'>GitHub</a> or <a href='https://twitter.com/pablovco'>Twitter</a>.
        </p>
        <a href='resume.pdf'>Checkou my resume &rarr;</a>
      </section>
    </main>
  );
}
