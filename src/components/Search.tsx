import React, { useState } from "react";
import { UIInput } from "../UI/UIInput";
import UIList from "../UI/UIList";
import { UIInputError } from "../UI/UIShared";
import { useQuery } from "@tanstack/react-query";

type SearchProps = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
};

export default function Search({ setCity }: SearchProps) {
  const [state, setState] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const handelPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setCity(state);
      setState("");
      setIsOpen(false);
    }
  };
  const handelValueTown = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isCyrillic = /^[а-яёА-ЯЁ\s]*$/;
    if (!isCyrillic.test(value)) {
      setError("Введите только буквы кириллицы");
    } else {
      setError("");
      setState(value);
    }
  };
  const handelOpenList = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <UIInput
        value={state}
        placeholder="Введите город...."
        onKeyUp={handelPress}
        onChange={handelValueTown}
        onClick={handelOpenList}
        maxLength={20}
      />
      {error && <UIInputError top="95px">{error}</UIInputError>}
      {!state && isOpen && <UIList setCity={setCity} setIsOpen={setIsOpen} />}
    </div>
  );
}
