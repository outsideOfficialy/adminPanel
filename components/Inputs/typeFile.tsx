import { FileInputProps } from "./interfaces";
import React, { useEffect } from "react";
import { InputWrapper } from "./inputWrapper";
// import ButtonTemplate from "../ButtonTemplate";
import ImgInputDisplay from "../ImgInputDisplay";

export const FileInput: React.FC<FileInputProps> = ({
  placeholder,
  name,
  label,
  id,
  multiple = false,
  accept,
  required,
  fileList,
}) => {
  const [files, setFiles] = React.useState<null | FileList | { [key: string]: string }>(null);
  const serverRoot = "http://admin-panel-backend";

  useEffect(() => {
    (fileList && fileList[name.replaceAll(/[\[\]]/g, "")] && fileList[name.replaceAll(/[\[\]]/g, "")] !== "") ? setFiles(fileList) : null;
  }, [fileList]);

  function updateFileDisplay() {
    if (!files) return <span className="absolute translate w-max text-[14px] md:text-[16px] top-1/2 -translate-y-[calc(50%+7px)] left-full">Your files...</span>;

    const nameOfField = name.replaceAll(/[\[\]]/g, "");
    if (!(files instanceof FileList) && (files[nameOfField] && files[nameOfField] !== "")) {
      const valOfField: string[] = JSON.parse(files[nameOfField]);
      
      return <>
        {valOfField.map((el, idx) => {
          const temp = el.split("/");
          const fileName = temp[temp.length - 1];
          return <ImgInputDisplay key={idx} src={serverRoot + "/" + el} imgName={fileName} />
        })}
      </>;
    }

    if (files instanceof FileList) {
      return <>
        {Array.from(files).map((el, idx) => {
          return <ImgInputDisplay key={idx} src={el} imgName={el.name} />
        })}
      </>;
    }

    return <>Error!</>
  }

  return (
    <InputWrapper label={label}>
      <div className="relative">
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
          {...(required ? { required: true } : {})}
          onChange={(e) => {
            if (!e.target.files) return;
            setFiles(e.target.files);
          }}
        />
        {/* file name */}
        <div className="flex flex-col gap-[15px] selected-imgs-container">
          {updateFileDisplay()}
        </div>
      </div>
    </InputWrapper>
  );
};
