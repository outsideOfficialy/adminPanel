import React from "react";
import ButtonTemplate from "../ButtonTemplate";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import Loader from "../Loader";

import musicIcons from "../../utils/icons/musicIcons";
import membersIcons from "../../utils/icons/membersIcons";

interface ConfirmModalProps {
  isOpened: boolean;
  isSending: boolean;
  successSending: boolean | undefined;
  onSetModal: (value: boolean) => void;
  setIsSending: (value: boolean) => void;
}

interface ModalListItemProps {
  children: React.ReactNode | React.ReactNode[] | string;
  title: `${string}:`;
  column?: boolean;
}

interface ModalBodySliderProps {
  files: FileList | string[];
}

const RenderConfirmBody: React.FC = React.memo(({ }) => {
  const allContainers = document.querySelectorAll("form > div");
  const mapedEl: React.ReactNode[] = [];

  const createTextInputConfirm = (el: HTMLInputElement | HTMLTextAreaElement, label: string) => {
    mapedEl.push(
      <ModalListItem key={new Date().getTime() + new Date().getMilliseconds()} title={`${label}:`}>
        {el.value}
      </ModalListItem>
    );
  };

  const createLinks = () => {
    const allPlatforms = document.querySelectorAll(
      'input[name^="social_media_links["][name$="][platform]"]'
    );
    const allLinks = document.querySelectorAll(
      'input[name^="social_media_links["][name$="][link]"]'
    );
    const linkMap = Array.from(allLinks);

    const createIcon = (num: number) => {
      const input = allPlatforms[num] as HTMLInputElement;
      const currentLink = (allLinks[num] as HTMLInputElement).value;

      return (
        <Image
          title={currentLink === "" ? "No link" : currentLink}
          className="platform-img cursor-pointer"
          src={musicIcons[input.value.replaceAll("_", " ")] ? musicIcons[input.value.replaceAll("_", " ")] : membersIcons[input.value.replaceAll("_", " ")]}
          alt={input.value}
        />
      );
    };

    mapedEl.push(
      <ModalListItem title="Links:">
        {linkMap.map((el, num) => {
          return <span>{createIcon(num)}</span>;
        })}
      </ModalListItem>
    );
  };

  allContainers.forEach((el, idx) => {
    const label = el.querySelector("label");
    if (!label) return;

    const inputs = el.querySelectorAll("input, textarea") as NodeListOf<HTMLInputElement | HTMLTextAreaElement>;

    if (inputs.length >= 2) {
      inputs.forEach((input, index) => {
        if (input.matches(`input[type="radio"]:checked`)) {
          mapedEl.push(
            <ModalListItem key={idx} title={`${label.textContent}:`}>
              {input.id}
            </ModalListItem>
          );
        }

        if (input.name === "release_name") {
          mapedEl.push(
            <ModalListItem key={idx} title="Release name:">
              {input.value}
            </ModalListItem>
          );
        }

        // для соц платформ
        if (input.matches('input[name="social_media_links[0][platform]"]')) {
          createLinks();
        }

        if (input.dataset.songCount === "0") {
          const allReleases = Array.from(
            document.querySelectorAll(
              'input[name^="release_songs"]'
            ) as NodeListOf<HTMLInputElement>
          );

          mapedEl.push(
            <ModalListItem title="Release song(s):" column>
              {allReleases.map((el, index) => {
                return <div>{el.value}</div>;
              })}
            </ModalListItem>
          );
        }
      });
    } else {
      if (!inputs[0].name.includes("id")) {

        if (inputs[0].name.includes("preview_picture")) {
          const fileInput = inputs[0] as HTMLInputElement;

          if (!fileInput.files?.length) {
            const imgsContainer = fileInput.nextElementSibling;

            if (!imgsContainer) return;

            const allImgs = imgsContainer.querySelectorAll("img");
            const allImgsSrc = Array.from(allImgs).map((el, idx) => el.src);

            mapedEl.push(
              <ModalListItem title={`${label.textContent?.replaceAll("*", "")}:`}>
                <ModalBodySlider files={allImgsSrc} />
              </ModalListItem>
            );

          }
          else {
            mapedEl.push(
              <ModalListItem title={`${label.textContent?.replaceAll("*", "")}:`}>
                <ModalBodySlider files={fileInput.files} />
              </ModalListItem>
            );
          }

        }
        else if (inputs[0].name === "send_later") {
          if (inputs[0].value.trim() !== "") {
            mapedEl.push(
              <ModalListItem title={`${label.textContent?.replaceAll("*", "")}:`}>
                {inputs[0].value}
              </ModalListItem>
            );
          }
        }
        else {
          createTextInputConfirm(inputs[0], label.textContent?.replaceAll("*", "") as string);
        }
      }
    }
  });

  return <>{mapedEl.map((el) => el)}</>;
});

const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpened, onSetModal, successSending, isSending, setIsSending }) => {
  // const [isSending, setIsSending] = React.useState(false);

  return (
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
            <button
              type="button"
              onClick={() => {
                onSetModal(false)
                setIsSending(false);
              }}
              className="close absolute top-[20px] right-[20px] w-[24px] h-[24px] hover:text-main-primary-color material-symbols-outlined"
            >
              close
            </button>
            <h3 className="max-w-[215px] md:max-w-none text-[26px] md:text-[36px] text-center font-semibold">
              Confirmation of sending data
            </h3>
          </div>
          <div className="w-full max-h-[576px] overflow-auto flex flex-col gap-[45px] pr-[15px] pb-[10px]">
            <RenderConfirmBody />
          </div>
          <div className="w-full text-center flex justify-center items-center gap-[25px]">
            <ButtonTemplate
              primary
              onClick={() => {
                setIsSending(true);
              }}
              type="submit"
              className="bg-main-primary-color"
            >
              Send
            </ButtonTemplate>
            <Transition
              show={isSending && successSending === undefined}
              enter="transition-all duration-700 ease-in-out"
              enterFrom="translate-x-[300%] opacity-0"
              enterTo="translate-x-0 opacity-100"
              leave="transition-all duration-700 ease-in-out"
              leaveFrom="translate-x-0 opacity-100"
              leaveTo="translate-x-[300%] opacity-0"
            >
              <Loader open={isSending && successSending === undefined} />
            </Transition>
            {successSending === false && <>
              {/* Тут если отправка не удалась то вызвать модалку об неудачном отправлении */}
            </>}
            {successSending === true && <>
              {(function () {
                setTimeout(() => window.location.reload(), 1000);
              })()}
              {/* Тут если отправка не удалась то вызвать модалку об успешном отправлении */}
            </>}
          </div>
        </div>
      </div>
    </Transition>
  );
};

const ModalListItem: React.FC<ModalListItemProps> = ({ children, title, column = false }) => {
  return (
    <div>
      <h4 className="text-[20px] md:text-[24px] font-normal md:font-medium mb-[15px]">{title}</h4>
      <div className={`pl-[10px] flex gap-[15px] ${column ? "flex-col" : ""}`}>{children}</div>
    </div>
  );
};

const ModalBodySlider: React.FC<ModalBodySliderProps> = ({
  files
}) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const increaseSlide = () => {
    if (currentSlide + 1 >= files.length) setCurrentSlide(0);
    else setCurrentSlide(currentSlide + 1);
  };
  const decreaseSlide = () => {
    if (currentSlide - 1 < 0) setCurrentSlide(files.length - 1);
    else setCurrentSlide(currentSlide - 1);
  };

  return <div className="relative w-full">
    {files.length > 1 ? <><div className="absolute h-full w-[10%] left-0 cursor-pointer" title="Flip the image" onClick={decreaseSlide}></div>

      <div className="absolute h-full w-[10%] right-0 cursor-pointer" title="Flip the image" onClick={increaseSlide}></div></> : null}

    {function () {
      const imgArray = [];
      for (let i = 0; i < files.length; i++) imgArray.push(<img className="border-[1px] border-main-primary-color w-full h-auto" src={function () {
        return Array.isArray(files) ? files[i] : URL.createObjectURL(files[i]);
      }()} alt="preview_image" />);
      return <>{imgArray[currentSlide]}</>
    }()}
    {function () {
      if (files.length <= 1) return <></>;

      return <div className="absolute bottom-[20px] left-[20px] flex gap-[20px]">
        {(function () {
          if (files instanceof FileList) return Array.from(files);
          else if (Array.isArray(files)) return files;
          return [];
        }()).map((el, idx) => {
          return <div className={`w-[20px] h-[20px] rounded-full border-[1px] border-white cursor-pointer ${idx === currentSlide ? "bg-white" : ""}`}
            onClick={() => setCurrentSlide(idx)}></div>;
        })}
      </div>
    }()}
  </div>;
};

export default ConfirmModal;
