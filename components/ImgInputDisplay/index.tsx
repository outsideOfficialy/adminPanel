import React from "react";

interface ImgInputDisplayProps {
  src: string | Blob;
  imgName: string;
}

const ImgInputDisplay: React.FC<ImgInputDisplayProps> = ({ src, imgName }) => {
  return <div className="flex gap-[15px] items-center relative">
    <img
      className="max-w-[100px] max-h-[150px]"
      src={typeof src !== "string" ? URL.createObjectURL(src) : src}
      alt={imgName}
    />
    <span>{imgName}</span>
    {/* <div className="absolute left-[calc(100%+15px)] min-w-[50px]"></div> */}
  </div>
};

export default ImgInputDisplay;