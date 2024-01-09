"use client";

import { useState } from "react";
import PageTemplate from "@/components/PageTemplate";
import ButtonTemplate from "@/components/ButtonTemplate";
import { InputTypeText } from "@/components/Inputs";
// import Link from "next/link";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginClick = () => {
    setShowPassword(true);
  };

  return (
    <PageTemplate title="Login" className="max-w-[443px] pt-[50px]">
      <InputTypeText label="User-name*" placeholder="User-name..." name="user-name" required />

      {showPassword && (
        <InputTypeText label="Password*" placeholder="Password..." name="password" required />
      )}

      <ButtonTemplate
        primary
        onClick={showPassword ? () => (window.location.href += "/news") : handleLoginClick}
        className="max-w-none"
      >
        Login
      </ButtonTemplate>
    </PageTemplate>
  );
}
