import {Component, Input, OnInit} from '@angular/core';
import {CityWeather} from '../../models/city-weather.model';
import {faLocationArrow, faWind, faTemperatureLow} from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-city-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    public readonly faLocationArrow = faLocationArrow;
    public readonly faWind = faWind;
    public readonly faTemperatureLow = faTemperatureLow;

    @Input() card: CityWeather;

    constructor() {
    }

    ngOnInit(): void {
    }
}
