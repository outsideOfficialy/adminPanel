import clsx from "clsx";

interface ButtonTemplateProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode | React.ReactNode[];
  onClick?: (e: React.FormEvent) => void;
  secondary?: boolean;
  secondaryActive?: boolean;
  primary?: boolean;
  border?: boolean;
  disabled?: boolean;
  className?: string;
}

//! -----------------------------------------

export const ButtonTemplate: React.FC<ButtonTemplateProps> = ({
  children,
  type = "button",
  onClick,
  primary,
  secondary,
  border,
  disabled,
  className
}) => {
  return (
    <button
      disabled={disabled}
      className={clsx(
        "relative transition duration-300 rounded-[5px] w-full text-center shadow-[0px_0px_10px_0px_rgba(239,147,53,0.25)] hover:shadow-main-primary-color",
        {
          "text-[20px] font-medium min-h-[60px] shadow-none border-[1px] border-white hover:border-main-primary-color max-w-[180px]": secondary,
          "shadow-none border-[1px] cursor-pointer border-white hover:border-main-primary-color max-w-[46px] min-h-[46px] hover:text-main-primary-color": border,
          "text-[20px] font-medium bg-main-primary-color disabled:bg-black disabled:cursor-not-allowed disabled:opacity-50 max-w-[180px] disabled:-grey disabled:border-[1px] min-h-[60px] disabled:shadow-none": primary
        },
        className
      )}
      type={type}
      onClick={onClick ? onClick : null}
    >
      {children}
    </button>
  );
};

// export const ButtonPrimary: React.FC<ButtonTemplateProps> = ({
//   children,
//   className,
//   onClick,
//   type,
// }) => {

//   return <ButtonTemplate secondary type={type} onClick={onClick} className={clsx("text-[20px] max-w-[180px] font-medium",
//     className ? className : "")}>
//     {children}
//   </ButtonTemplate>
// }

// export const ButtonSecondary: React.FC<ButtonTemplateProps> = ({
//   type, children, onClick, className
// }) => {
//   // это будет для кнопок Browse.., кнопки там где плюсик внутри в строке добавления песен
//   return <ButtonTemplate type={type} onClick={onClick}>
//     {children}
//   </ButtonTemplate>
// }