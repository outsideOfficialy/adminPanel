import React, { useEffect } from "react";
import ButtonTemplate from "../ButtonTemplate";
import clsx from "clsx";
import { Transition } from "@headlessui/react";

// Тест array для SearchInput
const testInfo = [
  {
    id: "258789",
    title: "New release is coming out",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis massa non nunc aliquet..."
  },
  {
    id: "258789",
    title: "New release is coming out",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis massa non nunc aliquet..."
  },
  {
    id: "258789",
    title: "New release is coming out",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis massa non nunc aliquet..."
  },
  {
    id: "258789",
    title: "New release is coming out",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis massa non nunc aliquet..."
  }
];

interface InputWrapperProps {
  label?: string;
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

interface InputFieldProps {
  label?: string;
  placeholder: string;
  inputClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

interface SearchInputProps {
  label?: string;
  placeholder: string;
  name: string;
  onSearch: (e: React.MouseEvent<HTMLButtonElement>) => void; // Функция обработчика поиска
}

interface TextAreaFieldProps {
  label: string;
  placeholder: string;
  name: string;
}

interface FileInputProps {
  placeholder: string;
  name: `${string}[]`;
  label?: string;
  id: string;
  multiple?: boolean;
  accept: string;
}

const InputWrapper: React.FC<InputWrapperProps> = ({ label, className, children }) => {
  return (
    <div
      className={clsx(
        "flex flex-col items-start gap-[15px] md:gap-[10px] w-full max-w-[450px] ",
        className ? className : ""
      )}
    >
      {label && (
        <label className="text-white text-[20px] md:text-2xl font-normal leading-6 tracking-wider">
          {label}
        </label>
      )}
      {children}
    </div>
  );
};

const InputTypeText: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  name,
  inputClassName,
  onChange
}) => {
  return (
    <InputWrapper label={label} className={inputClassName}>
      <input
        onChange={onChange ? onChange : undefined}
        type="text"
        placeholder={placeholder}
        name={name}
        className="bg-black border rounded-lg border-white text-white p-[8px] md:p-2.5 max-w-[450px] w-full text-[14px] md:text-base font-normal md:font-medium leading-normal tracking-wider transition duration-300 ease-in-out placeholder-grey focus:border-main-primary-color focus:ring-0 focus:outline-none "
      />
    </InputWrapper>
  );
};

// Инпут для чисел исключительно

const InputTypeNum: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  name,
  inputClassName,
  onChange
}) => {
  return (
    <InputWrapper label={label} className={inputClassName}>
      <input
        onChange={onChange ? onChange : undefined}
        type="number"
        placeholder={placeholder}
        name={name}
        className="inputNum bg-black border rounded-lg border-white text-white p-[8px] md:p-2.5 max-w-[450px] w-full text-[14px] md:text-base font-normal md:font-medium leading-normal tracking-wider transition duration-300 ease-in-out placeholder-grey focus:border-main-primary-color focus:ring-0 focus:outline-none "
      />
    </InputWrapper>
  );
};

const SearchInput: React.FC<SearchInputProps> = ({ label, placeholder, name, onSearch }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const openToggler = (value: boolean) => setIsOpen(value);

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
          <div onClick={() => openToggler(true)} className="relative w-full">
            <input
              type="text"
              placeholder={placeholder}
              name={name}
              className={clsx("bg-black border rounded-lg text-white p-[8px] md:p-2.5 max-w-[450px] w-full text-[14px] md:text-base font-normal md:font-medium leading-normal tracking-wider transition duration-200 ease-in-out placeholder-grey focus:border-main-primary-color focus:ring-0 focus:outline-none", isOpen ? "border-main-primary-color rounded-b-[0px]" : "border-white")}
            />
            <button
              className="material-symbols-outlined search absolute right-0 top-0 bottom-0 bg-main-primary text-white rounded-r-lg p-[8px] md:p-2.5 font-medium transition duration-300 ease-in-out hover:text-main-primary-color"
              onClick={onSearch}
            >
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
          leaveTo="opacity-0 scale-y-0"
        >
        <div className="border-[1px] border-main-primary-color pl-[15px] pr-[5px] py-[10px] rounded-b-[5px]">
          <ul className="max-h-[319px] overflow-scroll pr-[10px] flex flex-col gap-[15px]">
            {testInfo.map((item) => {
              return (
                <li onClick={() => openToggler(false)} className="relative pb-[10px] border-b-[1px] border-grey cursor-pointer" key={item.id}>
                  <div className="flex flex-col gap-[5px]">
                    <p className="leading-[17px] text-[12px]">ID {item.id}</p>
                    <p className="leading-[17px] text-[14px]">Title: {item.title}</p>
                    <p className="leading-[17px] text-[12px]">News text: <span className="text-grey">{item.text}</span></p>
                  </div>
                  <button
                  className="material-symbols-outlined delete absolute right-0 top-0 text-grey transition duration-300 ease-in-out hover:text-main-primary-color"
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
    </div>
  );
};

const TextArea: React.FC<TextAreaFieldProps> = ({ label, placeholder, name }) => {
  return (
    <div className="flex flex-col items-start gap-[10px] w-full">
      {label && (
        <label className="text-white text-[20px] md:text-2xl font-normal leading-6 tracking-wider">
          {label}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        name={name}
        className="bg-black min-h-[150px] border rounded-lg border-white text-white p-[8px] md:p-2.5 w-full text-[14px] md:text-base font-normal md:font-medium leading-normal tracking-wider transition duration-300 ease-in-out placeholder-grey focus:border-main-primary-color focus:ring-0 focus:outline-none"
      />
    </div>
  );
};

const FileInput: React.FC<FileInputProps> = ({
  placeholder,
  name,
  label,
  id,
  multiple = false,
  accept
}) => {
  const [filePath, setFilePath] = React.useState("Your filename...");

  return (
    <InputWrapper label={label}>
      <div>
        <label
          htmlFor={id}
          className="inline-block cursor-pointer py-[7px] px-[10px] md:py-[10px] md:px-[15px] text-[14px] border-white border-[1px] rounded-[5px] mr-[25px]"
        >
          {placeholder}
        </label>
        <input
          accept={accept}
          name={name}
          multiple={multiple}
          type="file"
          className="hidden"
          id={id}
          onChange={(e) => {
            if (!e.target.files) return;
            const arr = [];

            for (let i = 0; i < e.target.files.length; i += 1) {
              const f = e.target.files[i];
              arr.push(f.name);
            }
            setFilePath(arr.join(", "));
          }}
        />
        {/* file name */}
        <span className="text-[14px] md:text-[16px]">{filePath}</span>
      </div>
    </InputWrapper>
  );
};

const SongsInputs: React.FC<{ label: string; name: string }> = ({ label, name }) => {
  const [songsCount, setSongsCount] = React.useState<string[]>([""]);

  const increaseSongList = () => setSongsCount([...songsCount, ""]);
  const decreaseSongList = (idx: number) => {
    if (songsCount.length === 1) return;
    const filteredArray = [...songsCount.filter((el, i) => i !== idx)];
    setSongsCount(filteredArray);
  };
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const newInputs = [...songsCount];
    newInputs[idx] = e.target.value;
    setSongsCount(newInputs);
  };

  return (
    <>
      <InputWrapper label={label} className="gap-[15px] md:gap-[10px]">
        <div className="flex flex-col gap-[15px] md:gap-[25px] w-full">
          {songsCount.map((el, idx) => {
            return (
              <div key={idx} className="flex gap-[15px] md:gap-[10px] items-center">
                <input
                  type="text"
                  className="bg-black border rounded-lg border-white text-white p-[8px] md:p-2.5 max-w-[450px] w-full text-[14px] md:text-base font-normal md:font-medium leading-normal tracking-wider transition duration-300 ease-in-out placeholder-grey focus:border-main-primary-color focus:ring-0 focus:outline-none"
                  value={el}
                  onChange={(e) => inputChange(e, idx)}
                  name={name}
                  placeholder={`Song name №${idx + 1}`}
                />

  return <>
    <InputWrapper label={label} className="gap-[15px] md:gap-[10px]">
      <div className="flex flex-col gap-[15px] md:gap-[25px] w-full">
        {songsCount.map((el, idx) => {
          return <div key={idx} className="flex gap-[15px] md:gap-[10px] items-center">

            <input data-song-count={idx} type="text" className="bg-black border rounded-lg border-white text-white p-[8px] md:p-2.5 max-w-[450px] w-full text-[14px] md:text-base font-normal md:font-medium leading-normal tracking-wider transition duration-300 ease-in-out placeholder-grey focus:border-main-primary-color focus:ring-0 focus:outline-none" value={el} onChange={(e) => inputChange(e, idx)} name={name} placeholder={`Song name №${idx + 1}`} />

            <ButtonTemplate border onClick={() => decreaseSongList(idx)}>
              <span className="delete material-symbols-outlined absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                delete
              </span>
            </ButtonTemplate>
          </div>
        })}
        <ButtonTemplate border onClick={increaseSongList}>
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">+</span>
        </ButtonTemplate>
      </div>
    </InputWrapper>
  </>
};

export { InputTypeText, SearchInput, TextArea, FileInput, SongsInputs, InputTypeNum };
