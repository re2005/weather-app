import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {first} from 'rxjs/operators';
import {CityWeather, ICityWeatherResponse} from '../../models/city-weather.model';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    @Output() sendCityToParent = new EventEmitter<number>();
    public cities: Array<ICityWeatherResponse>;
    public searchInput: string;
    public hasError = false;

    private handleError(err) {
        console.log(err.message);
        this.hasError = true;
        setTimeout(() => {
            this.hasError = false;
        }, 5000);
    }

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
    }

    search(): void {
        if (!this.searchInput) {
            return;
        }
        this.apiService.getCitiesByName(this.searchInput)
            .pipe(first())
            .subscribe(d => {
                    this.cities = d.list.map(r => new CityWeather(r));
                },
                err => this.handleError(err));
    }

    addCity(id: number): void {
        this.sendCityToParent.emit(id);
        this.cities = this.cities.filter(c => c.id !== id);
    }

    onKeydown(event): void {
        if (event.key === 'Enter') {
            this.search();
        }
    }
}
