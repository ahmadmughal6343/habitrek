import Navbar from "../components/navbar/Navbar";
import styles from "../assets/styles/GetStarted.module.css";
import { ArrowRight, Copyright } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const GetStarted = () => {
  const { background, h1, subheading, btn, footer } = styles;
  useEffect(() => {
    document.title = "Habitreck | Started";
  }, []);

  return (
    <>
      <div className="min-h-screen w-screen relative overflow-x-hidden">
        <div className={background}></div>
        <header>
          <Navbar />
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
            <h1 className={`${h1} mb-4 md:mb-6`}>
              Build Better <span className="underline text-black">Habits</span>,{" "}
              <span className="block">Build a Better Life</span>
            </h1>
            <p className={`${subheading} mb-6 md:mb-8`}>
              "The all-in-one workspace to design your routine, track your
              progress, and master your day. Start small, stay consistent, and
              watch the compound effect take hold."
            </p>
            <Link to="/auth/signin">
              <button className={`${btn}`}>
                <span>Start your journey</span>
                <ArrowRight />
              </button>
            </Link>
          </div>
        </main>

        <footer className={footer}>
          <Copyright />
          <p className="font-medium">2026 Habitrek. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default GetStarted;
