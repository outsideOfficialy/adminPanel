import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Transition } from "@headlessui/react";
import { SearchInputProps } from "./interfaces";
import ModalTemplate from "../ModalTemplate";
import ButtonTemplate from "../ButtonTemplate";

let recordId: string;

export const SearchInput: React.FC<SearchInputProps> = ({
  label,
  placeholder,
  name,
  pageSearch,
  setFileList,
  setSongsList
}) => {
  const [showConfirmationModal, setShowConfirmationModal] = React.useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const serverRoot = "http://admin-panel-backend";

  const openToggler = (value: boolean) => setIsOpen(value);

  const handleSearch = (id: string) => {
    fetch(`http://admin-panel-backend/${pageSearch}/${id}`, { method: "GET" })
      .then((d) => {
        if (d.ok) {
          return d.json();
        }
        return d.text().then((errorData) => {
          throw new Error(errorData || "Произошла ошибка запроса");
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


  const deleteHandle = (id: string) => {
    // console.log(`http://admin-panel-backend/${pageSearch}/${id}`);
    fetch(`${serverRoot}/${pageSearch}/${id}`, { method: "DELETE" })
      .then((d) => {
        console.log(d);
        // if (!d.ok) {
        //   return d.text().then(errorData => {
        //     throw new Error(errorData || "Произошла ошибка запроса");
        //   });
        // }
        // console.log(d);
      })
      // .then((d) => {
      //   console.log(d);
      // })
      .catch((reason) => console.log(reason));
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    setIsOpen(searchResults.length > 0);
  }, [searchResults]);

  return (<>
    {showConfirmationModal && <CountDownModal pageSearch={pageSearch} setShowConfirmationModal={setShowConfirmationModal} showConfirmationModal={showConfirmationModal} />}
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
              onChange={(e) => handleSearch(e.target.value)}
            />
            {isOpen ? (
              <button
                type="button"
                className="material-symbols-outlined close absolute right-0 top-0 bottom-0 bg-main-primary text-white rounded-r-lg p-[8px] md:p-2.5 font-medium transition duration-300 ease-in-out hover:text-main-primary-color"
                onClick={toggleDropdown}
              >
                close
              </button>
            ) : (
              <button
                type="button"
                className="material-symbols-outlined search absolute right-0 top-0 bottom-0 bg-main-primary text-white rounded-r-lg p-[8px] md:p-2.5 font-medium transition duration-300 ease-in-out hover:text-main-primary-color"
                onClick={toggleDropdown}
              >
                search
              </button>
            )}
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
          leaveTo="opacity-0 scale-y-0"
        >
          <div className="border-[1px] border-main-primary-color pl-[15px] pr-[5px] py-[10px] rounded-b-[5px]">
            <ul className="max-h-[319px] overflow-scroll pr-[10px] flex flex-col gap-[15px]">
              {searchResults &&
                searchResults.map((item) => (
                  <li
                    className="relative pb-[10px] border-b-[1px] border-grey cursor-pointer"
                    key={item.id}
                  >
                    <div
                      className="flex flex-col gap-[5px]"
                      onClick={() => {
                        openToggler(false);

                        for (const key in item) {
                          const elementInDom = document.querySelector(`form [name^=${key}]`) as
                            | HTMLInputElement
                            | HTMLTextAreaElement;
                          if (!elementInDom) continue;

                          if (key.includes("preview_picture") && setFileList) {
                            const allFilesInput: NodeListOf<HTMLInputElement> = document.querySelectorAll("input[type='file']");
                            if (allFilesInput.length) {
                              allFilesInput.forEach((el, idx) => el.value = "");
                            }

                            setFileList({
                              [key]: item[key]
                            });
                          } else if (key === "social_media_links") {
                            // инпут с соц сетями
                            const socialLinks = JSON.parse(item[key]);

                            for (let i = 0; i < socialLinks.length; i++) {
                              const linkInput = document.querySelector(
                                `form [value=${socialLinks[i].platform}`
                              ) as HTMLInputElement;
                              (linkInput.nextElementSibling as HTMLInputElement).value =
                                socialLinks[i].link;
                            }
                          }
                          else if (key === "music_type") {
                            // инпут радиокнопки
                            (elementInDom as HTMLInputElement).checked = true;
                          }
                          else if (key === "release_songs" && JSON.parse(item[key]).length !== 1 && setSongsList) {
                            // инпут с релизами песен
                            const songsList = JSON.parse(item[key]);
                            setSongsList(songsList);
                          } else {
                            // обычный инпут
                            elementInDom.value = item[key];
                          }
                        }
                      }}
                    >
                      <p className="leading-[17px] text-[12px] text-grey">
                        ID: <span className="text-white">{item.id}</span>
                      </p>
                      <p className="leading-[17px] text-[14px] text-grey">
                        {(function () {
                          const keys = Object.keys(item);
                          switch (true) {
                            case keys.includes("nickname"):
                              return "Nickname";
                            case keys.includes("title"):
                              return "Title";
                            case keys.includes("release_name"):
                              return "Name";
                          }
                        })()}
                        :{" "}
                        <span className="text-white">
                          {item.nickname || item.title || item["release_name"]}
                        </span>
                      </p>
                      <p className="leading-[17px] text-[12px] text-grey">
                        {(function () {
                          const keys = Object.keys(item);
                          switch (true) {
                            case keys.includes("role"):
                              return "Role";
                            case keys.includes("description"):
                              return "Descr.";
                            case keys.includes("music_type"):
                              return "Type";
                            case keys.includes("content"):
                              return "Content";
                          }
                        })()}
                        :{" "}
                        <span className="text-white">
                          {item.role || item.description || item["music_type"] || item.content}
                        </span>
                      </p>
                    </div>
                    <p
                      onClick={() => {
                        recordId = item.id;
                        // deleteHandle(item.id)
                        setShowConfirmationModal(true);
                      }}
                      className="delete hover:text-sub-primary-color transition duration-300 z-3 material-symbols-outlined absolute p-[8px] top-[0px] right-[0px]"
                    >
                      delete
                    </p>
                    {/* Add other details as needed */}
                  </li>
                ))}
            </ul>
          </div>
        </Transition>
      </div>
    </div>
  </>
  );
};

interface CountDownModalProps {
  showConfirmationModal: boolean;
  setShowConfirmationModal: (v: boolean) => void;
  pageSearch: string;
}

const CountDownModal: React.FC<CountDownModalProps> = ({
  showConfirmationModal,
  setShowConfirmationModal,
  pageSearch
}) => {
  const [timeLeft, setTimeLeft] = React.useState<number>(3000);

  const deleteHandle = () => {

    // тут я еще буду настраивать
    // console.log(`http://admin-panel-backend/${pageSearch}/${id}`);
    fetch(`http://admin-panel-backend/${pageSearch}/${recordId}`, { method: "DELETE" })
      .then((d) => {
        console.log(d);
        // if (!d.ok) {
        //   return d.text().then(errorData => {
        //     throw new Error(errorData || "Произошла ошибка запроса");
        //   });
        // }
        // console.log(d);
      })
      // .then((d) => {
      //   console.log(d);
      // })
      .catch((reason) => console.log(reason));
  };


  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1000);
    }, 1000);

    if (!timeLeft) clearInterval(intervalId);
  }, [timeLeft]);

  return <ModalTemplate closeBtn isOpened={showConfirmationModal} setIsOpened={setShowConfirmationModal}>
    <div className="p-[20px] w-[360px]">
      <div className="w-full max-w-[196px] flex flex-col items-center mx-auto text-center">
        <h3 className="text-[20px] font-medium mb-[30px]">Сonfirmation deletion of news</h3>
        <p className="text-[16px] mb-[50px]">Do you really want to delete post "{recordId}"?</p>

        <ButtonTemplate
          className="mb-[20px]"
          onClick={(e) => {
            setShowConfirmationModal(false);
          }}
          type="button"
          smallSecondary
        >
          Close
        </ButtonTemplate>
        <ButtonTemplate
          disabled={timeLeft !== 0}
          onClick={(e) => {
            //! Sending data to deletion
            deleteHandle();
          }}
          type="button"
          smallPrimary
        >
          Delete
          {timeLeft / 1000 ? <span > {timeLeft / 1000}...</span> : ""}
        </ButtonTemplate>
      </div>
    </div>
  </ModalTemplate>;
}
