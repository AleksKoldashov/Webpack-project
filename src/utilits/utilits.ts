import { InewArrayDaysData, WeatherData } from "../components/types/shared";

export const kelvinToCelsius = (kelvin: number): number => {
    return Math.floor(kelvin - 273.15);
};

export const getWindDirection = (degrees: number): string => {
    if (degrees >= 0 && degrees < 22.5) return 'Север (N)';
    if (degrees >= 22.5 && degrees < 67.5) return 'Северо-восток (NE)';
    if (degrees >= 67.5 && degrees < 112.5) return 'Восток (E)';
    if (degrees >= 112.5 && degrees < 157.5) return 'Юго-восток (SE)';
    if (degrees >= 157.5 && degrees < 202.5) return 'Юг (S)';
    if (degrees >= 202.5 && degrees < 247.5) return 'Юго-запад (SW)';
    if (degrees >= 247.5 && degrees < 292.5) return 'Запад (W)';
    if (degrees >= 292.5 && degrees < 337.5) return 'Северо-запад (NW)';
    return 'Север (N)';
};

export const hPaToMmHg = (hPa:number) => {
    return Math.floor(hPa * 0.750062);
};


export const newArrayDaysData = (list: WeatherData[]) => {  
    let id = 0;
    return list.reduce((accum: InewArrayDaysData[], days) => {
        const [year, month, day] = days.dt_txt.split(" ")[0].split("-");
        const date = new Date(`${year}-${month}-${day}`);
        const options: Intl.DateTimeFormatOptions = { weekday: "long" };
        const dayOfWeek = date.toLocaleDateString("ru-RU", options); 
        const dayNumber = date.getDate(); 
        const dayWithNumber = `${dayNumber}, ${dayOfWeek} `; 
        const [hours, minutes] = days.dt_txt.split(" ")[1].split(":");
        const keyTime = `${hours}-${minutes}`;
        const tempCelsius = kelvinToCelsius(days.main.temp);
        const tempCelsiusLike = kelvinToCelsius(days.main.feels_like);
        const winddeg = getWindDirection(days.wind.deg);
        const pressure = hPaToMmHg(days.main.pressure);
        const existingEntry = accum.find(
          (entry) => entry.day === dayWithNumber
        );
        if (existingEntry) {
          existingEntry.temperatures.push({
            time: keyTime,
            temp: tempCelsius,
            feelslike: tempCelsiusLike,
            img: days.weather[0].icon,
            windspeed: days.wind.speed,
            winddeg,
            humidity: days.main.humidity,
            pressure,
          }); 
        } else {
          accum.push({
            id,
            day: dayWithNumber,
            temperatures: [
              {
                time: keyTime,
                temp: tempCelsius,
                feelslike: tempCelsiusLike,
                img: days.weather[0].icon,
                windspeed: days.wind.speed,
                winddeg,
                humidity: days.main.humidity,
                pressure,
              },
            ],
          });
          id = id + 1;
        }
        if (accum.length > 5) {
          accum.pop(); 
        }
        return accum;
      }, []);
}