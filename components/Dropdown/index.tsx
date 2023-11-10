import clsx from "clsx";
import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Popover, Transition } from "@headlessui/react";

interface DropdownProps {
  headerText: string;
  inputsName: string;
  label?: string;
  links: {
    platformName: string;
    platformIcon: string | StaticImport;
  }[];
}

const Dropdown: React.FC<DropdownProps> = ({ headerText, inputsName, links, label }) => {

  return (
    <Popover className={"max-w-[450px] flex flex-col gap-[10px]"}>
      {({ open }) => (
        <>
          {label && <h3 className="text-2xl font-normal leading-6 tracking-wider">{label}</h3>}
          <div>
            <Popover.Button className={`select-none outline-none flex justify-between items-center cursor-pointer py-[10px] px-[15px] text-[14px] rounded-[5px] border-[1px] w-full ${open ? "border-main-primary-color rounded-b-[0px]" : ""}`}>
              {headerText}
              <div
                className={clsx(
                  "material-symbols-outlined relative transition duration-300",
                  open ? "rotate-[180deg]" : ""
                )}
              >
                keyboard_arrow_down
              </div>
            </Popover.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0">
              <Popover.Panel className={"border-[1px] border-main-primary-color border-t-0 rounded-b-[5px] origin-top transition-all duration-200 p-[15px] flex flex-col gap-[21px]"}>
                {links.map((el, idx) => {
                  return (
                    <div key={el.platformName + idx}>
                      <h4 className="text-left">{el.platformName}</h4>
                      <div className="flex justify-between items-center px-[5px]">
                        <Image className="w-[32px] h-[32px]" src={el.platformIcon} alt="logo" />

                        <input
                          type="hidden"
                          value={el.platformName.toLowerCase().replaceAll(" ", "-")}
                          name={`${inputsName}[${idx}][platform]`}
                        />

                        <input
                          placeholder="Paste link here..."
                          type="text"
                          name={`${inputsName}[${idx}][link]`}
                          className={clsx(
                            "bg-black border rounded-lg border-white text-white py-[10px] px-[10px] max-w-[350px] w-full text-[14px] font-normal font-medium leading-normal tracking-wider transition duration-400 ease-in-out placeholder-grey focus:border-main-primary-color focus:ring-0 focus:outline-none "
                          )}
                        />
                      </div>
                    </div>
                  );
                })}
              </Popover.Panel>
            </Transition>
          </div>
        </>
      )}
    </Popover>
    // <div className="flex flex-col gap-[10px]">
    //   {label && <h3 className="text-2xl font-normal leading-6 tracking-wider">{label}</h3>}
    //   <div className={clsx("transition-all duration-400 w-full max-w-[450px] cursor-default overflow-hidden ", isOpen ? "max-h-none" : "max-h-[46px]")}>
    //     {/* header */}
    //     <div
    //       onClick={openToggler}
    //       className={clsx(
    //         "relative select-none transition-all duration-300 flex justify-between items-center cursor-pointer py-[10px] px-[15px] text-[14px] rounded-[5px] border-[1px] hover:border-main-primary-color ",
    //         isOpen ? "border-main-primary-color rounded-b-[0px]" : "border-white"
    //       )}
    //     >
    //       {headerText}
    //       <div
    //         className={clsx(
    //           "material-symbols-outlined relative transition duration-300",
    //           isOpen ? "rotate-[180deg]" : ""
    //         )}
    //       >
    //         keyboard_arrow_down
    //       </div>
    //     </div>

    //     {/* body */}
    //     <div
    //       className={clsx(
    //         "border-[1px] border-main-primary-color border-t-0 rounded-b-[5px] origin-top transition-all duration-200 p-[15px] flex flex-col gap-[21px]",
    //         isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
    //       )}
    //     >
    //       {links.map((el, idx) => {
    //         return (
    //           <div key={el.platformName + idx}>
    //             <h4 className="text-left">{el.platformName}</h4>
    //             <div className="flex justify-between items-center px-[5px]">
    //               <Image className="w-[32px] h-[32px]" src={el.platformIcon} alt="logo" />

    //               <input
    //                 type="hidden"
    //                 value={el.platformName.toLowerCase().replaceAll(" ", "-")}
    //                 name={`${inputsName}[${idx}][platform]`}
    //               />

    //               <input
    //                 placeholder="Paste link here..."
    //                 type="text"
    //                 name={`${inputsName}[${idx}][link]`}
    //                 className={clsx(
    //                   "bg-black border rounded-lg border-white text-white py-[10px] px-[10px] max-w-[350px] w-full text-[14px] font-normal font-medium leading-normal tracking-wider transition duration-400 ease-in-out placeholder-grey focus:border-main-primary-color focus:ring-0 focus:outline-none "
    //                 )}
    //               />
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Dropdown;
