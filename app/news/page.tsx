"use client";

import React from "react";
import PageLayout from "@/components/PageLayout";
import { InputTypeText, SearchInput, FileInput, TextArea } from "@/components/Inputs";
/// <reference lib="dom" />

const News = () => {
  const page = "news";
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
    <PageLayout pageSubmit={page} title="News">
      <SearchInput setFileList={setFileListHandler} pageSearch={page} placeholder="ID news..." label="News id" name="id" />

      <InputTypeText placeholder="Title text..." label="Title*" name="title" required />
      <InputTypeText placeholder="Subtitle text..." label="Subtitle" name="subtitle" />

      <TextArea label="News content" placeholder="News text..." name="content" />

      <FileInput
        placeholder="Browse..."
        accept="image/webp, image/png, image/jpg, image/jpeg"
        name="preview_picture[]"
        label="News preview picture*"
        id="news-file-input"
        fileList={fileList}
        required
      />
    </PageLayout>
  );
};

export default News;
