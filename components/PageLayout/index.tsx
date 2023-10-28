import FormLayout from "../FormLayout";
import Menu from "../Menu";
interface PageLayoutProps {
  children?: React.ReactNode[] | React.ReactNode;
  title: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {
  return (
    <div className="w-screen min-h-screen bg-black flex justify-end text-white font-montserrat">
      {/* here will be menu button calling */}
      <div className="absolute left-[40px] top-[40px]">
        <Menu list={[{ textContent: "Add music", link: "/add-music" },
        { textContent: "News", link: "/news" },
        { textContent: "Add merch", link: "/add-merch" },
        { textContent: "Add or edit member info", link: "/member-edit" }]} />
      </div>

      {/* this option may change, i will edit method of centering during the adaptation */}
      <div className="w-[calc(100%-250px)] px-[15px] min-w-[360px] pt-[20px] flex flex-col gap-[50px] z-[1]">
        <div className="flex items-center mb-50px">
          <p className="font-delagothic text-[54px] mr-[25px]">OUTSIDE</p>
          <div className="material-symbols-outlined  shield-person">shield_person</div>
        </div>
        <h2 className="text-[48px] font-medium">{title}</h2>
        <FormLayout>{children ? children : null}</FormLayout>
      </div>
    </div>
  );
};

export default PageLayout;
