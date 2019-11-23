import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {first} from 'rxjs/operators';
import {CityWeather, ICityWeatherResponse} from '../../models/city-weather.model';
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public cities: Array<ICityWeatherResponse>;
    private ids: Array<number>;
    public readonly faExclamationTriangle = faExclamationTriangle;

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
        // Predefined cities ID's
        this.ids = [2267057, 2759794, 3128760, 2988507, 2643743];
        this.fetchApiData();
    }

    fetchApiData(): void {
        this.apiService.getCitiesWeatherById(this.ids)
            .pipe(first())
            .subscribe(d => {
                this.cities = d.list.map(r => new CityWeather(r));
            });
    }

    addCity(cityId: number): void {
        this.ids.push(cityId);
        this.fetchApiData();
    }

}
