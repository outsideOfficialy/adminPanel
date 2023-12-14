import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Transition } from "@headlessui/react";
import { SearchInputProps } from "./interfaces";


export const SearchInput: React.FC<SearchInputProps> = ({ label, placeholder, name, pageSearch }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const openToggler = (value: boolean) => setIsOpen(value);

  const handleSearch = (val: string) => {
    fetch(`http://admin-panel-backend/${pageSearch}/${val}`, { method: "GET" })
      .then((d) => {
        if (d.ok) {
          return d.json();
        }
        return d.text().then(errorData => {
          throw new Error(errorData || 'Произошла ошибка запроса');
        });
      })
      .then((d) => {
        setSearchResults(d);
        openToggler(true);
      })
      .catch((reason) => {
        console.log(reason);
      });
  };

  useEffect(() => {
    setIsOpen(searchResults.length > 0);
  }, [searchResults]);

  return (
    <div className="w-full max-w-[450px] flex flex-col gap-[15px] md:gap-[10px]">
      {/* head */}
      {label && (
        <label className="text-white text-[20px] md:text-2xl font-normal leading-6 tracking-wider">
          {label}
        </label>
      )}
      <div>
        <div className="cursor-pointer flex flex-col items-start">
          <div className="relative w-full">
            <input
              type="text"
              placeholder={placeholder}
              name={name}
              className={clsx(
                "bg-black border rounded-lg text-white p-[8px] md:p-2.5 max-w-[450px] w-full text-[14px] md:text-base font-normal md:font-medium leading-normal tracking-wider transition duration-200 ease-in-out placeholder-grey focus:border-main-primary-color focus:ring-0 focus:outline-none",
                isOpen ? "border-main-primary-color rounded-b-[0px]" : "border-white"
              )}
              onChange={(e) => handleSearch(e.target.value)} />
            <button
              className="material-symbols-outlined search absolute right-0 top-0 bottom-0 bg-main-primary text-white rounded-r-lg p-[8px] md:p-2.5 font-medium transition duration-300 ease-in-out hover:text-main-primary-color">
              search
            </button>
          </div>
        </div>
        {/* body */}
        <Transition
          show={isOpen}
          enter="transition origin-top duration-200 transform"
          enterFrom="opacity-0 scale-y-0"
          enterTo="opacity-100 scale-y-1"
          leave="transition origin-top duration-200 transform"
          leaveFrom="opacity-100 scale-y-0"
          leaveTo="opacity-0 scale-y-0">
          <div className="border-[1px] border-main-primary-color pl-[15px] pr-[5px] py-[10px] rounded-b-[5px]">
            <ul className="max-h-[319px] overflow-scroll pr-[10px] flex flex-col gap-[15px]">
              {searchResults && searchResults.map((item) => (
                <li
                  onClick={() => {
                    openToggler(false);

                    for (const key in item) {
                      const elementInDom = document.querySelector(`form [name^=${key}]`) as HTMLInputElement | HTMLTextAreaElement;
                      if (!elementInDom) continue;

                      if (key === "preview_picture") {
                        // console.log(item[key]);
                      }
                      else if (key === "social_media_links") {
                        const socialLinks = JSON.parse(item[key]);

                        for (let i = 0; i < socialLinks.length; i++) {
                          const linkInput = document.querySelector(`form [value=${socialLinks[i].platform}`) as HTMLInputElement;
                          (linkInput.nextElementSibling as HTMLInputElement).value = socialLinks[i].link;
                        }
                      }
                      else if (key === "music_type") {
                        (elementInDom as HTMLInputElement).checked = true;
                      }
                      else if (key === "release_songs" && JSON.parse(item[key]).length !== 1) {
                        const addBtn = elementInDom.closest("div")?.nextElementSibling as HTMLButtonElement;
                        const songsList = JSON.parse(item[key]);

                        for (let i = 0; i < songsList.length; i++) addBtn.click();

                        setTimeout(() => {
                          const songInputs = document.querySelectorAll(`form [name^="release_songs[]"]`);
                          for (let i = 0; i < songsList.length; i++) {
                            (songInputs[i] as HTMLInputElement).value = songsList[i];
                          }
                        }, 10);


                      }
                      else {
                        elementInDom.value = item[key];
                      }
                    }
                  }}
                  className="relative pb-[10px] border-b-[1px] border-grey cursor-pointer"
                  key={item.id}>
                  <div className="flex flex-col gap-[5px]">
                    <p className="leading-[17px] text-[12px] text-grey">
                      ID: <span className="text-white">{item.id}</span>
                    </p>
                    <p className="leading-[17px] text-[14px] text-grey">
                      Nickname: <span className="text-white">{item.nickname}</span>
                    </p>
                    <p className="leading-[17px] text-[12px] text-grey">
                      Role: <span className="text-white">{item.role}</span>
                    </p>
                  </div>
                  {/* Add other details as needed */}
                </li>
              ))}
            </ul>
          </div>
        </Transition>
      </div>
    </div>
  );
};