import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {IApiResponse} from './api-response.interfaces';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private readonly apiUrl: string = '//api.openweathermap.org/data/2.5/';
    private readonly apiId: string = '&appid=4217e0dc20b9dfb00bc4a701fbaa637c';
    private readonly units: string = '&units=metric';

    constructor(private http: HttpClient) {
    }

    public getCitiesWeatherById(ids: Array<number>): Observable<IApiResponse> {
        const queryIds = ids.join(',');
        return this.http.get<IApiResponse>(this.apiUrl + 'group?id=' + queryIds + this.apiId + this.units);
    }

    public getCityForecastById(id: number): Observable<IApiResponse> {
        return this.http.get<IApiResponse>(this.apiUrl + 'forecast?id=' + id + this.apiId + this.units);
    }

    public getCitiesByName(name: string): Observable<IApiResponse> {
        return this.http.get<IApiResponse>(this.apiUrl + 'find?q=' + name + this.apiId);
    }
}
