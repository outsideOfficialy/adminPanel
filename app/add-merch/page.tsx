"use client";

import React from "react";
import PageLayout from "@/components/PageLayout";

import { InputTypeText, SearchInput, FileInput, TextArea, InputTypeNum } from "@/components/Inputs";

export default function Home() {
  const page = "merch";
  // const [inpuptsData, setInputsData] = React.useState<MerchProps | null>(null);

  return (
    <PageLayout pageSubmit={page} title="Merch">
      <SearchInput pageSearch={page} placeholder="ID merch...." label="ID Merch" name="id" />

      <FileInput
        placeholder="Browse..."
        accept="image/webp, image/png, image/jpg, image/jpeg"
        name="preview_picture[]"
        label="Merch preview picture(s)*"
        id="merch-file-input"
        multiple
        required
      />

      <InputTypeText
        value=""
        placeholder="Merch title..."
        label="Merch title*"
        name="title"
        required
      />
      <InputTypeNum placeholder="Merch price $" label="Merch price*" name="price" required />

      <InputTypeText
        placeholder="Merch description"
        label="Merch description*"
        name="description"
        required
      />

      <TextArea label="Merch content" placeholder="Merch content..." name="content" />
    </PageLayout>
  );
}
