"use client"

import React from "react";
import PageLayout from "@/components/PageLayout";

import { InputTypeText, SearchInput, FileInput, TextArea } from "@/components/Inputs";

export default function Home() {
  return (
    <PageLayout title="Merch">

      <SearchInput onSearch={() => { }} placeholder="ID merch...." label="ID Merch" name="id" />

      <FileInput placeholder="Browse..." accept="image/webp, image/png, image/jpg, image/jpeg" name="preview_picture" label="Select preview picture's*" id="merch-file-input" multiple />

      <InputTypeText placeholder="Merch title..." label="Merch title*" name="title" />
      <InputTypeText placeholder="Merch price $" label="Merch price*" name="price" />

      <InputTypeText placeholder="Merch description" label="Merch description*" name="description" />

      <TextArea label="Merch content" placeholder="Merch content..." name="content" />


    </PageLayout>
  );
}
