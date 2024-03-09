import { Suspense } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import RandomBackground from "../components/RandomBackground";

const Layout = () => {
    return (
        <div className="w-screen h-screen relative">
            <Suspense fallback={<div> Loading ...</div>}>
                <RandomBackground />
            </Suspense>
            <Navbar />
            <div className="md:pl-[250px] pl-[60px] pr-[20px] pt-[70px] w-full overflow-y-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
