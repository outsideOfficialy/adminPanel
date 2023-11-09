import React from "react";
import { ButtonPrimary } from "../ButtonTemplate";
import ConfirmModal from "../ConfirmModal";
import SendFormBtn from "../SendFormBtn";

interface FormLayoutProps {
  children?: React.ReactNode[] | React.ReactNode;
}

const FormLayout: React.FC<FormLayoutProps> = ({ children }) => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  return (
    <form
      className="flex flex-col gap-[45px] max-w-[920px]"
      action={"http://admin-panel-backend"}
      encType="multipart/form-data"
      method="POST"
    >
      {children ? children : null}
      {/* <div className="flex gap-[30px]">
        <ButtonPrimary onClick={onSendClick} type="submit" className="bg-main-primary-color">
          Send
        </ButtonPrimary>
        <ButtonPrimary onClick={onSendLaterClick} className="border-grey border-[1px]">
          Send later
        </ButtonPrimary>
      </div> */}

      <SendFormBtn setModalOpen={setModalOpen} />

      <div>
        {/* shadow bg for confirmModal */}
        <div
          className={`${
            isModalOpen ? "block" : "hidden"
          } fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-[7]`}
          onClick={() => setModalOpen(false)}
        ></div>

        <div className="fixed top-1/2 left-1/2 z-[10] transform -translate-x-1/2 -translate-y-1/2">
          <ConfirmModal isOpened={isModalOpen} onSetModal={(value) => setModalOpen(value)} />
        </div>
      </div>
    </form>
  );
};

export default FormLayout;
