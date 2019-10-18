import {Component, Input, OnInit} from '@angular/core';
import {CityForecast} from '../../models/city-forecast.model';

@Component({
    selector: 'app-forecast-list',
    templateUrl: './forecast-list.component.html',
    styleUrls: ['./forecast-list.component.scss']
})
export class ForecastListComponent implements OnInit {

    @Input() forecast: Array<CityForecast>;

    constructor() {
    }

    ngOnInit() {
    }

}
