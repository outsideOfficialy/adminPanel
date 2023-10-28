"use client"

import PageLayout from "@/components/PageLayout";
import { InputTypeText, SearchInput } from "@/components/Inputs";
import Link from "next/link";

export default function Home() {
  return (
    <PageLayout title="Add music">
      <SearchInput onSearch={() => {}} placeholder="Search" label="Member Fullname" name="search" />
      <InputTypeText placeholder="Name" label="Member Nickname*" name="nickname" />
    </PageLayout>
  );
}
