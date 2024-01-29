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

  console.log(session);


  if (session.status === "unauthenticated") {

    window.location.href = "";
    return <div>Login first to continue!</div>;
  }

  return (
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
      <div className="fixed right-8 top-8">
        <img className="rounded-full" src={session.data?.user?.image ? session.data.user.image : ""} alt="Logo" />
        <ButtonTemplate
          secondary
          onClick={() => signOut({ callbackUrl: "/" })}>
          Signout
        </ButtonTemplate>
      </div>

      <PageTemplate title={title}>
        <FormLayout pageSubmit={pageSubmit}>{children ? children : null}</FormLayout>
      </PageTemplate>
    </>
  );
};

export default PageLayout;
