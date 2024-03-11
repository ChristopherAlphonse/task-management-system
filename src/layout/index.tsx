import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Sidebar from "../components/SideBar";
import { Suspense } from "react";

const Layout = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Sidebar />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="md:pl-[250px] pl-[60px] pr-[20px] pt-[70px] w-full overflow-y-auto">
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
};

export default Layout;
