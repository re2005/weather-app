import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-icon-weather',
    templateUrl: './icon-weather.component.html',
    styleUrls: ['./icon-weather.component.scss']
})
export class IconWeatherComponent implements OnInit {

    @Input() code: string;

    constructor() {
    }

    ngOnInit() {
    }

}
