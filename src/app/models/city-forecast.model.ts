import {CityWeather} from './city-weather.model';

export interface ICityForecastResponse {
    time: string;
}

//  AN EXAMPLE OF INHERITANCE
//  Here I've added the time with is not present on CityWeather Class and remove couple of other fields not present on forecast

export class CityForecast extends CityWeather implements ICityForecastResponse {
    time: string;

    constructor(list: any) {
        super(list);
        this.time = list.dt_txt;
        delete this.id;
        delete this.name;
    }
}
