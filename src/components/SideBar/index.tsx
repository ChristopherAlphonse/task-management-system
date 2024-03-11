import { IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { navLinks } from "./navLinksData";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 md:w-sidebar w-sidebar-mini overflow-hidden h-full flex flex-col">
      <div className="w-full flex items-center md:justify-start justify-center md:pl-5 h-[70px] bg-zinc-50">
        <span className="text-amber-500 font-semibold text-2xl md:block hidden">
          TaskBan
        </span>
        <span className="text-amber-500 font-semibold text-2xl md:hidden block">
          TB.
        </span>
      </div>
      <div className="w-full h-[calc(100vh-70px)] border-r flex flex-col md:items-start items-center gap-2 border-slate-500 bg-zinc-50 py-5 md:px-3 px-3 relative">
        {navLinks.map((link) => (
          <Link
            to={link.href}
            key={link.title}
            className={`flex items-center gap-2 w-full rounded-lg hover:bg-amber-500/50 px-2 py-3 cursor-pointer ${
              link.active ? "bg-amber-500" : "bg-transparent"
            }`}
          >
            {link.icon}
            <span className="font-medium text-base md:block hidden">
              {link.title}
            </span>
          </Link>
        ))}
        <div className="flex absolute bottom-4 items-center md:justify-start justify-center gap-2 md:w-[90%] w-[70%] rounded-lg hover:bg-amber-500 px-2 py-3 cursor-pointer bg-gray-200">
          <IoLogOutOutline />
          <span className="font-medium text-base md:block hidden">Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
