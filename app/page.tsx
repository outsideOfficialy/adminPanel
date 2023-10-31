"use client";

import PageLayout from "@/components/PageLayout";
import { InputTypeText, SearchInput, TextArea } from "@/components/Inputs";
import RadioGroup from "@/components/MusicTypeSelect";

export default function Home() {
  return (
    <PageLayout title="Add music">
      <RadioGroup />
      <SearchInput onSearch={() => {}} placeholder="Search" label="Member Fullname" name="search" />
      <InputTypeText placeholder="Name" label="Member Nickname*" name="nickname" />
      <TextArea placeholder="About member..." label="About member*" name="aboutMember" />
    </PageLayout>
  );
}
