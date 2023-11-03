"use client"

import PageLayout from "@/components/PageLayout";
import { InputTypeText, SearchInput } from "@/components/Inputs";
import { SongsInputs } from "@/components/Inputs";

export default function Home() {
  return (
    <PageLayout title="Add music">
      <SearchInput onSearch={() => { }} placeholder="Search" label="Music id" name="search" />
      <InputTypeText placeholder="Name" label="Realease name*" name="nickname" />
      <SongsInputs name="songs[]" label="Release song(s) *"/>
    </PageLayout>
  );
}
