"use client";

import React from "react";
import { SearchInput, InputTypeText, FileInput, InputTypeData } from "@/components/Inputs";
import PageLayout from "@/components/PageLayout";
import Dropdown from "@/components/Dropdown";

import membersIcons from "../../utils/icons/membersIcons";

export default function Home() {
  const page = "members";
  const [fileList, setFileList] = React.useState<{
    [key: string]: string
  }>({});
  const [bDay, setBDay] = React.useState<string>();

  const setFileListHandler = (el: { [key: string]: string }) => {
    setFileList((prevFileList) => {
      const keyOfEl = Object.keys(el)[0];
      return { ...prevFileList, [keyOfEl]: el[keyOfEl] };
    });
  }

  return (
    <PageLayout pageSubmit={page} title="Members">
      <SearchInput setBDay={(val) => setBDay(val)} setFileList={setFileListHandler} pageSearch={page} placeholder="Member ID..." label="Member search" name="id" />
      <InputTypeText
        placeholder="Member nickname"
        label="Member Nickname*"
        name="nickname"
        required
      />
      <InputTypeData
        placeholder="Member birthday..."
        label="Member birthday*"
        name="birthdate"
        required
        value={bDay ? bDay : undefined}
      />
      <InputTypeText placeholder="Member role..." label="Member role*" name="role" required />
      <InputTypeText placeholder="About member..." label="About member*" name="about" required />

      <Dropdown
        headerText="Links"
        label="Social media links"
        links={membersIcons}
        inputsName="social_media_links"
      />
      <FileInput
        accept="image/webp, image/png, image/jpg, image/jpeg"
        placeholder="Browse..."
        name="preview_picture[]"
        label="Member photo picture*"
        id="member-file-input"
        fileList={fileList}
        required
      />
    </PageLayout>
  );
}
