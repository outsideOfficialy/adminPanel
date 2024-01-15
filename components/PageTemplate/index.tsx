import clsx from "clsx";

interface PageTemplateProps {
  children?: React.ReactNode[] | React.ReactNode;
  title: string;
  className?: string;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ children, title, className }) => {
  return (
    <div
      className={clsx(
        "w-full max-w-[1360px] mx-auto px-[15px] min-w-[360px] pt-[6px] md:pt-[20px] flex flex-col gap-[30px] md:gap-[50px] z-[1] ",
        className
      )}
    >
      <div className="flex justify-center gap-[15px] md:justify-start md:gap-[25px] items-center mb-50px">
        <p className="font-delagothic text-[32px] md:text-[54px] pl-[0px] md:pl-[70px] 2xl:pl-[0px]">
          OUTSIDE
        </p>
        <div className="material-symbols-outlined shield-person">shield_person</div>
      </div>
      <h2 className="text-[26px] md:text-[48px] font-medium">{title}</h2>
      {children ? children : null}
    </div>
  );
};

export default PageTemplate;
