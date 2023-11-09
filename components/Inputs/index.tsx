import React, { useEffect } from "react";
import { ButtonSecondary } from "../ButtonTemplate";
import clsx from "clsx";

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
  onSearch: () => void; // Функция обработчика поиска
}

interface TextAreaFieldProps {
  label: string;
  placeholder: string;
  name: string;
}

interface FileInputProps {
  placeholder: string;
  name: string;
  label?: string;
  id: string;
  multiple?: boolean;
  accept: string;
}

const InputWrapper: React.FC<InputWrapperProps> = ({
  label, className, children
}) => {
  return <div className={clsx("flex flex-col items-start gap-[10px] w-full max-w-[450px] ", className ? className : "")}>
    {label && (
      <label className="text-white text-2xl font-normal font-medium font-normal leading-6 tracking-wider">
        {label}
      </label>
    )}
    {children}
  </div>;
}

const InputTypeText: React.FC<InputFieldProps> = ({ label, placeholder, name, inputClassName, onChange }) => {
  return (
    <InputWrapper label={label} className={inputClassName}>
      <input
        onChange={onChange ? onChange : undefined}
        type="text"
        placeholder={placeholder}
        name={name}
        className="bg-black border rounded-lg border-white text-white p-2.5 max-w-[450px] w-full text-base font-normal font-medium leading-normal tracking-wider transition duration-300 ease-in-out placeholder-grey focus:border-main-primary-color focus:ring-0 focus:outline-none "
      />
    </InputWrapper>
  );
};


// TODO надо заменить по принципу InputTypeText остальные инпуты
const SearchInput: React.FC<SearchInputProps> = ({ label, placeholder, name, onSearch }) => {
  return (
    <div className="flex flex-col items-start gap-[10px] w-full max-w-[450px]">
      {label && (
        <label className="text-white text-2xl font-normal font-medium font-normal leading-6 tracking-wider">
          {label}
        </label>
      )}
      <div className="relative w-full">
        <input
          type="text"
          placeholder={placeholder}
          name={name}
          className="bg-black border rounded-lg border-white text-white p-2.5 max-w-[450px] w-full text-base font-normal font-medium leading-normal tracking-wider transition duration-300 ease-in-out placeholder-grey focus:border-main-primary-color focus:ring-0 focus:outline-none"
        />
        <button
          className="material-symbols-outlined search absolute right-0 top-0 bottom-0 bg-main-primary text-white rounded-r-lg p-2.5 font-normal font-medium transition duration-300 ease-in-out hover:text-main-primary-color"
          onClick={onSearch}
        >
          search
        </button>
      </div>
    </div>
  );
};

const TextArea: React.FC<TextAreaFieldProps> = ({ label, placeholder, name }) => {
  return (
    <div className="flex flex-col items-start gap-[10px] w-full">
      {label && (
        <label className="text-white text-2xl font-normal font-medium font-normal leading-6 tracking-wider">
          {label}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        name={name}
        className="bg-black min-h-[150px] border rounded-lg border-white text-white p-2.5 w-full text-base font-normal font-medium leading-normal tracking-wider transition duration-300 ease-in-out placeholder-grey focus:border-main-primary-color focus:ring-0 focus:outline-none"
      />
    </div>
  );
};

const FileInput: React.FC<FileInputProps> = ({
  placeholder, name, label, id, multiple = false, accept
}) => {

  const [filePath, setFilePath] = React.useState("Your filename...");

  return <InputWrapper label={label}>
    <div>
      <label htmlFor={id}
        className="inline-block cursor-pointer py-[10px] px-[15px] text-[14px] border-white border-[1px] rounded-[5px] mr-[25px]"
        >{placeholder}</label>
      <input accept={accept} name={name} multiple={multiple} type="file" className="hidden" id={id} onChange={(e) => {

        if (!e.target.files) return;
        const file = e.target.files[0];
        const arr = [];

        for (let i = 0, file = e.target.files[i]; i < e.target.files.length; i += 1) arr.push(file.name);
        file ? setFilePath(arr.join(", ")) : setFilePath("Something wrong...");

      }} />
      {/* file name */}
      <span>{filePath}</span>
    </div>
  </InputWrapper>;
}

const SongsInputs: React.FC<{label: string; name: string;}> = ({
  label,
  name
}) => {
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
  }


  return <>
    <InputWrapper label={label} className="gap-[25px]">
      <div className="flex flex-col gap-[25px] w-full">
        {songsCount.map((el, idx) => {
          return <div key={idx} className="flex gap-[10px] items-start">
            
            <input type="text" className="bg-black border rounded-lg border-white text-white p-2.5 max-w-[450px] w-full text-base font-medium leading-normal tracking-wider transition duration-300 ease-in-out placeholder-grey focus:border-main-primary-color focus:ring-0 focus:outline-none" value={el} onChange={(e) => inputChange(e, idx)} name={name} placeholder={`Song name №${idx + 1}`} />
            
            <ButtonSecondary onClick={() => decreaseSongList(idx)} className="shadow-none relative w-full max-w-[46px] min-h-[46px]">
              <span className="material-symbols-outlined absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                delete
              </span>
            </ButtonSecondary>
          </div>
        })}
        <ButtonSecondary onClick={increaseSongList} className="relative shadow-none px-[15px] min-h-none max-w-[46px] min-h-[46px]">
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">+</span>
        </ButtonSecondary>
      </div>
    </InputWrapper>
  </>
};

export { InputTypeText, SearchInput, TextArea, FileInput, SongsInputs };
