"use client"
import React from "react";
import PageLayout from "@/components/PageLayout";

import { InputTypeText, SearchInput, FileInput, TextArea } from "@/components/Inputs";

const News = () => {
  return (
    <PageLayout title="News">
      <SearchInput onSearch={() => { }} placeholder="ID news...." label="ID News" name="id" />
      
      <InputTypeText placeholder="Title text..." label="Title*" name="title" />
      <InputTypeText placeholder="Subtitle text..." label="Subtitle" name="subtitle" />
      
      <TextArea label="News content" placeholder="News text..." name="content" />

      <FileInput placeholder="Browse..." accept="image/webp, image/png, image/jpg, image/jpeg" name="preview_picture" label="Select preview picture*" id="news-file-input" />
    </PageLayout>
  )
}

export default News