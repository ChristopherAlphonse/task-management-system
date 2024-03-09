import {
    IoChevronDownOutline,
    IoPersonOutline,
    IoSearchOutline,
} from "react-icons/io5";

const Navbar = () => {
    return (
        <div className="md:w-[calc(100%-230px)] w-[calc(100%-60px)] fixed flex items-center justify-between pl-2 pr-6 h-[70px] top-0 md:left-[230px] left-[60px] border-b border-slate-300 bg-[#fff]">
            <div className="flex items-center gap-3 cursor-pointer">
                <IoPersonOutline size={28} className="text-amber-500" />{" "}
                <span className="capitalize text-amber-500 font-semibold md:text-lg text-sm whitespace-nowrap  ">
                    board name
                </span>
                <IoChevronDownOutline size={16} className="text-amber-500" />
            </div>

            <div className="md:w-[800px] w-[130px] bg-gray-100 rounded-lg px-3 py-[10px] flex items-center gap-2">
                <IoSearchOutline color={"#999"} />
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full bg-gray-100 outline-none text-[15px]"
                />
            </div>
        </div>
    );
};

export default Navbar;
