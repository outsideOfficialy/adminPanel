export interface InputWrapperProps {
  label?: string;
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

export interface InputFieldProps {
  label?: string;
  placeholder: string;
  inputClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value?: string;
  required?: boolean;
}

export interface SearchInputProps {
  label?: string;
  placeholder: string;
  name: string;
  pageSearch: string;
  // onSearch: (e: React.MouseEvent<HTMLButtonElement>) => void; // Функция обработчика поиска
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
}
