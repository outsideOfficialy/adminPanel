import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { InputTypeText, SearchInput, TextArea } from "@/components/Inputs";
import { RadioBtn } from "@/components/MusicTypeSelect"; // Import RadioBtn using named import

export default function Home() {
  const [type, setType] = useState("Album");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const isChecked = (value) => type === value;

  return (
    <PageLayout title="Add music">
      <div className="flex flex-col gap-[15px]">
        <RadioBtn
          id="Single"
          name="musicType"
          value="Single"
          label="Single"
          onChange={handleChange}
          checked={isChecked("Single")}
        />
        <RadioBtn
          id="Album"
          name="musicType"
          value="Album"
          label="Album"
          onChange={handleChange}
          checked={isChecked("Album")}
        />
      </div>
      <SearchInput onSearch={() => {}} placeholder="Search" label="Member Fullname" name="search" />
      <InputTypeText placeholder="Name" label="Member Nickname*" name="nickname" />
      <TextArea placeholder="About member..." label="About member*" name="aboutMember" />
    </PageLayout>
  );
}
