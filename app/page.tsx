"use client";

import PageLayout from "@/components/PageLayout";
import { InputTypeText, SearchInput, CustomInput, TextArea } from "@/components/Inputs";

export default function Home() {
  return (
    <PageLayout title="Add music">
      <CustomInput name="Music_type" label="Album" checked={true} />
      <CustomInput name="Music_type" label="Single" checked={false} />

      <SearchInput onSearch={() => {}} placeholder="Search" label="Member Fullname" name="search" />
      <InputTypeText placeholder="Name" label="Member Nickname*" name="nickname" />
      <TextArea placeholder="About member..." label="About member*" name="aboutMember" />
    </PageLayout>
  );
}
