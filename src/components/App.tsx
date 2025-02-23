import React, { useState } from "react";
import Search from "./Search";
import CardDays from "./CardDays";
import { HeaderApp, LayoutApp } from "../styles/Layouts";

export default function App() {
  const [city, setCity] = useState("Астрахань");

  return (
    <LayoutApp>
      <HeaderApp>
        <h3>Прогноз погоды на 5 дней</h3>
        <h3>Вы выбрали город: {city}</h3>
      </HeaderApp>
      <Search setCity={setCity} />
      <CardDays city={city} />
    </LayoutApp>
  );
}
