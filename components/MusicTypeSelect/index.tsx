import React, { useState } from "react";

interface RadioSpanProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (name: string) => void;
  selectedName: string;
}

const RadioSpan: React.FC<RadioSpanProps> = ({ label, name, checked, onChange, selectedName }) => {
  const toggleCheck = () => {
    onChange(name);
  };

  return (
    <div className="flex gap-[10px] items-center cursor-pointer w-fit" onClick={toggleCheck}>
      <span
        className={`material-symbols-outlined check rounded-full text-sm p-[3px] font-normal font-medium transition duration-200 ease-in-out w-fit ${
          name === selectedName
            ? "border-2 border-main-primary-color bg-main-primary-color text-white"
            : "border-2 border-main-primary-color bg-black text-black"
        }`}
      >
        check
      </span>
      <p className="text-white text-2xl font-normal font-medium font-normal leading-6 tracking-wider">
        {label}
      </p>
    </div>
  );
};

const RadioGroup: React.FC = () => {
  const options = [
    { label: "Album", name: "option1" },
    { label: "Single", name: "option2" }
  ];

  const [selectedName, setSelectedName] = useState("");

  const handleRadioChange = (name: string) => {
    setSelectedName(name);
  };

  return (
    <div className="flex gap-[10px] flex-col w-fit">
      {options.map((option, index) => (
        <RadioSpan
          key={index}
          label={option.label}
          name={option.name}
          checked={option.name === selectedName}
          onChange={handleRadioChange}
          selectedName={selectedName}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
