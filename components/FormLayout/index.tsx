import React from "react";
import ConfirmModal from "../ConfirmModal";
import SendFormBtn from "../SendFormBtn";

interface FormLayoutProps {
  children?: React.ReactNode[] | React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FormLayout: React.FC<FormLayoutProps> = ({ children, onSubmit }) => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const handleModalOpen = (value: boolean) => {
    // togle body scroll
    value ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
    setModalOpen(value);
  }

  return (
    <form
      className="flex flex-col gap-[30px] md:gap-[45px] max-w-[920px]"
      action={"http://admin-panel-backend"}
      encType="multipart/form-data"
      method="POST"
      onSubmit={onSubmit}
    >
      {children ? children : null}
      <SendFormBtn setModalOpen={handleModalOpen} />

      <div>
        {/* shadow bg for confirmModal */}
        <div
          className={`${
            isModalOpen ? "block" : "hidden"
          } fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-[7]`}
          onClick={() => handleModalOpen(false)}
        ></div>

        <div className="fixed top-1/2 left-1/2 z-[10] transform -translate-x-1/2 -translate-y-1/2">
          <ConfirmModal isOpened={isModalOpen} onSetModal={handleModalOpen} />
        </div>
      </div>
    </form>
  );
};

export default FormLayout;
