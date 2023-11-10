import React from "react";
import { ButtonPrimary, ButtonSecondary } from "../ButtonTemplate";
import clsx from "clsx";
import { Transition } from "@headlessui/react";

interface SearchInputProps {
  label?: string;
  placeholder: string;
  name: string;
  onSearch: () => void; // Функция обработчика поиска
}

const testInfo = [
  {id: '258789', title: 'New release is coming out', text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis massa non nunc aliquet...'}, 
  {id: '258789', title: 'New release is coming out', text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis massa non nunc aliquet...'}, 
  {id: '258789', title: 'New release is coming out', text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis massa non nunc aliquet...'},
  {id: '258789', title: 'New release is coming out', text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis massa non nunc aliquet...'},
]

const SearchInput: React.FC<SearchInputProps> = ({ label, placeholder, name, onSearch }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const openToggler = () => setIsOpen(!isOpen);

  return (
    <div className="w-full max-w-[450px]">
      <div className="flex flex-col items-start gap-[10px]">
        {label && (
          <label className="text-white text-2xl font-normal leading-6 tracking-wider">
            {label}
          </label>
        )}
        <div className="relative w-full">
          <input
            type="text"
            placeholder={placeholder}
            name={name}
            className={clsx("border-white bg-black border rounded-lg text-white p-2.5 max-w-[450px] w-full text-base font-medium leading-normal tracking-wider transition duration-300 ease-in-out placeholder-grey focus:border-main-primary-color focus:ring-0 focus:outline-none", isOpen ? "border-main-primary-color rounded-b-[0px]" : "border-gray")}
          />
          <button
            className="material-symbols-outlined search absolute right-0 top-0 bottom-0 bg-main-primary text-white rounded-r-lg p-2.5 font-medium transition duration-300 ease-in-out hover:text-main-primary-color"
            onClick={onSearch}
          >
            search
          </button>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition-transform duration-300 ease-in-out"
        enterFrom="-translate-y-[300%]"
        enterTo="translate-y-0"
        leave="transition-transform duration-300 ease-in-out"
        leaveFrom="translate-y-0"
        leaveTo="-translate-y-[300%]"
      >
      <div className="border-[1px] border-main-primary-color pl-[15px] pr-[5px] py-[10px] rounded-b-[5px]">
        <ul className="max-h-[319px] overflow-scroll pr-[10px] flex flex-col gap-[15px]">
          {testInfo.map((item) => {
            return (
              <li className="relative pb-[10px] border-b-[1px] border-gray" key={item.id}>
                <div className="flex flex-col gap-[5px]">
                  <p className="leading-[17px] text-[12px]">ID {item.id}</p>
                  <p className="leading-[17px] text-[14px]">Title: {item.title}</p>
                  <p className="leading-[17px] text-[12px]">News text: <span className="text-gray">{item.text}</span></p>
                </div>
                <button
                className="material-symbols-outlined delete absolute right-0 top-0 text-gray transition duration-300 ease-in-out hover:text-main-primary-color"
                onClick={onSearch}>
                  delete
              </button>
              </li>
            )
          })}
        </ul>
      </div>
      </Transition>
    </div>
  );
};

export default SearchInput;