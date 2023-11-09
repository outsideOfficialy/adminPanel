"use client"

import PageTemplate from "@/components/PageTemplate";
import { ButtonTemplate } from "@/components/ButtonTemplate";
import { InputTypeText } from "@/components/Inputs";
import Link from "next/link";

export default function Home() {
  return (
    <PageTemplate title="Login" className="max-w-[443px] pt-[130px]">
      <InputTypeText label="User-name*" placeholder="User-name..." name="user-name"/>
      <InputTypeText label="Password*" placeholder="Password..." name="password" />

      <Link href={"/news"}><ButtonTemplate primary className="max-w-none">Login</ButtonTemplate></Link>
    </PageTemplate>
  );
}
