import React from "react";

interface InputFieldProps {
  label?: string;
  placeholder: string;
  name: string;
}

const InputTypeText: React.FC<InputFieldProps> = ({ label, placeholder, name }) => {
  return (
    <div>
      {label && (
        <label className="text-white text-2xl font-normal font-medium font-normal leading-6 tracking-wider">
          {label}
        </label>
      )}
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        className="bg-black border rounded-lg border-white text-white p-2.5 max-w-[450px] w-full text-base font-normal font-medium leading-6 tracking-wider transition duration-300 ease-in-out placeholder-grey"
      />
    </div>
  );
};

const InputTypeTextArea: React.FC<InputFieldProps> = ({ label, placeholder, name }) => {
  return (
    <div>
      {label && (
        <label className="text-white text-2xl font-normal font-medium font-normal leading-6 tracking-wider">
          {label}
        </label>
      )}
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        className="bg-black border rounded-lg border-white text-white p-2.5 max-w-[450px] w-full text-base font-normal font-medium leading-6 tracking-wider transition duration-300 ease-in-out placeholder-grey"
      />
    </div>
  );
};

export { InputTypeText, InputTypeTextArea };
