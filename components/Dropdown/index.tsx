import clsx from "clsx";
import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface DropdownProps {
  headerText: string;
  inputsName: string;
  label?: string;
  links: {
    [key: string]: string | StaticImport;
  };
}

const Dropdown: React.FC<DropdownProps> = ({ headerText, inputsName, links, label }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <div className="flex flex-col gap-[10px]">
      {label && (
        <label className="text-[20px] md:text-2xl font-normal leading-6 tracking-wider">
          {label}
        </label>
      )}
      <div
        onClick={(e) => {
          const curTarget = e.target as HTMLElement; // получаем какой элемент нажали
          const dropdownHead = curTarget.closest(".dropdown-head") as HTMLDivElement;
          const dropdownContainer = curTarget.closest(".dropdown-container") as HTMLDivElement;
          const isBodyClicked = (
            curTarget.closest(".dropdown-body") as HTMLDivElement
          )?.classList.contains("dropdown-body");

          if (isOpen && !isBodyClicked) {
            dropdownContainer.style.maxHeight = window.getComputedStyle(dropdownHead).height;
            setIsOpen(false);
          } else if (!isOpen) {
            dropdownContainer.style.maxHeight = dropdownContainer.scrollHeight + 1 + "px";
            setIsOpen(true);
          }
        }}
        className={clsx(
          "dropdown-container transition-all ease-out duration-300 w-full max-w-[450px] cursor-default overflow-hidden",
          isOpen ? "" : "max-h-[43px] md:max-h-[47px]"
        )}
      >
        {/* header */}
        <div
          className={clsx(
            "dropdown-head relative select-none flex justify-between items-center cursor-pointer p-[8px] md:p-2.5 text-[14px] rounded-[5px] border-[1px] hover:border-main-primary-color ",
            isOpen ? "border-main-primary-color rounded-b-[0px]" : "border-white"
          )}
        >
          {headerText}
          <div
            className={clsx(
              "material-symbols-outlined relative transition duration-300",
              isOpen ? "rotate-[180deg]" : ""
            )}
          >
            keyboard_arrow_down
          </div>
        </div>

        {/* body */}
        <div className="dropdown-body border-[1px] border-main-primary-color border-t-0 rounded-b-[5px] origin-top p-[15px] flex flex-col gap-[21px]">
          {Object.keys(links).map((key, idx) => {
            return (
              <div className="flex flex-col gap-[10px]" key={idx}>
                <h4 className="text-[14px] md:text-[16px] mb-[4px] md:mb-0 text-left">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </h4>
                <div className="flex justify-between items-center gap-[10px] md:gap-0 px-[5px]">
                  <Image
                    className="w-[28px] h-[28px] md:w-[32px] md:h-[32px]"
                    src={links[key]}
                    alt="logo"
                  />

                  <input
                    type="hidden"
                    value={key.toLowerCase().replaceAll(" ", "_")}
                    name={`${inputsName}[${idx}][platform]`}
                  />

                  <input
                    placeholder="Paste link here..."
                    type="text"
                    name={`${inputsName}[${idx}][link]`}
                    className={clsx(
                      "bg-black border rounded-lg border-white text-white py-[10px] px-[10px] max-w-[350px] w-full text-[14px] font-medium leading-normal tracking-wider transition duration-300 ease-in-out placeholder-grey focus:border-main-primary-color focus:ring-0 focus:outline-none "
                    )}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
