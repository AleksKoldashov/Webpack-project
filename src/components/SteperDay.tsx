import React, { useState } from "react";
import { Day, LayoutDays } from "../styles/CardStyles";
import { InewArrayDaysData } from "./types/shared";

interface SteperDayProps {
  data: InewArrayDaysData[];
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
export default function SteperDay({ data, setStep }: SteperDayProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setStep(id);
    setSelectedIndex(id);
  };
  return (
    <LayoutDays>
      {data.map((day) => (
        <Day
          key={day.id}
          onClick={(e) => handleClick(day.id)}
          isselected={selectedIndex === day.id}
        >
          {day.day}
        </Day>
      ))}
    </LayoutDays>
  );
}
