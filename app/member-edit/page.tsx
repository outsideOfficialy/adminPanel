"use client"

import { SearchInput, InputTypeText } from "@/components/Inputs";
import PageLayout from "@/components/PageLayout";
import Dropdown from "@/components/Dropdown";
import itunes from '../../src/icons/itunes.svg'
import spotify from '../../src/icons/spotify.svg'
import soundcloud from '../../src/icons/soundcloud.svg'
import youtubeMusic from '../../src/icons/youtubeMusic.svg'

export default function Home() {
  return (
    <PageLayout title="Members">
      <SearchInput onSearch={() => {

      }} placeholder="Member Full name..." label="Member search" name="full-name"/>
      <InputTypeText placeholder="Member nickname" label="Member Nickname*" name="nickname"/>
      <InputTypeText placeholder="Member birthday..." label="Member birthday*" name="birthdate"/>
      <InputTypeText placeholder="Member role..." label="Member role*" name="role"/>
      <InputTypeText placeholder="About member..." label="About member" name="about"/>
      <Dropdown headerText="Links" links={[
        {
          "platformIcon": spotify,
          "platformName": "Spotify"
        },
        {
          "platformIcon": itunes,
          "platformName": "Apple music"
        }
      ]} inputsName="social-media-links"  />
      <input type="hidden" name="page" value="member-page"/>
      <input type="file" name="preview-picture" />
    </PageLayout>
  );
}
