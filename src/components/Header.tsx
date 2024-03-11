import { HTMLAttributes } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";

function Header({
  menuHamProps,
}: {
  menuHamProps: Partial<HTMLAttributes<HTMLButtonElement>>;
}) {
  return (
    <header className=" relative flex bg-white justify-between p-4">
      <button className=" select-none" type="button" {...menuHamProps}>
        <GiHamburgerMenu className=" float-end text-2xl" />
      </button>
      <div className="">Logo</div>
      <div className=" flex gap-3 float-right">
        <MdOutlineDarkMode className="  text-2xl" />
        <IoMdSearch className=" text-2xl" />
      </div>
      {/* <Navbar /> */}
    </header>
  );
}
export default Header;
