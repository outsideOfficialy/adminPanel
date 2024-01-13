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
  const [isError, setIsError] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredValue = event.target.value || "";
    const numericValue = enteredValue.replace(/\D/g, "");
    event.target.value = numericValue;
  };

  const handleSendLaterClick = () => {
    // Поиск всех input-ов с атрибутом required
    const requiredInputs = document.querySelectorAll("input[required]");

    // Проверка заполненности всех input-ов с атрибутом required
    const isFormValid = Array.from(requiredInputs).every((input) => {
      if (input instanceof HTMLInputElement) {
        return input.value.trim() !== "";
      }
      return false;
    });

    // Если хотя бы одно поле не заполнено, устанавливаем ошибку
    if (!isFormValid) {
      setIsError(true);
    } else {
      // Если все обязательные поля заполнены, сбрасываем ошибку и выполняем код
      setIsError(false);

      // Дополнительная проверка на наличие выбранной даты
      if (!selectedDate) {
        setDatePickerVisible(true);
      } else {
        // Если форма заполнена, открываем модальное окно и выполняем дополнительные действия
        setModalOpen(true);
      }
    }
  };

  const handleSendClick = () => {
    // Поиск всех input-ов с атрибутом required
    const requiredInputs = document.querySelectorAll("input[required]");

    // Проверка заполненности всех input-ов с атрибутом required
    const isFormValid = Array.from(requiredInputs).every((input) => {
      if (input instanceof HTMLInputElement) {
        return input.value.trim() !== "";
      }
      return false;
    });

    // Если хотя бы одно поле не заполнено, устанавливаем ошибку
    if (!isFormValid) {
      setIsError(true);
    } else {
      // Если форма заполнена, сбрасываем ошибку, открываем модальное окно и выполняем дополнительные действия
      setIsError(false);
      setModalOpen(true);
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
            dateFormat="dd/MM/yyyy"
            selected={selectedDate}
            onChange={(date: Date | null) => setSelectedDate(date)}
            placeholderText="Select data"
            onChangeRaw={handleInputChange}
            className="bg-black border rounded-lg border-white text-white p-2.5 w-full text-[14px] md:text-base font-normal md:font-medium leading-normal tracking-wider transition duration-300 ease-in-out placeholder-grey focus:border-main-primary-color focus:ring-0 focus:outline-none"
          />
        </div>
      )}

      {isError && (
        <p className="text-red-500">Please fill in all required fields before sending.</p>
      )}

      <div className="flex w-full gap-[30px]">
        <ButtonTemplate
          onClick={(e) => {
            e.preventDefault();
            handleSendClick();
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
