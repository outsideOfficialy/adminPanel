import clsx from "clsx";
import React from "react";

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

  return <button className="h-[45.6px] realtive w-full max-w-[450px]" type="button" onFocus={() => {}}>
    {/* header */}
    <div onClick={openToggler} className={clsx("relative flex justify-between cursor-pointer py-[10px] px-[15px] text-[14px] rounded-[5px] border-[1px] border-white hover:border-main-primary-color transition duration-300 ", isOpen ? "border-main-primary-color" : "")}>
      {headerText}
      {/* if arrow is rotating than do this */}
      <div className={clsx("material-symbols-outlined relative transition duration-300", isOpen ? "rotate-[180deg]" : "")}>keyboard_arrow_down</div>
    </div>
    
    
    {/* body */}
    <div className={clsx(
      "origin-top transition duration-300 p-[15px] flex flex-col gap-[21px]",
      isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
    )}>

      {links.map((el, idx) => {
        return <div key={el.platformName + idx}>
          <h4 className="text-left">{el.platformName}</h4>
          <div className="flex justify-between items-center">
            <div className="w-2 h-2 border-[1px] border-white"></div>
            <input name={inputsName} onFocus={() => setIsOpen(true)} className="w-[80%] border-[1px] border-white min-h-[35px]"></input>
          </div>
        </div>;
      })}

    </div>
  </button>
}

export default Dropdown;

