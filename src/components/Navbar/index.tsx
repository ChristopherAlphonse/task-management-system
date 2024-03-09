import {
    IoChevronDownOutline,
    IoNotificationsOffOutline,
    IoNotificationsOutline,
    IoPersonOutline,
    IoSearchOutline,
    IoSettingsOutline,
    IoShareSocialOutline,
} from "react-icons/io5";

import { useState } from "react";

const Navbar = () => {
    const [notification, setNotification] = useState(true);
    const boardName = "";

    const toggleNotification = () => {
        setNotification((prevState) => !prevState);
    };

    return (
        <div className="md:w-[calc(100%-230px)] w-[calc(100%-60px)] fixed flex items-center justify-between pl-2 pr-6 h-[70px] top-0 md:left-[230px] left-[60px] border-b border-slate-300 bg-slate-50">
            <div className="flex items-center gap-3 cursor-pointer">
                <IoPersonOutline size={28} className="text-amber-500" />
                <span className="capitalize text-amber-500 font-semibold md:text-lg text-sm whitespace-nowrap">
                    {boardName || "Board Name"}
                </span>
                <IoChevronDownOutline size={16} className="text-amber-500" />
            </div>

            <div className="md:w-[800px] w-[130px] bg-gray-200 rounded-lg px-3 py-2 flex items-center gap-2">
                <IoSearchOutline className="text-slate-600" />
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full bg-gray-200 outline-none text-[15px]"
                />
            </div>
            <div className="md:flex hidden items-center gap-4">
                <div className="grid place-items-center bg-gray-100 hover:bg-gray-200 rounded-full p-2 cursor-pointer">
                    <IoShareSocialOutline />
                </div>
                <div className="grid place-items-center bg-gray-100 hover:bg-gray-200 rounded-full p-2 cursor-pointer">
                    <IoSettingsOutline />
                </div>
                <div
                    className="grid place-items-center bg-gray-100 hover:bg-gray-200 rounded-full p-2 cursor-pointer"
                    onClick={toggleNotification}
                >
                    {notification ? (
                        <IoNotificationsOutline />
                    ) : (
                        <IoNotificationsOffOutline />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
