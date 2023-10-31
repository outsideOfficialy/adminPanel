"use client"

import PageLayout from "@/components/PageLayout";
import { InputTypeText, SearchInput } from "@/components/Inputs";
import Dropdown from "@/components/Dropdown";

export default function Home() {
  return (
    <PageLayout title="Add music">
      <SearchInput onSearch={() => { }} placeholder="Search" label="Member Fullname" name="search" />
      <InputTypeText placeholder="Name" label="Member Nickname*" name="nickname" />
      <Dropdown inputsName="music[]" headerText="Links" links={[
        {
          platformLink: "some-link-to-platform",
          platformName: "Spotify"
        }]} />
    </PageLayout>
  );
}
