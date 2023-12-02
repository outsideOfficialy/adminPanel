"use client";

import PageLayout from "@/components/PageLayout";
import { InputTypeText, SearchInput, FileInput, SongsInputs } from "@/components/Inputs";
import { RadioGroup } from "@/components/RadioButtonGroup";
import Dropdown from "@/components/Dropdown";

import itunes from "../../src/icons/itunes.svg";
import spotify from "../../src/icons/spotify.svg";
import soundcloud from "../../src/icons/soundcloud.svg";
import youtubeMusic from "../../src/icons/youtubeMusic.svg";

export default function Home() {
  const page = "music";

  return (
    <PageLayout pageSubmit={page} title="Music">
      <SearchInput pageSearch={page} placeholder="Search" label="Music id" name="id" />
      <RadioGroup
        title="Release type"
        group={[
          {
            name: "music_type",
            id: "Album",
            label: "Album",
            value: "album"
          },
          {
            name: "music_type",
            id: "Single",
            label: "Single",
            value: "single"
          }
        ]}
      />
      {/* этот вопрос нужно будет решить, потому что из-за того что dropown физически при открытии
        двигает контент, это выглядит очень ужасно */}
      <div className="flex flex-col gap-[15px] md:gap-[10px]">
        <label className="text-white text-[20px] md:text-2xl font-normal leading-6 tracking-wider">
          Release name*
        </label>

        <div className="flex flex-col gap-[15px] md:block relative w-full max-w-[900px]">
          <InputTypeText placeholder="Name" name="release_name" />
          <div className="w-full md:w-1/2 static md:absolute md:right-[-20px] md:top-0">
            <Dropdown
              headerText="Links"
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
          </div>
        </div>
      </div>
      <SongsInputs name="release_songs[]" label="Release song(s) *" />
      <FileInput
        placeholder="Browse..."
        name="preview_picture[]"
        label="Select single\album picture*"
        id="preview_picture"
        accept="image/webp, image/png, image/jpg, image/jpeg"
      />
    </PageLayout>
  );
}
