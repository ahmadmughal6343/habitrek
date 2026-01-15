import styles from "./Loader.module.css";

const Loader = () => {
  return (
    /* Tailwind: Flexbox centering, full screen height, and background overlay */
    <div className="flex flex-col items-center justify-center min-h-50 w-full gap-4">
      {/* CSS Module: The actual spinning element */}
      <div className={styles.spinner}></div>

      {/* Tailwind: Typography styling */}
      <p className="text-gray-600 font-medium animate-pulse">Loading...</p>
    </div>
  );
};

export default Loader;
