import { Suspense } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";

const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Sidebar />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="md:pl-60 md:pr-20 pl-20 pr-4 pt-16 w-full overflow-y-auto">
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
};

export default Layout;
