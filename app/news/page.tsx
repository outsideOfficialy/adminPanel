"use client";

import React from "react";
import PageLayout from "@/components/PageLayout";
import Dropdown from "@/components/Dropdown";

import { InputTypeText, SearchInput, FileInput, TextArea } from "@/components/Inputs";

import itunes from "../../src/icons/itunes.svg";
import spotify from "../../src/icons/spotify.svg";
import soundcloud from "../../src/icons/soundcloud.svg";
import youtubeMusic from "../../src/icons/youtubeMusic.svg";

const News = () => {
  const page = "news";

  return (
    <PageLayout pageSubmit={page} title="News">
      <SearchInput pageSearch={page} placeholder="ID news..." label="News id" name="search" />

      <InputTypeText placeholder="Title text..." label="Title*" name="title" />
      <InputTypeText placeholder="Subtitle text..." label="Subtitle" name="subtitle" />

      <TextArea label="News content" placeholder="News text..." name="content" />

      <FileInput
        placeholder="Browse..."
        accept="image/webp, image/png, image/jpg, image/jpeg"
        name="preview_picture[]"
        label="News preview picture*"
        id="news-file-input"
      />
    </PageLayout>
  );
};

export default News;
