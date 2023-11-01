"use client"
import React from "react";
import PageLayout from "@/components/PageLayout";
import Dropdown from "@/components/Dropdown";

const News = () => {
  return (
    <PageLayout title="News">
      <Dropdown inputsName="music[]" headerText="Links" links={[
        {
          platformLink: "some-link-to-platform",
          platformName: "Spotify",
          platformIcon: "asd"
        },
        {
          platformLink: "some-link-to-platform",
          platformName: "Apple music",
          platformIcon: "asd"
        }]} />
    </PageLayout>
  )
}

export default News