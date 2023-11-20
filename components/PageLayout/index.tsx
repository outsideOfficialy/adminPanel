import FormLayout from "../FormLayout";
import Menu from "../Menu";
import PageTemplate from "../PageTemplate";

interface PageLayoutProps {
  children?: React.ReactNode[] | React.ReactNode;
  title: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title, onSubmit }) => {
  return (
    <>
      {/* here will be menu button calling */}
      <div className="absolute left-[10px] top-[15px]" >
        <Menu list={[{ textContent: "Add music", link: "/add-music" },
        { textContent: "News", link: "/news" },
        { textContent: "Add merch", link: "/add-merch" },
        { textContent: "Member info", link: "/member-edit" }]} />
      </div>

      <PageTemplate title={title}>
        <FormLayout onSubmit={onSubmit}>{children ? children : null}</FormLayout>
      </PageTemplate>
    </>
  );
};

export default PageLayout;
