import clsx from "clsx";

interface ButtonTemplateProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode | React.ReactNode[];
  onClick?: (e: React.FormEvent) => void;
  className?: string;
}

//! -----------------------------------------

const ButtonTemplate: React.FC<ButtonTemplateProps> = ({
  children,
  type = "button",
  onClick,
  className
}) => {
  return <button className={clsx(
    "transition duration-300 rounded-[5px] w-full min-h-[60px]",
    "text-center shadow-[0px_0px_10px_0px_rgba(239,147,53,0.25)] hover:shadow-[rgba(239,147,53)]",
    className
  )} type={type} onClick={onClick ? onClick : undefined}>
    {children}
  </button>
};

export const ButtonPrimary: React.FC<ButtonTemplateProps> = ({
  children,
  className,
  onClick,
  type
}) => {
  return <ButtonTemplate type={type} onClick={onClick} className={clsx("text-[20px] max-w-[180px] font-medium",
  className ? className : "")}>
    {children}
  </ButtonTemplate>
}

export const ButtonSecondary: React.FC<ButtonTemplateProps> = ({

}) => {
  // это будет для кнопок Browse.., кнопки там где плюсик внутри в строке добавления песен
  return <></>
}






