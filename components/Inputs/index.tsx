import React from "react";

interface InputFieldProps {
  label?: string;
  placeholder: string;
  name: string;
}

interface SearchInputProps {
  label?: string;
  placeholder: string;
  name: string;
  onSearch: () => void; // Функция обработчика поиска
}

const InputTypeText: React.FC<InputFieldProps> = ({ label, placeholder, name }) => {
  return (
    <div className="flex flex-col items-start gap-[10px] w-full max-w-[450px]">
      {label && (
        <label className="text-white text-2xl font-normal font-medium font-normal leading-6 tracking-wider">
          {label}
        </label>
      )}
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        className="bg-black border rounded-lg border-white text-white p-2.5 max-w-[450px] w-full text-base font-normal font-medium leading-normal tracking-wider transition duration-300 ease-in-out placeholder-grey focus:border-main-primary-color focus:ring-0 focus:outline-none"
      />
    </div>
  );
};

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

export { InputTypeText, SearchInput };
