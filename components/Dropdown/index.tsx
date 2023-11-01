import clsx from "clsx";
import React from "react";
import { InputTypeText } from "../Inputs";

interface DropdownProps {
  headerText: string;
  inputsName: `${string}[]`;
  links: {
    platformName: string;
    platformLink: string;
    platformIcon: any;
  }[]
}

const Dropdown: React.FC<DropdownProps> = ({
  headerText,
  inputsName,
  links
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const openToggler = () => setIsOpen(!isOpen);

  return <button className={clsx("w-full max-w-[450px] cursor-default ")} type="button">
    {/* header */}
    <div onClick={openToggler} className={clsx("relative transition-all duration-300 flex justify-between cursor-pointer py-[10px] px-[15px] text-[14px] rounded-[5px] border-[1px] hover:border-main-primary-color ", isOpen ? "border-main-primary-color rounded-b-[0px]" : "border-white")}>
      {headerText}
      <div className={clsx("material-symbols-outlined relative transition duration-300", isOpen ? "rotate-[180deg]" : "")}>keyboard_arrow_down</div>
    </div>

    {/* body */}
    <div className={clsx(
      "border-[1px] border-main-primary-color border-t-0 rounded-b-[5px] origin-top transition-all duration-200 p-[15px] flex flex-col gap-[21px]",
      isOpen ? "scale-y-100 opacity-100" : "scale-y-0 max-h-0 p-0 opacity-0"
    )}>

      {links.map((el, idx) => {
        return <div key={el.platformName + idx}>
          <h4 className="text-left">{el.platformName}</h4>
          <div className="flex justify-between items-center">
            <div className="w-2 h-2 border-[1px] border-white"></div>
            <input
              placeholder="Paste link here..."
              type="text"
              name={inputsName}
              className={clsx("bg-black border rounded-lg border-white text-white py-[10px] px-[10px] max-w-[320px] w-full text-[14px] font-normal font-medium leading-normal tracking-wider transition duration-300 ease-in-out placeholder-grey focus:border-main-primary-color focus:ring-0 focus:outline-none ")}
            />
          </div>
        </div>;
      })}

    </div>
  </button>
}

export default Dropdown;


