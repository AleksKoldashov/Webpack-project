import React, { useMemo, useState } from "react";
import { LayoutDaysCard } from "../styles/Layouts";
import SteperDay from "./SteperDay";
import { newArrayDaysData } from "../utilits/utilits";
import Schedule from "./Schedule";
import {
  CardDay,
  CardTime,
  CellCardDay,
  HeaderCardDay,
} from "../styles/CardStyles";
import { useQuery } from "@tanstack/react-query";
import { fetchWeatherData } from "../api/getCityWeather";
type CardDays = {
  city: string;
};
export default function CardDays({ city }: CardDays) {
  const [step, setStep] = useState(0);
  const query = useQuery({
    queryKey: [city],
    queryFn: () => fetchWeatherData({ city }),
    enabled: true,
  });

  const list = query?.data?.list;
  const data = useMemo(() => {
    if (list) {
      return newArrayDaysData(list);
    }
    return [];
  }, [list]);
  if (query.isError) return <div>{query.error.message}</div>;
  if (query.isLoading) return <div>Loading...</div>;

  return (
    <LayoutDaysCard>
      <SteperDay data={data} setStep={setStep} />
      <CardDay>
        <HeaderCardDay>
          <CellCardDay>Время</CellCardDay>
          <CellCardDay>Температура</CellCardDay>
          <CellCardDay>Влажность</CellCardDay>
          <CellCardDay>Давление</CellCardDay>
          <CellCardDay>Скорость ветра</CellCardDay>
          <CellCardDay>Направление ветра</CellCardDay>
        </HeaderCardDay>
        {data[step]?.temperatures.map((time) => (
          <CardTime key={time.time}>
            <CellCardDay>{time.time}</CellCardDay>
            <CellCardDay>
              <img
                src={`http://openweathermap.org/img/wn/${time.img}@2x.png`}
                alt="img"
                width={50}
              />
              {time.temp} °C
            </CellCardDay>
            <CellCardDay> {time.humidity} %</CellCardDay>
            <CellCardDay> {time.pressure} мм р.с</CellCardDay>
            <CellCardDay> {time.windspeed} м/с</CellCardDay>
            <CellCardDay> {time.winddeg}</CellCardDay>
          </CardTime>
        ))}
        <Schedule data={data[step]?.temperatures} />
      </CardDay>
    </LayoutDaysCard>
  );
}
