// PrimaryPage.jsx
import styles from "./PrimaryPage.module.css";

const PrimaryPage = () => {
  return (
    <main className={styles.container}>
      <section className="flex items-center justify-center min-h-screen p-4">
        <h1
          className={`${styles.logo} ${styles.animatedLogo}`}
          role="heading"
          aria-label="Habitrek"
        >
          HABiTREK
        </h1>
      </section>
    </main>
  );
};

export default PrimaryPage;