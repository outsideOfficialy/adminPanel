"use client";

import { useState } from "react";
import PageTemplate from "@/components/PageTemplate";
import ButtonTemplate from "@/components/ButtonTemplate";
import { InputTypeText } from "@/components/Inputs";
import { useSession, signOut, signIn } from "next-auth/react";
// import Link from "next/link";

export default function Home() {
  // const [showPassword, setShowPassword] = useState(false);
  const session = useSession();

  console.log(session);

  // const handleLoginClick = () => {
  //   setShowPassword(true);
  // };

  if (session.status === "authenticated") window.location.href += "/news";

  return (
    <PageTemplate title="Login" className="max-w-[443px] pt-[50px]">
      {/* <InputTypeText label="User-name*" placeholder="User-name..." name="user-name" required /> */}

      {/* {showPassword && (
        <InputTypeText label="Password*" placeholder="Password..." name="password" required />
      )} */}

      <ButtonTemplate
        primary
        // onClick={showPassword ? () => (window.location.href += "/news") : handleLoginClick}
        onClick={() => signIn()}
        className="max-w-none"
      >
        Sign in
      </ButtonTemplate>
      {/* <ButtonTemplate
        className="max-w-none"
        primary
        onClick={() => { signOut() }}
      >
        Sign out
      </ButtonTemplate> */}
    </PageTemplate>
  );
}
