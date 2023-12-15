import { FileInputProps } from "./interfaces";
import React from "react";
import { InputWrapper } from "./inputWrapper";
import ButtonTemplate from "../ButtonTemplate";


export const FileInput: React.FC<FileInputProps> = ({
  placeholder,
  name,
  label,
  id,
  multiple = false,
  accept,
}) => {
  const [files, setFiles] = React.useState<string | FileList>("Your filename...");

  return (
    <InputWrapper label={label}>
      <div>
        <label
          htmlFor={id}
          className="inline-block cursor-pointer py-[7px] px-[10px] md:py-[10px] md:px-[15px] text-[14px] border-white border-[1px] rounded-[5px] mr-[25px] mb-[15px]"
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
            setFiles(e.target.files);
          }}
        />
        {/* file name */}
        {function () {
          if (typeof files === "string") {
            return <span className="text-[14px] md:text-[16px]">{files}</span>
          }

          return <div className="flex flex-col gap-[15px]">
            {Array.from(files).map((el, idx) => {

              return <div className="flex gap-[15px] items-center relative">
                <img className="max-w-[100px] max-h-[150px]" src={URL.createObjectURL(el)} alt={el.name} />
                <span>{el.name}</span>
                <div className="absolute left-[calc(100%+15px)] min-w-[50px]">
                  <ButtonTemplate border onClick={() => {
                    const filesArray = Array.from(files);
                    filesArray.splice(idx, 1);
                    console.log(filesArray);
                  }}>
                    <span className="delete material-symbols-outlined absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      delete
                    </span>
                  </ButtonTemplate>
                </div>
              </div>;
            })}
          </div>;
        }()}
      </div>
    </InputWrapper>
  );
};