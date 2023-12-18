import { Transition } from "@headlessui/react";
import React from "react";

interface ModalTemplateProps {
  children: React.ReactNode | React.ReactNode[];
  closeBtn?: boolean;
  isOpened: boolean;
  setIsOpened: (v: boolean) => void;
}

const ModalTemplate: React.FC<ModalTemplateProps> = ({
  children,
  closeBtn = false,
  isOpened,
  setIsOpened
}) => {
  return <div>
    {/* shadow bg for confirmModal */}
    <div
      className={`${isOpened ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-[7]`}
      onClick={() => setIsOpened(false)}
    ></div>

    <div className="fixed top-1/2 left-1/2 z-[10] transform -translate-x-1/2 -translate-y-1/2">
      <Transition
        show={isOpened}
        enter="transition-transform duration-300 ease-in-out"
        enterFrom="-translate-y-[300%]"
        enterTo="translate-y-0"
        leave="transition-transform duration-300 ease-in-out"
        leaveFrom="translate-y-0"
        leaveTo="-translate-y-[300%]"
      >
        <div className="relative z-[10]">
          <div
            className={
              "w-[360px] md:w-[690px] flex flex-col justify-center items-center gap-[30px] md:gap-[50px] p-[15px] md:px-[65px] md:pt-[80px] md:pb-[50px] bg-black border border-primary-color"
            }
          >
            <div className="w-full flex justify-center">
              {closeBtn && <button
                type="button"
                onClick={() => setIsOpened(false)}
                className="close absolute top-[20px] right-[20px] w-[24px] h-[24px] hover:text-main-primary-color material-symbols-outlined">
                close
              </button>}
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
}

export default ModalTemplate;