"use client";

import PageTemplate from "@/components/PageTemplate";
import ButtonTemplate from "@/components/ButtonTemplate";
import { useSession, signOut, signIn } from "next-auth/react";

export default function Home() {
  const session = useSession();

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
