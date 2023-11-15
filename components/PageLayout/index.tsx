import FormLayout from "../FormLayout";
import Menu from "../Menu";
import PageTemplate from "../PageTemplate";

interface PageLayoutProps {
  children?: React.ReactNode[] | React.ReactNode;
  title: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {
  return (
    <>
      {/* here will be menu button calling */}
      <div className="absolute left-[40px] top-[40px]" >
        <Menu list={[{ textContent: "Add music", link: "/add-music" },
        { textContent: "News", link: "/news" },
        { textContent: "Add merch", link: "/add-merch" },
        { textContent: "Member info", link: "/member-edit" }]} />
      </div>

      <PageTemplate title={title}>
        <FormLayout>{children ? children : null}</FormLayout>
      </PageTemplate>
    </>
  );
};

export default PageLayout;
