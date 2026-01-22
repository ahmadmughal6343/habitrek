// PrimaryPage.jsx
import useEffectiveTheme from "../../hooks/useEffectiveTheme";
import styles from "./PrimaryPage.module.css";

const PrimaryPage = () => {
  const effectiveTheme = useEffectiveTheme();
  return (
    <main
      className={`${styles.container} ${effectiveTheme === "dark" ? "bg-[#161612]" : "bg-[#eff1f3]"}`}
    >
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
