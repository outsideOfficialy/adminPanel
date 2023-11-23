import React from "react"
import ButtonTemplate from "../ButtonTemplate"
import Image from "next/image"
import { Transition } from "@headlessui/react"
import Loader from "../Loader"

import apple_music from "../../src/icons/itunes.svg"
import spotify from "../../src/icons/spotify.svg"
import soundcloud from "../../src/icons/soundcloud.svg"
import youtubeMusic from "../../src/icons/youtubeMusic.svg"

const icons: {
  [key: string]: any;
  apple_music: any;
  spotify: any;
  soundcloud: any;
  youtubeMusic: any;
} = {
  apple_music, spotify, soundcloud, youtubeMusic
}

interface ConfirmModalProps {
  isOpened: boolean
  onSetModal: (value: boolean) => void
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpened, onSetModal }) => {

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
      <ConfirmModalBody isOpened={isOpened} onSetModal={onSetModal} />
    </Transition>
  )
}

//! is a very neccessary shit
const ConfirmModalBody: React.FC<ConfirmModalProps> = ({ isOpened, onSetModal }) => {
  const [isSending, setIsSending] = React.useState(false);
  const [formData, setFormData] = React.useState<FormData | null>(null);

  React.useEffect(() => {
    const form = document.querySelector("form")!;
    setFormData(new FormData(form));
  }, []);


  return <div className="relative z-[10]">
    {<div className={"w-[360px] md:w-[690px] flex flex-col justify-center items-center gap-[30px] md:gap-[50px] p-[15px] md:px-[65px] md:pt-[80px] md:pb-[50px] bg-black border border-primary-color"}>
      <div className="w-full flex justify-center">
        <button
          type="button"
          onClick={() => onSetModal(false)}
          className="close absolute top-[20px] right-[20px] w-[24px] h-[24px] hover:text-main-primary-color material-symbols-outlined"
        >
          close
        </button>
        <h3 className="max-w-[215px] md:max-w-none text-[26px] md:text-[36px] text-center font-semibold">Confirmation of sending data</h3>
      </div>
      <div className="w-full max-h-[576px] overflow-auto flex flex-col gap-[45px] pr-[15px]">
        {isOpened && formData && Array.from(formData!.entries()).map((el, idx) => {
          //! -------------------------------------------------------------------------------------------
          const fieldName = el[0] as string;
          const fieldVal = el[1];
          const allLabels: NodeListOf<HTMLLabelElement> = document.querySelectorAll("label");

          const uniteLinksToPlatfrom = () => {
            const allLinks: NodeListOf<HTMLInputElement> = document.querySelectorAll(`input[name^="social_media_links"][name$="[link]"]`);
            const allPlatforms: NodeListOf<HTMLInputElement> = document.querySelectorAll(`input[name^="social_media_links"][name$="[platform]"]`);

            const platformsObj: { link: string, icon: any }[] = [];

            allLinks.forEach((el, index) => {
              platformsObj.push({
                link: el.value,
                icon: icons[allPlatforms[index].value]
              });
            });

            return <ModalListItem title="Links:">
              {platformsObj.map((el, idx) => {
                return <p key={idx} title={el.link}>
                  <Image className="platform-img" src={el.icon} alt="Platform link" />
                </p>
              })}
            </ModalListItem>;
          }

          const createImgPreview = () => {
            return <img src="" alt="" />
          }

          const createSongsList = () => {

          }

          if (fieldName.includes("social_media_links")) {
            const [, index, field] = fieldName.match(/\[(\d+)\]\[(\w+)\]/) as string[];
            if (+index > 0 || field === "link") return <></>;
            return uniteLinksToPlatfrom();
          }
          else if (typeof fieldVal === "object") {
            return createImgPreview();
          }
          else {
            if (fieldName === "music_type") return <ModalListItem title={`Release type:`}>{fieldVal}</ModalListItem>
            console.log(fieldName);
            return <ModalListItem title={`${allLabels[idx].textContent}:`}>{fieldVal}</ModalListItem>
          }
        })}

      </div>
      <div className="w-full text-center flex justify-center items-center gap-[25px]">
        <ButtonTemplate primary onClick={() => setIsSending(!isSending)} type="button" className="bg-main-primary-color">
          Send
        </ButtonTemplate>
        <Transition
          show={isSending}
          enter="transition-all duration-700 ease-in-out"
          enterFrom="translate-x-[300%] opacity-0"
          enterTo="translate-x-0 opacity-100"
          leave="transition-all duration-700 ease-in-out"
          leaveFrom="translate-x-0 opacity-100"
          leaveTo="translate-x-[300%] opacity-0"
        >
          <Loader open={isSending} />
        </Transition>
      </div>
    </div>}
  </div>
}

interface ModalListItemProps {
  children: React.ReactNode | React.ReactNode[] | string;
  title: `${string}:`;
}

const ModalListItem: React.FC<ModalListItemProps> = ({
  children, title
}) => {

  return <div>
    <h4 className="text-[20px] md:text-[24px] font-normal md:font-medium mb-[15px]">{title}</h4>
    <div className="pl-[10px] flex gap-[15px]">
      {children}
    </div>
  </div>
}

export default ConfirmModal