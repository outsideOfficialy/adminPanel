"use client"
import React from "react";
import PageLayout from "@/components/PageLayout";
import Dropdown from "@/components/Dropdown";

import itunes from '../../src/icons/itunes.svg'
import spotify from '../../src/icons/spotify.svg'
import soundcloud from '../../src/icons/soundcloud.svg'
import youtubeMusic from '../../src/icons/youtubeMusic.svg'

const News = () => {
  return (
    <PageLayout title="News">
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