import { TextAreaFieldProps } from "./interfaces";


export const TextArea: React.FC<TextAreaFieldProps> = ({ label, placeholder, name,
  value }) => {
  return (
    <div className="flex flex-col items-start gap-[10px] w-full">
      {label && (
        <label className="text-white text-[20px] md:text-2xl font-normal leading-6 tracking-wider">
          {label}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        name={name}
        className="bg-black min-h-[150px] border rounded-lg border-white text-white p-[8px] md:p-2.5 w-full text-[14px] md:text-base font-normal md:font-medium leading-normal tracking-wider transition duration-300 ease-in-out placeholder-grey focus:border-main-primary-color focus:ring-0 focus:outline-none"
      />
    </div>
  );
};