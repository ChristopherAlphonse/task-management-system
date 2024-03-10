import {
  IoAppsOutline,
  IoGridOutline,
  IoHomeOutline,
  IoLogOutOutline,
  IoNewspaperOutline,
  IoNotificationsOutline,
  IoPeopleOutline,
  IoPieChartOutline,
} from "react-icons/io5";

const Sidebar = () => {
  const navLinks = [
    {
      title: "Home",
      icon: <IoHomeOutline className="text-zinc-500" size={22} />,
      active: false,
    },
    {
      title: "Boards",
      icon: <IoAppsOutline className="text-zinc-500" size={22} />,
      active: true,
    },
    {
      title: "Projects",
      icon: <IoGridOutline className="text-zinc-500" size={22} />,
      active: false,
    },
    {
      title: "Analytics",
      icon: (
        <IoPieChartOutline
          className="text-zinc-500"
          width="22px"
          height="22px"
        />
      ),
      active: false,
    },
    {
      title: "Workflows",
      icon: <IoPeopleOutline className="text-zinc-500" size={22} />,
      active: false,
    },
    {
      title: "Notifications",
      icon: <IoNotificationsOutline className="text-zinc-500" size={22} />,
      active: false,
    },
    {
      title: "Newsletter",
      icon: <IoNewspaperOutline className="text-zinc-500" size={22} />,
      active: false,
    },
  ];
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
        {navLinks.map((link) => {
          return (
            <div
              key={link.title}
              className={`flex items-center gap-2 w-full rounded-lg hover:bg-amber-500/50 px-2 py-3 cursor-pointer ${
                link.active ? "bg-amber-500" : "bg-transparent"
              }`}
            >
              {link.icon}
              <span className="font-medium text-base md:block hidden">
                {link.title}
              </span>
            </div>
          );
        })}
        <div className="flex absolute bottom-4 items-center md:justify-start justify-center gap-2 md:w-[90%] w-[70%] rounded-lg hover:bg-amber-500 px-2 py-3 cursor-pointer bg-gray-200">
          <IoLogOutOutline />
          <span className="font-medium text-base md:block hidden">Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
