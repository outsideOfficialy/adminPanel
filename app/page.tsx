"use client";

import PageTemplate from "@/components/PageTemplate";
import ButtonTemplate from "@/components/ButtonTemplate";
import { useSession, signOut, signIn } from "next-auth/react";
import React from "react";
import Loader from "@/components/Loader";

export default function Home() {
  const [showLoader, setShowLoader] = React.useState(false);
  const session = useSession();

  React.useEffect(() => {
    if (session.status === "authenticated") {
      window.location.href += "/news";
      window.location.href.replaceAll("//", "/");
    }
  }, [session.status]);

  return (
    <PageTemplate title="Login" className="max-w-[443px] pt-[50px]">
      <div className="flex items-center gap-[15px]">
        <ButtonTemplate
          primary
          onClick={() => {
            setShowLoader(true);
            signIn('google', { prompt: 'select_account' });
          }}
          className="max-w-none"
        >
          Sign in with google
        </ButtonTemplate>
        {showLoader ? <Loader open={true} /> : null}
      </div>
    </PageTemplate>
  );
}
