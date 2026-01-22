import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import useLoading from "../../hooks/useLoading";
import PrimaryPage from "../../components/primaryPage/PrimaryPage";
import Header from "../../components/header/Header";
import Asidebar from "../../components/asidebar/Asidebar";

const RootLayout = () => {
  const { isLoading, showLoading, hideLoading } = useLoading();
  const [collapse, setCollapse] = useState(false);

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
      <div className="h-screen w-screen flex pt-18">
        <div className="flex flex-1 h-full">
          {/* Sidebar - visible on sm and above */}
          <aside className="hidden sm:block h-full">
            <Asidebar collapse={collapse} setCollapse={setCollapse} />
          </aside>
          {/* Main Content */}
          <main className="flex-1 overflow-y-auto h-full">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default RootLayout;
