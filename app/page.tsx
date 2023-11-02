"use client";

import PageTemplate from "@/components/PageTemplate";
import { ButtonPrimary } from "@/components/ButtonTemplate";
import { InputTypeText } from "@/components/Inputs";
import Link from "next/link";

export default function Home() {
  return (
    <PageTemplate title="Login" className="max-w-[443px] pt-[130px]">
      <InputTypeText label="User-name*" placeholder="User-name..." name="user-name"/>
      <InputTypeText label="Password*" placeholder="Password..." name="password" />

      <Link href={"/news"}><ButtonPrimary className="bg-main-primary-color max-w-none">Login</ButtonPrimary></Link>
    </PageTemplate>
  );
}
