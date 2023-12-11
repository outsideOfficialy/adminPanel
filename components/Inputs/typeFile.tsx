import { FileInputProps } from "./interfaces";
import React from "react";
import { InputWrapper } from "./inputWrapper";


export const FileInput: React.FC<FileInputProps> = ({
  placeholder,
  name,
  label,
  id,
  multiple = false,
  accept,
  value
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