import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import useLoading from "../../hooks/useLoading";
import PrimaryPage from "../../components/primaryPage/PrimaryPage";
import Header from "../../components/header/Header";
import Asidebar from "../../components/asidebar/Asidebar";
import MobileNav from "../../components/mobileNav/MobileNav";
import useEffectiveTheme from "../../hooks/useEffectiveTheme";

const RootLayout = () => {
  const { isLoading, showLoading, hideLoading } = useLoading();
  const [collapse, setCollapse] = useState(false);
  const effectiveTheme = useEffectiveTheme();

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
      <Header />
      <div className="h-screen w-screen flex pt-15 sm:pt-18">
        <div className="flex flex-1 h-full">
          {/* Sidebar - visible on sm and above */}
          <aside className="hidden sm:block h-full">
            <Asidebar collapse={collapse} setCollapse={setCollapse} />
          </aside>
          {/* Main Content */}
          <main
            className={`flex-1 overflow-y-auto h-full ${effectiveTheme === "dark" ? "bg-[#161612]" : ""}`}
          >
            <Outlet />
          </main>
        </div>
      </div>
      <MobileNav />
    </>
  );
};

export default RootLayout;
