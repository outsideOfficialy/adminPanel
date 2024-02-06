import InputMask from "react-input-mask";
import { InputFieldProps } from "./interfaces";
import { InputWrapper } from "./inputWrapper";
import React, { useEffect } from "react";


export const InputTypeData: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  name,
  inputClassName,
  // onChange,
  value
}) => {
  const [inputVal, setInputVal] = React.useState("");

  useEffect(() => {
    if (value) setInputVal(value);
  }, [value]);

  return (
    <InputWrapper label={label} className={inputClassName}>
      <InputMask
        mask="99/99/9999"
        onChange={(e) => {
          setInputVal(e.currentTarget.value);
        }}
        type="text" // Изменил тип на "text"
        placeholder={placeholder}
        name={name}
        value={inputVal}
        className="bg-black border rounded-lg border-white text-white p-[8px] md:p-2.5 max-w-[450px] w-full text-[14px] md:text-base font-normal md:font-medium leading-normal tracking-wider transition duration-300 ease-in-out placeholder-grey focus:border-main-primary-color focus:ring-0 focus:outline-none "
      />
    </InputWrapper>
  );
};