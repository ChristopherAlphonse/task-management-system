import {
  IoAppsOutline,
  IoGridOutline,
  IoHomeOutline,
  IoNewspaperOutline,
  IoNotificationsOutline,
  IoPeopleOutline,
  IoPieChartOutline,
} from "react-icons/io5";

export const navLinks = [
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
      <IoPieChartOutline className="text-zinc-500" width="22px" height="22px" />
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
