import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {first} from 'rxjs/operators';
import {CityWeather} from '../../models/city-weather.model';
import {CityForecast} from '../../models/city-forecast.model';
import {forkJoin} from 'rxjs';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-city',
    templateUrl: './city.component.html',
    styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

    public readonly faArrowLeft = faArrowLeft;
    private id: number;
    public cityWeather: CityWeather;
    public cityForecast: Array<CityForecast>;

    constructor(private route: ActivatedRoute,
                private apiService: ApiService) {
        this.route.params
            .subscribe(params => this.id = params.id);
    }

    ngOnInit() {

        const weatherRequest = this.apiService.getCitiesWeatherById([this.id]);
        const forecastRequest = this.apiService.getCityForecastById(this.id);

        forkJoin(forecastRequest, weatherRequest)
            .pipe(first())
            .subscribe(([forecast, weather]) => {
                this.cityWeather = new CityWeather(weather.list[0]);
                this.cityForecast = forecast.list.map(r => new CityForecast(r));
            });
    }
}
