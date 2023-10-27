import FormLayout from "../FormLayout";
interface PageLayoutProps {
  children?: React.ReactNode[] | React.ReactNode;
  title: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {
  return (
    <div className="w-screen min-h-screen bg-black flex justify-end text-white font-montserrat">
      {/* here will be menu button calling */}
      {/* <button className="menu material-symbols-outlined absolute left-[40px] top-[40px]">
        menu
      </button> */}

      {/* this option may change, i will edit method of centering during the adaptation */}
      <div className="w-[calc(100%-250px)] px-[15px] min-w-[360px] pt-[20px] flex flex-col gap-[50px]">
        <div className="flex items-center mb-50px">
          <p className="font-delagothic text-[54px] mr-[25px]">OUTSIDE</p>
          <div className="material-symbols-outlined  shield-person">shield_person</div>
        </div>
        <h2 className="text-[48px] font-medium">{title}</h2>
        <FormLayout>
          {children ? children : null}
        </FormLayout>
      </div>
    </div>
  );
};

export default PageLayout;
