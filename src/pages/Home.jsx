import { useEffect } from "react";
import useLoading from "../hooks/useLoading";
import PrimaryPage from "../components/primaryPage/PrimaryPage";

const Home = () => {
  const { isLoading, showLoading, hideLoading } = useLoading();

  useEffect(() => {
    document.title = "Habitrek | Home";
  }, []);

  useEffect(() => {
    showLoading();
    const timer = setTimeout(() => {
      hideLoading();
    }, 1000);

    return () => clearTimeout(timer);
  }, [showLoading, hideLoading]);

  if (isLoading) {
    return <PrimaryPage />;
  }

  return (
    <>
      <div>Home Page</div>
    </>
  );
};

export default Home;
