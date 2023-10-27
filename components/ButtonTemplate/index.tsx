import clsx from "clsx";

interface ButtonTemplateProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode | React.ReactNode[];
  onClick?: (e: React.FormEvent) => void;
  className: string;
}

//! -----------------------------------------

const ButtonTemplate: React.FC<ButtonTemplateProps> = ({
  children,
  type = "button",
  onClick,
  className
}) => {
  return <button className={className} type={type} onClick={onClick ? onClick : undefined}>
    {children}
  </button>
};

export const ButtonPrimary: React.FC<ButtonTemplateProps> = ({
  children,
  className,
  onClick
}) => {
  return <ButtonTemplate onClick={onClick} className={clsx(
    "w-full max-w-[180px] rounded-[5px] text-[20px] font-medium min-h-[60px] text-center transition duration-300",
    "shadow-[0px_0px_10px_0px_rgba(239,147,53,0.25)] hover:shadow-[rgba(239,147,53)]",
    className ? className : ""
  )}>
    {children}
  </ButtonTemplate>
}

export const ButtonSecondary: React.FC<ButtonTemplateProps> = ({

}) => {
  // это будет для кнопок Browse.., кнопки там где плюсик внутри в строке добавления песен
  return <></>
}






