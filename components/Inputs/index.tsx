import React from "react";
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

interface SingleFileInputProps {
  placeholder: string;
  name: string;
  label?: string;
  id: string;
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

const InputTypeText: React.FC<InputFieldProps> = ({ label, placeholder, name, inputClassName }) => {
  return (
    <InputWrapper label={label} className={inputClassName}>
      <input
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

const SingleFileInput: React.FC<SingleFileInputProps> = ({
  placeholder, name, label, id
}) => {

  const [filePath, setFilePath] = React.useState("path/to/your/file");

  return <InputWrapper label={label}>
    <div>
      <label htmlFor={id}
        className="inline-block cursor-pointer py-[10px] px-[15px] text-[14px] border-white border-[1px] rounded-[5px] mr-[25px]"
        >{placeholder}</label>
      <input name={name} type="file" className="hidden" id={id} />
      {/* file name */}
      <span>{filePath}</span>
    </div>
  </InputWrapper>;
}

export { InputTypeText, SearchInput, TextArea, SingleFileInput };
