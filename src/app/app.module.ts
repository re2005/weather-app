import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {CityComponent} from './pages/city/city.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IconWeatherComponent} from './global/icon-weather/icon-weather.component';
import {CardComponent} from './global/card/card.component';
import {CelsiusPipe} from './pipes/celsius.pipe';
import {FlagComponent} from './global/flag/flag.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import {SearchComponent} from './global/search/search.component';
import {FormsModule} from '@angular/forms';
import { ForecastListComponent } from './global/forecast-list/forecast-list.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CityComponent,
        IconWeatherComponent,
        CardComponent,
        CelsiusPipe,
        FlagComponent,
        SearchComponent,
        ForecastListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FontAwesomeModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
