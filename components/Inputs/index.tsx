import React from "react";

interface InputFieldProps {
  label?: string;
  placeholder: string;
  name: string;
}

const InputTypeText: React.FC<InputFieldProps> = ({ label, placeholder, name }) => {
  return (
    <div className="flex flex-col items-start gap-[10px] w-full">
      {label && (
        <label className="text-white text-2xl font-normal font-medium font-normal leading-6 tracking-wider">
          {label}
        </label>
      )}
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        className="bg-black border rounded-lg border-white text-white p-2.5 max-w-[450px] w-full text-base font-normal font-medium leading-6 tracking-wider transition duration-300 ease-in-out placeholder-grey focus:border-main-primary-color focus:ring-0 focus:outline-none"
      />
    </div>
  );
};

const InputTypeTextArea: React.FC<InputFieldProps> = ({ label, placeholder, name }) => {
  return (
    <div className="flex flex-col items-start gap-[10px] w-full">
      {label && (
        <label className="text-white text-2xl font-normal font-medium font-normal leading-6 tracking-wider">
          {label}
        </label>
      )}
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        className="bg-black border rounded-lg border-white text-white p-2.5 max-w-[450px] w-full text-base font-normal font-medium leading-6 tracking-wider transition duration-300 ease-in-out placeholder-grey focus:border-main-primary-color focus:ring-0 focus:outline-none"
      />
    </div>
  );
};

export { InputTypeText, InputTypeTextArea };
