"use client"

import PageLayout from "@/components/PageLayout";
import { InputTypeText, SearchInput } from "@/components/Inputs";
import { SongsInputs } from "@/components/Inputs";
import { RadioButton } from "@/components/RadioButtonGroup";

export default function Home() {
  return (
    <PageLayout title="Add music">
      <SearchInput onSearch={() => { }} placeholder="Search" label="Music id" name="search" />
      {/* <RadioButton id="release-type" name="album" label="Release type*"/> */}
      <InputTypeText placeholder="Name" label="Realease name*" name="nickname" />
      <SongsInputs name="songs_list[]" label="Release song(s) *"/>
    </PageLayout>
  );
}
