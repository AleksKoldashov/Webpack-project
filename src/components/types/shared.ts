export interface ITemperatures {
  feelslike: number;
  humidity: number;
  img: string;
  pressure: number;
  temp: number;
  time: string;
  winddeg: string;
  windspeed: number;
}
export interface InewArrayDaysData {
  id: number;
  day: string;
  temperatures: ITemperatures[];
}

interface Coordinates {
    lat: number;
    lon: number;
}

interface City {
    id: number;
    name: string;
    coord: Coordinates;
    country: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
}


export interface WeatherResponse {
    city: City;
    cnt: number;
    cod: string;
    list: WeatherData[];
    message: number;
}

interface WeatherMain {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_min: number;
    temp_max: number;
    temp_kf: number;
}

interface WeatherSys {
    pod: string;
}

interface WeatherDescription {
    id: number;
    main: string; 
    description: string; 
    icon: string; 
}

export interface WeatherData {
    clouds: {
        all: number; 
    };
    dt: number; 
    dt_txt: string; 
    main: WeatherMain; 
    pop: number; 
    sys: WeatherSys; 
    visibility: number;
    weather: WeatherDescription[]; 
    wind: {
        speed: number; 
        deg: number; 
        gust?: number; 
    };
    rain?: {
        '1h'?: number; 
        '3h'?: number; 
    };
}