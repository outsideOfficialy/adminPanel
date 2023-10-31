import React from "react";
import { ButtonPrimary } from "../ButtonTemplate";
import ConfirmModal from "../ConfirmModal";

interface FormLayoutProps {
  children?: React.ReactNode[] | React.ReactNode;
}

const FormLayout: React.FC<FormLayoutProps> = ({ children }) => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const onSendLaterClick = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const onSendClick = (e: React.FormEvent) => {
    e.preventDefault();
    setModalOpen(true)
  }

  return (
    <form className="flex flex-col gap-[45px] max-w-[920px]">
      {children ? children : null}
      <div className="flex gap-[30px]">
        <ButtonPrimary onClick={onSendClick} type="submit" className="bg-main-primary-color">
          Send
        </ButtonPrimary>
        <ButtonPrimary onClick={onSendLaterClick} className="border-grey border-[1px]">
          Send later
        </ButtonPrimary>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {isModalOpen && <ConfirmModal onSetModal={(value) => setModalOpen(value)}/>}
      </div>
    </form>
  );
};

export default FormLayout;
