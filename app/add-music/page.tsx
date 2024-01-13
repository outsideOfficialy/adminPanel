"use client";

import PageLayout from "@/components/PageLayout";
import { InputTypeText, SearchInput, FileInput, SongsInputs } from "@/components/Inputs";
import { RadioGroup } from "@/components/RadioButtonGroup";
import React from "react";
import Dropdown from "@/components/Dropdown";
import musicIcons from "../../utils/icons/musicIcons";
/// <reference lib="dom" />

export default function Home() {
  const page = "music";
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
    <PageLayout pageSubmit={page} title="Music">
      <SearchInput setFileList={setFileListHandler} pageSearch={page} placeholder="Search" label="Music id" name="id" />
      <RadioGroup
        title="Release type"
        group={[
          {
            name: "music_type",
            id: "Album",
            label: "Album",
            value: "album"
          },
          {
            name: "music_type",
            id: "Single",
            label: "Single",
            value: "single"
          }
        ]}
      />

      <div className="flex flex-col gap-[15px] md:gap-[10px]">
        <label className="text-white text-[20px] md:text-2xl font-normal leading-6 tracking-wider">
          Release name<span className="text-main-primary-color">*</span>
        </label>

        <div className="flex flex-col gap-[15px] md:block relative w-full max-w-[900px]">
          <InputTypeText placeholder="Name" name="release_name" required />
          <div className="w-full md:w-1/2 static md:absolute md:right-[-20px] md:top-0">
            <Dropdown
              headerText="Links"
              links={musicIcons}
              inputsName="social_media_links"
            />
          </div>
        </div>
      </div>
      <SongsInputs name="release_songs[]" label="Release song(s)*" />
      <FileInput
      fileList={fileList}
        placeholder="Browse..."
        name="preview_picture[]"
        label="Single\album preview*"
        id="preview_picture"
        accept="image/webp, image/png, image/jpg, image/jpeg"
        required
      />
    </PageLayout>
  );
}
