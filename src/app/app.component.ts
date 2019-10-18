import {Component} from '@angular/core';
import {routingAnimations} from './app-routing-animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [routingAnimations]
})
export class AppComponent {
    title = 'weather-app';
}
