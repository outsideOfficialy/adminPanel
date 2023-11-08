import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import { ButtonPrimary } from "../ButtonTemplate";

function SendFormBtn() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const onSendClick = () => {
    // Обработка события для кнопки "Send"
  };

  const onSendLaterClick = () => {
    // Обработка события для кнопки "Send later"
  };

  return (
    <div className="flex flex-col max-w-[450px] gap-[45px]">
      <DatePicker
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        placeholderText="Выберите дату"
        className="bg-black border rounded-lg border-white text-white p-2.5 w-full text-base font-normal font-medium leading-normal tracking-wider transition duration-300 ease-in-out placeholder-grey focus:border-main-primary-color focus:ring-0 focus:outline-none"
      />
      <div className="flex w-full justify-between">
        <ButtonPrimary onClick={onSendClick} type="submit" className="bg-main-primary-color">
          Send
        </ButtonPrimary>
        <ButtonPrimary onClick={onSendLaterClick} className="bg-black border-grey border-[1px]">
          Send later
        </ButtonPrimary>
      </div>
    </div>
  );
}

export default SendFormBtn;
