import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DailyWeather from "../components/DailyWeather";
import GeneralItems from "../components/GeneralItems";

export default function WeatherContent() {
    const { name } = useParams();
    const [weather, setWeather] = useState("");
    const [isDay, setIsDay] = useState(true);
    
    const backgroundImage = isDay
    ? "https://cdn.dribbble.com/users/925716/screenshots/3333720/attachments/722376/after_noon.png?resize=400x300&vertical=center"
    : "https://ubuntuhandbook.org/wp-content/uploads/2021/07/M-Maggs-pixabay.jpg";
    
    useEffect(() => {
        const url = `http://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=${name}&days=5&aqi=yes&alerts=yes`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setWeather(data);
                const currentTime = Math.floor(new Date().getTime() / 1000);
                setIsDay(currentTime < new Date().setHours(19, 0, 0));
            });
    }, [name]);

    return (
        <div>
            <GeneralItems weather={weather} backgroundImage={backgroundImage} />
            <DailyWeather weather={weather} />
        </div>
    );
}
