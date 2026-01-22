import { useEffect } from "react";
import Asidebar from "../components/asidebar/Asidebar";

const Home = () => {
  useEffect(() => {
    document.title = "Habitrek | Home";
  }, []);

  return (
    <>
      <div className="p-2">
        <h1>HOME</h1>
      </div>
    </>
  );
};

export default Home;
