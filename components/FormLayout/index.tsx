import React, { useEffect } from "react";
import ConfirmModal from "../ConfirmModal";
import SendFormBtn from "../SendFormBtn";

interface FormLayoutProps {
  children?: React.ReactNode[] | React.ReactNode;
  pageSubmit: string;
}

const FormLayout: React.FC<FormLayoutProps> = ({ children, pageSubmit }) => {
  const [isModalOpen, setModalOpen] = React.useState(false);
  // undefined - отправляется, false - неуспешная отправка, true - успешная отправка
  const [successSending, setSuccessSending] = React.useState<undefined | boolean>(undefined);
  const [isSending, setIsSending] = React.useState(false);

  const handleModalOpen = (value: boolean) => {
    // togle body scroll
    value ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
    setModalOpen(value);
  }

  useEffect(() => {
    successSending ? handleModalOpen(false) : null;
  }, [successSending]);

  return (
    <form
      className="flex flex-col gap-[30px] md:gap-[45px] max-w-[920px]"
      encType="multipart/form-data"
      method="POST"
      onSubmit={(e) => {
        e.preventDefault();
        const formElem = document.querySelector("form");
        if (!formElem) return;

        const formData = new FormData(formElem);

        setSuccessSending(undefined);
        const id = (document.querySelector("input[name='id']") as HTMLInputElement).value.trim();
        fetch(`http://admin-panel-backend/${pageSubmit}${id === "" ? "" : `/${id}`}`, {
          method: "POST",
          body: formData
        })
          .then((d) => {
            if (!d.ok) {
              return d.text().then(errorData => {
                throw new Error(errorData || 'Произошла ошибка запроса');
              });
            }
            return d.text();
          })
          .then((d) => {
            setSuccessSending(true);
            setModalOpen(false);
            console.log(d);
          })
          .catch((reason) => {
            setSuccessSending(false);
            console.log(reason);
          });
      }}
    >
      {children ? children : null}
      <SendFormBtn setModalOpen={handleModalOpen} />

      <div>
        {/* shadow bg for confirmModal */}
        <div
          className={`${isModalOpen ? "block" : "hidden"
            } fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-[7]`}
          onClick={() => {
            setIsSending(false);
            handleModalOpen(false)
          }}
        ></div>

        <div className="fixed top-1/2 left-1/2 z-[10] transform -translate-x-1/2 -translate-y-1/2">
          <ConfirmModal isSending={isSending} setIsSending={setIsSending} successSending={successSending} isOpened={isModalOpen} onSetModal={handleModalOpen} />
        </div>
      </div>
    </form>
  );
};

export default FormLayout;
