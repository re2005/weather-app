import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {CityWeather, ICityWeatherResponse} from '../../models/city-weather.model';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

    @Output() sendCityToParent = new EventEmitter<number>();
    private ngUnsubscribe: Subject<void> = new Subject<void>();
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
            .pipe(takeUntil(this.ngUnsubscribe))
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

    ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
