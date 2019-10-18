import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {takeUntil} from 'rxjs/operators';
import {CityWeather} from '../../models/city-weather.model';
import {CityForecast} from '../../models/city-forecast.model';
import {forkJoin, Subject} from 'rxjs';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-city',
    templateUrl: './city.component.html',
    styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit, OnDestroy {

    public readonly faArrowLeft = faArrowLeft;
    private ngUnsubscribe: Subject<void> = new Subject<void>();
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
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(([forecast, weather]) => {
                this.cityWeather = new CityWeather(weather.list[0]);
                this.cityForecast = forecast.list.map(r => new CityForecast(r));
            });
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
