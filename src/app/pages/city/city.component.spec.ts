import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CityComponent} from './city.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {ApiService} from '../../services/api.service';

const weatherListMock = require('../../mocks/list-weather-response.json');
const forecastListMock = require('../../mocks/list-forecast-response.json');

describe('CityComponent', () => {
    let component: CityComponent;
    let fixture: ComponentFixture<CityComponent>;

    const mockApiService = {
        getCitiesWeatherById: () => of(weatherListMock),
        getCityForecastById: () => of(forecastListMock)
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CityComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                {
                    provide: ApiService,
                    useValue: mockApiService
                },
                {
                    provide: ActivatedRoute,
                    useValue: {
                        params: of({id: 1234})
                    }
                }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CityComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show city card', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelectorAll('app-city-card').length).toEqual(1);

    });

    it('should show forecast list', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelectorAll('app-forecast-list').length).toEqual(1);
    });

});
