"use client";

import React from "react";
import PageLayout from "@/components/PageLayout";

import { InputTypeText, SearchInput, FileInput, TextArea } from "@/components/Inputs";

const Slider = () => {
  const page = "slider";

  return (
    <PageLayout pageSubmit={page} title="Slider">
      <SearchInput pageSearch={page} placeholder="ID slider..." label="Slider search" name="id" />

      <InputTypeText placeholder="Slider title...." label="Slider Title" name="title" />
      <InputTypeText placeholder="Slider link...." label="Slider Link*" name="subtitle" required />

      <FileInput
        placeholder="Browse..."
        accept="image/webp, image/png, image/jpg, image/jpeg"
        name="preview_picture[]"
        label="Slider picture mobile*"
        id="slider-mobile-file-input"
        required
      />
      <FileInput
        placeholder="Browse..."
        accept="image/webp, image/png, image/jpg, image/jpeg"
        name="preview_picture[]"
        label="Slider picture desktop*"
        id="slider-desktop-file-input"
        required
      />
    </PageLayout>
  );
};

export default Slider;
