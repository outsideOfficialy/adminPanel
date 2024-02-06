export interface InputWrapperProps {
  label?: string;
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

export interface InputFieldProps {
  label?: string;
  placeholder: string;
  inputClassName?: string;
  // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // seems to no need of this
  name: string;
  value?: string;
  required?: boolean;
}

export interface SearchInputProps {
  label?: string;
  placeholder: string;
  name: string;
  pageSearch: string;
  setFileList?: (el: {[key: string]: string}) => void;
  setSongsList?: (str: string[]) => void;
  setBDay?: (str: string) => void;
}

export interface TextAreaFieldProps {
  label: string;
  placeholder: string;
  name: string;
  value?: string;
  required?: boolean;
}

export interface FileInputProps {
  placeholder: string;
  name: `${string}[]`;
  label?: string;
  id: string;
  multiple?: boolean;
  accept: string;
  required?: boolean;
  fileList?: {
    [key: string]: string;
  }; 
  // filesSrc?: string[];
}
