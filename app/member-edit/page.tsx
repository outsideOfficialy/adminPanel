"use client";

import React from "react";
import { SearchInput, InputTypeText, FileInput, InputTypeData } from "@/components/Inputs";
import PageLayout from "@/components/PageLayout";
import Dropdown from "@/components/Dropdown";

import itunes from "../../src/icons/itunes.svg";
import spotify from "../../src/icons/spotify.svg";
import soundcloud from "../../src/icons/soundcloud.svg";
import youtubeMusic from "../../src/icons/youtubeMusic.svg";

export default function Home() {
  const page = "members";

  return (
    <PageLayout pageSubmit={page} title="Members">
      <SearchInput pageSearch={page} placeholder="Member ID..." label="Member search" name="id" />
      <InputTypeText
        placeholder="Member nickname"
        label="Member Nickname*"
        name="nickname"
        required
      />
      <InputTypeData
        placeholder="Member birthday..."
        label="Member birthday*"
        name="birthdate"
        required
      />
      <InputTypeText placeholder="Member role..." label="Member role*" name="role" required />
      <InputTypeText placeholder="About member..." label="About member*" name="about" required />

      <Dropdown
        headerText="Links"
        label="Social media links"
        links={[
          {
            platformIcon: spotify,
            platformName: "Spotify"
          },
          {
            platformIcon: itunes,
            platformName: "Apple music"
          }
        ]}
        inputsName="social_media_links"
      />
      <FileInput
        accept="image/webp, image/png, image/jpg, image/jpeg"
        placeholder="Browse..."
        name="preview_picture[]"
        label="Member photo picture*"
        id="member-file-input"
        required
      />
    </PageLayout>
  );
}
