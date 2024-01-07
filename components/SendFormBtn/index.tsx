import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import ButtonTemplate from "../ButtonTemplate";

interface SendFormBtnProps {
  setModalOpen: (e: boolean) => void;
}

const SendFormBtn: React.FC<SendFormBtnProps> = ({ setModalOpen }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Получаем значение из поля ввода
    const enteredValue = event.target.value || "";
    // Оставляем только числа, удаляя все остальные символы
    const numericValue = enteredValue.replace(/\D/g, "");
    // Устанавливаем отфильтрованное значение обратно в поле ввода
    event.target.value = numericValue;
  };

  const onSendClick = () => {
    // Обработка события для кнопки "Send"
  };

  const handleSendLaterClick = () => {
    // Если форма не заполнена, отображаем DatePicker
    if (!selectedDate) {
      setDatePickerVisible(true);
    } else {
      // Если форма заполнена, открываем модальное окно и выполняем дополнительные действия
      setModalOpen(true);
      onSendClick(); // Вызываем нужные дополнительные действия (если есть)
    }
  };

  return (
    <div className="flex flex-col max-w-[450px] gap-[45px]">
      {isDatePickerVisible && (
        <div className="flex flex-col items-start gap-[15px] md:gap-[10px] w-full max-w-[450px]">
          <label className="text-white text-[20px] md:text-2xl font-normal leading-6 tracking-wider">
            Dispatch time
          </label>
          <DatePicker
            name="send_later"
            selected={selectedDate}
            onChange={(date: Date | null) => setSelectedDate(date)}
            placeholderText="Выберите дату"
            onChangeRaw={handleInputChange}
            className="bg-black border rounded-lg border-white text-white p-2.5 w-full text-[14px] md:text-base font-normal md:font-medium leading-normal tracking-wider transition duration-300 ease-in-out placeholder-grey focus:border-main-primary-color focus:ring-0 focus:outline-none"
          />
        </div>
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
          onClick={handleSendLaterClick}
          secondary
          className={
            selectedDate
              ? "bg-main-primary-color border-main-primary-color hover:shadow-main-primary-color cursor-pointer"
              : "cursor-pointer"
          }
        >
          Send later
        </ButtonTemplate>
      </div>
    </div>
  );
};

export default SendFormBtn;
