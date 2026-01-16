import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.spinner} aria-label="Loading"></div>
    </div>
  );
};

export default Loader;
