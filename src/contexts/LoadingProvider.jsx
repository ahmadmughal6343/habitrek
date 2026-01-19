import { useCallback, useMemo, useState } from "react";
import { LoadingContext } from "./contexts";

const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  // useCallback makes these functions stable/memoized
  const showLoading = useCallback(() => setIsLoading(true), []);
  const hideLoading = useCallback(() => setIsLoading(false), []);

  // Use useMemo for the value to prevent unnecessary re-renders
  const value = useMemo(
    () => ({
      isLoading,
      showLoading,
      hideLoading,
    }),
    [isLoading, showLoading, hideLoading],
  );
  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};

export default LoadingProvider;
