"use client"

import React from "react";
import { SearchInput, InputTypeText, FileInput } from "@/components/Inputs";
import PageLayout from "@/components/PageLayout";
import Dropdown from "@/components/Dropdown";

import itunes from '../../src/icons/itunes.svg'
import spotify from '../../src/icons/spotify.svg'
import soundcloud from '../../src/icons/soundcloud.svg'
import youtubeMusic from '../../src/icons/youtubeMusic.svg'

export default function Home() {
  return (

    <PageLayout onSubmit={(e) => {
      e.preventDefault();
      const formElem = document.querySelector("form");
      if (!formElem) return;

      const formData = new FormData(formElem);

      fetch("http://admin-panel-backend/members", {
        method: "POST",
        body: formData
      })
        .then(d => d.text())
        .then(d => console.log(d))
        .catch((reason) => {
          console.log(reason);
        });
    }} title="Members">
      <SearchInput onSearch={(e) => {
<<<<<<< HEAD

        e.preventDefault();

        const val = (e.currentTarget.previousElementSibling as HTMLInputElement).value;

        fetch(`http://admin-panel-backend/members/${val}`, { method: "GET" }).then(d => d.json()).then(d => {
          console.log(d);
        });
=======
        e.preventDefault();
>>>>>>> main

        const val = (e.currentTarget.previousElementSibling as HTMLInputElement).value;

        fetch(`http://admin-panel-backend/members/${val}`, { method: "GET" }).then(d => d.json()).then(d => {
          console.log(d);
        });
      }} placeholder="Member ID..." label="Member search" name="id" />
      <InputTypeText placeholder="Member nickname" label="Member Nickname*" name="nickname" />
      <InputTypeText placeholder="Member birthday..." label="Member birthday*" name="birthdate" />
      <InputTypeText placeholder="Member role..." label="Member role*" name="role" />
      <InputTypeText placeholder="About member..." label="About member*" name="about" />

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
      <FileInput accept="image/webp, image/png, image/jpg, image/jpeg" placeholder="Browse..." name="preview_picture[]" label="Select preview picture*" id="member-file-input" />
    </PageLayout>
  );
}
