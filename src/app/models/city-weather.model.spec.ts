import {CityWeather} from './city-weather.model';

const cityMock = require('../mocks/weather-response.json');

describe('City Weather Class', () => {
    it('should create object containing country code', () => {
        const weatherModel = new CityWeather(cityMock);
        expect(weatherModel.country).toEqual('NL');
    });
});
