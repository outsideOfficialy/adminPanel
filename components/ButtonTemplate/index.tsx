import clsx from "clsx";

interface ButtonTemplateProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode | React.ReactNode[];
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  secondary?: boolean;
  secondaryActive?: boolean;
  primary?: boolean;
  border?: boolean;
  smallSecondary?: boolean;
  smallPrimary?: boolean;
  disabled?: boolean;
  className?: string;
}

const ButtonTemplate: React.FC<ButtonTemplateProps> = ({
  children,
  type = "button",
  onClick,
  primary,
  secondary,
  border,
  disabled,
  smallSecondary,
  smallPrimary,
  className
}) => {
  return (
    <button
      disabled={disabled ? disabled : false}
      className={clsx(
        "relative transition duration-300 rounded-[5px] w-full text-center shadow-[0px_0px_10px_0px_rgba(239,147,53,0.25)] hover:shadow-main-primary-color",
        {
          "text-[16px] md:text-[20px] font-medium min-h-[40px] md:min-h-[60px] shadow-none border-[1px] border-white hover:border-main-primary-color max-w-[180px]": secondary,
          "shadow-none border-[1px] cursor-pointer border-white hover:border-main-primary-color max-w-[37px] md:max-w-[46px] min-h-[37px] md:min-h-[46px] hover:text-main-primary-color": border,
          "text-[16px] text-left md:text-[20px] font-medium bg-main-primary-color disabled:bg-black disabled:cursor-not-allowed disabled:opacity-50 max-w-[180px] disabled:-grey disabled:border-[1px] min-h-[40px] md:min-h-[60px] disabled:shadow-none": primary,
          "text-[14px] text-left font-medium bg-main-primary-color disabled:bg-black disabled:cursor-not-allowed disabled:opacity-50 max-w-[180px] disabled:-grey disabled:border-[1px] min-h-[37px] disabled:shadow-none": smallPrimary,
          "text-[14px] font-medium min-h-[37px] shadow-none border-[1px] border-white hover:border-main-primary-color max-w-[180px]": smallSecondary
        },
        className
      )}
      onClick={onClick ? onClick : undefined}
      type={type}
    >
      {children}
    </button>
  );
};

export default ButtonTemplate;