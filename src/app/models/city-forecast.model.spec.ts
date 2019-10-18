import {CityForecast} from './city-forecast.model';

const forecastMock = require('../mocks/forecast-response.json');

describe('City Forecast Class', () => {
    it('should create object containing time', () => {
        const forecastModel = new CityForecast(forecastMock);
        expect(forecastModel.time).toEqual('2019-10-18 21:00:00');
    });
});
