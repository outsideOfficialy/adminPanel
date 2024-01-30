import { useSession, signOut } from "next-auth/react";
import FormLayout from "../FormLayout";
import Menu from "../Menu";
import PageTemplate from "../PageTemplate";
import ButtonTemplate from "../ButtonTemplate";

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
      {session.status === "loading" || session.status === "unauthenticated"  ? <div>
        Checking authorization...
      </div> :
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
          <div className="fixed right-[35px] top-[35px] flex items-center gap-[20px]">
            <img className="rounded-full w-[32px]" src={session.data?.user?.image ? session.data.user.image : ""} alt="Logo"/>
            <ButtonTemplate
              className="material-symbols-outlined shadow-none w-[32px] h-[32px]"
              onClick={() => signOut({ callbackUrl: "/" })}>
              move_item
            </ButtonTemplate>
          </div>

          <PageTemplate title={title}>
            <FormLayout pageSubmit={pageSubmit}>{children ? children : null}</FormLayout>
          </PageTemplate>
        </>
      }
    </>
  );
};

export default PageLayout;
