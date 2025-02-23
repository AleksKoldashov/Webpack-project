import React, { useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";
import { UIOption, UISelect } from "../UI/UISelect";
import styled from "styled-components";
import { LayoutSchedule, TooltipWrapper } from "../styles/ScheduleStyles";
import { ITemperatures } from "./types/shared";

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const { temp, humidity } = payload[0].payload;
    return (
      <TooltipWrapper>
        <p>{`Температура: ${temp}`}</p>
        <p>{`Влажность: ${humidity}`}</p>
      </TooltipWrapper>
    );
  }

  return null;
};
type ScheduleProps = {
  data: ITemperatures[];
};
export default function Schedule({ data }: ScheduleProps) {
  const [value, setValue] = useState("temp");
  const handelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };
  return (
    <LayoutSchedule>
      <UISelect defaultValue="temp" margintop="10px" onChange={handelChange}>
        <UIOption value="temp">Тепература</UIOption>
        <UIOption value="humidity">Влажность</UIOption>
        <UIOption value="pressure">Давление</UIOption>
      </UISelect>
      <AreaChart
        width={600}
        height={200}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey={value} />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip content={<CustomTooltip data={data} />} />
        <Area
          type="monotone"
          dataKey={value}
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </LayoutSchedule>
  );
}
