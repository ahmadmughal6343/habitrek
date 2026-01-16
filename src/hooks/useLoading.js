import { useContext } from "react";
import { LoadingContext } from "../contexts/contexts";

const useLoading = () => {
  return useContext(LoadingContext);
};

export default useLoading;
