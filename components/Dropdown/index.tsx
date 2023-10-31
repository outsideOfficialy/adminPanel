import clsx from "clsx";
import React from "react";

interface DropdownProps {
  headerText: string;
  inputsName: `${string}[]`;
  links: {
    platformName: string;
    platformLink: string;
  }[]
}

const Dropdown: React.FC<DropdownProps> = ({
  headerText
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const openToggler = () => setIsOpen(!isOpen);

  return <button type="button" onFocus={() => setIsOpen(true)} onBlur={() => setIsOpen(false)}>
    {/* header */}
    <div className={clsx("relative flex justify-between cursor-pointer w-full max-w-[450px] py-[10px] px-[15px] text-[14px] rounded-[5px] border-[1px] border-white hover:border-main-primary-color transition duration-300 ", isOpen ? "border-main-primary-color" : "")}>
      {headerText}
      {/* if arrow is rotating than do this */}
      <div className={clsx("material-symbols-outlined relative", isOpen ? "" : "")}>keyboard_arrow_down</div>
    </div>
    {/* body */}
    <div className={clsx(
      isOpen ? "" : ""
    )}></div>
  </button>
}

export default Dropdown;

