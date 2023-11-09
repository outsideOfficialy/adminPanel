import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import { ButtonTemplate } from "../ButtonTemplate";

interface SendFormBtnProps {
  setModalOpen: (e: boolean) => void;
}

const SendFormBtn: React.FC<SendFormBtnProps> = ({ setModalOpen }) => {
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
          className="bg-black border rounded-lg border-white text-white p-2.5 w-full text-base font-medium leading-normal tracking-wider transition duration-300 ease-in-out placeholder-grey focus:border-main-primary-color focus:ring-0 focus:outline-none"
        />
      )}
      <div className="flex w-full gap-[30px]">
        <ButtonTemplate
          onClick={(e) => {
            e.preventDefault();
            setModalOpen(true);
            onSendClick();
          }}
          type="submit"
          disabled={selectedDate ? true : false}
          primary
        >
          Send
        </ButtonTemplate>
        <ButtonTemplate
          onClick={onSendLaterClick}
          secondary
          disabled={selectedDate ? true : false}
          className={selectedDate ? "bg-main-primary-color border-main-primary-color hover:shadow-main-primary-color" : ""}
        >
          Send later
        </ButtonTemplate>
      </div>
    </div>
  );
};

export default SendFormBtn;
