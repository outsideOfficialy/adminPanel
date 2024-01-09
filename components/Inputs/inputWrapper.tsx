import { InputWrapperProps } from "./interfaces";
import clsx from "clsx";

export const InputWrapper: React.FC<InputWrapperProps> = ({ label, className, children }) => {
  const hasAsterisk = label && label.includes("*");

  return (
    <div
      className={clsx(
        "flex flex-col items-start gap-[15px] md:gap-[10px] w-full max-w-[450px] ",
        className ? className : ""
      )}
    >
      {label && (
        <label className="text-white text-[20px] md:text-2xl font-normal leading-6 tracking-wider">
          {hasAsterisk ? (
            <>
              {label.replace("*", "")}
              <span className="text-main-primary-color">*</span>
            </>
          ) : (
            label
          )}
        </label>
      )}
      {children}
    </div>
  );
};
