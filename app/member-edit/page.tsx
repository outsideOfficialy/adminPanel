"use client"

import { SearchInput, InputTypeText, SingleFileInput } from "@/components/Inputs";
import PageLayout from "@/components/PageLayout";
import Dropdown from "@/components/Dropdown";
import itunes from '../../src/icons/itunes.svg'
import spotify from '../../src/icons/spotify.svg'
import soundcloud from '../../src/icons/soundcloud.svg'
import youtubeMusic from '../../src/icons/youtubeMusic.svg'

export default function Home() {
  return (

    <PageLayout title="Members">
      {/* necessary hidden input */}
      <input type="hidden" name="page" value="member_page" />
      <SearchInput onSearch={() => {

      }} placeholder="Member ID..." label="Member search" name="id" />
      <InputTypeText placeholder="Member nickname" label="Member Nickname*" name="nickname" />
      <InputTypeText placeholder="Member birthday..." label="Member birthday*" name="birthdate" />
      <InputTypeText placeholder="Member role..." label="Member role*" name="role" />
      <InputTypeText placeholder="About member..." label="About member" name="about" />
      <Dropdown headerText="Links"
        label="Social media links"
        links={[
          {
            "platformIcon": spotify,
            "platformName": "Spotify"
          },
          {
            "platformIcon": itunes,
            "platformName": "Apple music"
          }
        ]} inputsName="social_media_links" />
      <SingleFileInput placeholder="Browse..." name="preview_picture" label="Select preview picture*" id="member-file-input"/>
      {/* <input type="file" name="preview_picture" /> */}
    </PageLayout>
  );
}
