import { useSession, signOut } from "next-auth/react";
import FormLayout from "../FormLayout";
import Menu from "../Menu";
import PageTemplate from "../PageTemplate";
import ButtonTemplate from "../ButtonTemplate";
import Loader from "../Loader";

interface PageLayoutProps {
  children?: React.ReactNode[] | React.ReactNode;
  title: string;
  pageSubmit: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title, pageSubmit }) => {
  const session = useSession();

  if (session.status === "unauthenticated") {
    window.location.href = "/";
  }

  return (
    <>
      {session.status === "loading" || session.status === "unauthenticated" ? (
        <div className="w-[100dvw] h-[100dvh] flex justify-center items-center">
          <Loader open></Loader>
        </div>
      ) : (
        <>
          {/* here will be menu button calling */}
          <div className="absolute left-[10px] top-[15px] md:left-[40px] md:top-[40px]">
            <Menu
              list={[
                { textContent: "Music", link: "/add-music" },
                { textContent: "News", link: "/news" },
                { textContent: "Merch", link: "/add-merch" },
                { textContent: "Members", link: "/member-edit" },
                { textContent: "Slider", link: "/slider" }
              ]}
            />
          </div>
          <div className="absolute md:right-[35px] md:top-[47px] 2xl:top-[35px] right-[10px] top-[15px] gap-[5px] flex items-center md:gap-[20px]">
            <img
              className="rounded-full w-[32px]"
              src={session.data?.user?.image ? session.data.user.image : ""}
              alt="Logo"
            />
            <ButtonTemplate
              className="material-symbols-outlined shadow-none w-[32px] h-[32px]"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              move_item
            </ButtonTemplate>
          </div>

          <PageTemplate title={title}>
            <FormLayout pageSubmit={pageSubmit}>{children ? children : null}</FormLayout>
          </PageTemplate>
        </>
      )}
    </>
  );
};

export default PageLayout;
