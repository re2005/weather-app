export interface ICityWeatherResponse {
    id: number;
    name: string;
    country: string;
    iconCode: string;
    description: string;
    temperature: number;
    windSpeed: number;
    windDirection: number;
}

export class CityWeather implements ICityWeatherResponse {
    id: number;
    name: string;
    country: string;
    iconCode: string;
    description: string;
    windSpeed: number;
    windDirection: number;
    temperature: number;

    constructor(city: any) {
        this.id = city.id;
        this.name = city.name;
        this.country = city.sys.country;
        this.iconCode = city.weather[0].icon;
        this.description = city.weather[0].description;
        this.temperature = city.main.temp;
        this.windSpeed = city.wind.speed;
        this.windDirection = city.wind.deg;
    }
}
