"use client";

import PageTemplate from "@/components/PageTemplate";
import ButtonTemplate from "@/components/ButtonTemplate";
import { useSession, signOut, signIn } from "next-auth/react";

export default function Home() {
  const session = useSession();

  if (session.status === "authenticated") window.location.href += "/news";

  return (
    <PageTemplate title="Login" className="max-w-[443px] pt-[50px]">
      <ButtonTemplate
        primary
        onClick={() => signIn('google', { prompt: 'select_account' })}
        className="max-w-none"
      >
        Sign in with google
      </ButtonTemplate>
    </PageTemplate>
  );
}
