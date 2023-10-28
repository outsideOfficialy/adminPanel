import { ButtonPrimary } from "../ButtonTemplate";

interface FormLayoutProps {
  children?: React.ReactNode[] | React.ReactNode;
}

const FormLayout: React.FC<FormLayoutProps> = ({ children }) => {
  const onSendLaterClick = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col gap-[45px] max-w-[920px]">
      {children ? children : null}
      <div className="flex gap-[30px]">
        <ButtonPrimary type="submit" className="bg-main-primary-color">
          Send
        </ButtonPrimary>
        <ButtonPrimary onClick={onSendLaterClick} className="border-grey border-[1px]">
          Send later
        </ButtonPrimary>
      </div>
    </form>
  );
};

export default FormLayout;
