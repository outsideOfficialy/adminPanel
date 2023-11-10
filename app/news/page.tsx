"use client"
import React from "react";
import PageLayout from "@/components/PageLayout";
import Dropdown from "@/components/Dropdown";
import { SearchInput } from "@/components/Inputs";

import itunes from '../../src/icons/itunes.svg'
import spotify from '../../src/icons/spotify.svg'
import soundcloud from '../../src/icons/soundcloud.svg'
import youtubeMusic from '../../src/icons/youtubeMusic.svg'

const News = () => {
  return (
    <PageLayout title="News">
      <input type="hidden" name="page" value="member_page" />
      <SearchInput onSearch={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const val = (e.currentTarget.previousElementSibling as HTMLInputElement).value;
        const page = (document.querySelector("input[name='page']") as HTMLInputElement).value;

        fetch(`http://admin-panel-backend/index.php?id=${val}&page=${page}`, { method: "GET" }).then(d => d.json()).then(d => {
          console.log(d);
        });

      }} placeholder="ID news..." label="News id" name="search" />
      <Dropdown inputsName="music[]" headerText="Links" links={[
        {
          platformName: "Spotify",
          platformIcon: spotify
        },
        {
          platformName: "Itunes",
          platformIcon: itunes
        }]} />
    </PageLayout>
  )
}

export default News