import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import { ButtonPrimary } from "../ButtonTemplate";

interface SendFormBtnProps {
  setModalOpen: (e: boolean) => void;
}

const SendFormBtn:React.FC<SendFormBtnProps> = ({
  setModalOpen
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const onSendClick = () => {
    // Обработка события для кнопки "Send"
  };

  const onSendLaterClick = () => {
    setDatePickerVisible(true);
  };

  const isSendLaterDisabled = !selectedDate;

  return (
    <div className="flex flex-col max-w-[450px] gap-[45px]">
      {isDatePickerVisible && (
        <DatePicker
          name="send_later"
          selected={selectedDate}
          onChange={(date: Date | null) => setSelectedDate(date)}
          placeholderText="Выберите дату"
          className="bg-black border rounded-lg border-white text-white p-2.5 w-full text-base font-normal font-medium leading-normal tracking-wider transition duration-300 ease-in-out placeholder-grey focus:border-main-primary-color focus:ring-0 focus:outline-none"
        />
      )}
      <div className="flex w-full justify-between">
        <ButtonPrimary
          onClick={(e) => {
            e.preventDefault();
            setModalOpen(true);
            onSendClick();
          }}
          type="submit"
          className={` ${
            isSendLaterDisabled
              ? "bg-main-primary-color"
              : "bg-black cursor-not-allowed opacity-50 border-grey border-[1px]"
          }`}
        >
          Send
        </ButtonPrimary>
        <ButtonPrimary
          onClick={onSendLaterClick}
          className={`bg-black border-grey border-[1px] ${
            isSendLaterDisabled ? "" : "bg-main-primary-color border-main-primary-color"
          }`}
        >
          Send later
        </ButtonPrimary>
      </div>
    </div>
  );
}

export default SendFormBtn;