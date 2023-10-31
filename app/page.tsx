"use client";

import React from "react";
import PageLayout from "@/components/PageLayout";
import { InputTypeText, SearchInput, TextArea } from "@/components/Inputs";
import { RadioButton } from "@/components/RadioButtonGroup";

export default function Home() {
  return (
    <PageLayout title="Add music">
      <div className="flex flex-col gap-[10px]">
        <RadioButton id="Single" label="Single" name="musicType" value="Single" />
        <RadioButton id="Album" label="Album" name="musicType" value="Album" />
      </div>
      <SearchInput onSearch={() => {}} placeholder="Search" label="Member Fullname" name="search" />
      <InputTypeText placeholder="Name" label="Member Nickname*" name="nickname" />
      <TextArea placeholder="About member..." label="About member*" name="aboutMember" />
    </PageLayout>
  );
}
