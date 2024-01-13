"use client";

import React from "react";
import PageLayout from "@/components/PageLayout";
import { InputTypeText, SearchInput, FileInput } from "@/components/Inputs";
/// <reference lib="dom" />


const Slider = () => {
  const page = "slider";
  const [fileList, setFileList] = React.useState<{
    [key: string]: string
  }>({});

  const setFileListHandler = (el: { [key: string]: string }) => {
    setFileList((prevFileList) => {
      const keyOfEl = Object.keys(el)[0];
      return { ...prevFileList, [keyOfEl]: el[keyOfEl] };
    });
  }

  return (
    <PageLayout pageSubmit={page} title="Slider">
      <SearchInput setFileList={setFileListHandler} pageSearch={page} placeholder="ID slider..." label="Slider search" name="id" />

      <InputTypeText placeholder="Slider title...." label="Slider Title*" name="title" required />
      <InputTypeText placeholder="Slider link...." label="Slider Link*" name="link" required />

      <FileInput
        placeholder="Browse..."
        accept="image/webp, image/png, image/jpg, image/jpeg"
        name="preview_picture_mobile[]"
        label="Slider picture mobile*"
        id="slider-mobile-file-input"
        fileList={fileList}
        required
      />
      <FileInput
        placeholder="Browse..."
        accept="image/webp, image/png, image/jpg, image/jpeg"
        name="preview_picture_desktop[]"
        label="Slider picture desktop*"
        id="slider-desktop-file-input"
        fileList={fileList}
        required
      />
    </PageLayout>
  );
};

export default Slider;
