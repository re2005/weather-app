import {Component, Input, OnInit} from '@angular/core';
import {CityForecast} from '../../models/city-forecast.model';
import {faCaretRight, faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import {CityWeather} from '../../models/city-weather.model';

@Component({
    selector: 'app-forecast-list',
    templateUrl: './forecast-list.component.html',
    styleUrls: ['./forecast-list.component.scss']
})
export class ForecastListComponent implements OnInit {

    @Input() forecast: Array<CityForecast>;
    @Input() weather: CityWeather;

    public sliceStart = 0;
    public sliceEnd = 8;
    public readonly faCaretRight = faCaretRight;
    public readonly faCaretLeft = faCaretLeft;

    constructor() {
    }

    ngOnInit() {
    }

    next(): void {
        if (this.sliceEnd < this.forecast.length) {
            this.sliceStart = this.sliceStart + 8;
            this.sliceEnd = this.sliceEnd + 8;
        }
    }

    prev(): void {
        if (this.sliceStart > 0) {
            this.sliceStart = this.sliceStart - 8;
            this.sliceEnd = this.sliceEnd - 8;
        }
    }
}
