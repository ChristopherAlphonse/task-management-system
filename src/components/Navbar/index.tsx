import { IoPersonOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className="md:w-[calc(100%)-230px] w-[calc(100%-60px)] fixed flex items-center justify-between pl-2 pr-6 h-[70px] top-0 md:left-[230px] left-[60px] border-b border-slate-300 bg-[#fff]">
            <div className="flex items-center gap-3 cursor-pointer">
                <IoPersonOutline size={20} className="text-amber-500" />
            </div>
        </div>
    );
};

export default Navbar;
