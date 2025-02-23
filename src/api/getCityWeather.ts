import axios from 'axios';

interface ErrorGet extends Error {
    response?: {
        data?: any;
        status?: number;
        statusText?: string;
    };
}
interface IFetchWeatherData {
    city: string;
}


export const fetchWeatherData = async ({city}: IFetchWeatherData) => {
    const apiKey = process.env.API_KEY;
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`);
        return response.data; 
    } catch (error) {
        const axiosError = error as ErrorGet; 
        throw new Error('Error fetching weather data: ' + (axiosError.response?.data || axiosError.message));
    }
};