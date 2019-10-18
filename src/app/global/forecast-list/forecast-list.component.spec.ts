import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ForecastListComponent} from './forecast-list.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CelsiusPipe} from '../../pipes/celsius.pipe';
import {CityForecast} from '../../models/city-forecast.model';

const forecastMock = require('../../mocks/forecast-response.json');


describe('ForecastListComponent', () => {
    let component: ForecastListComponent;
    let fixture: ComponentFixture<ForecastListComponent>;

    const forecast = new CityForecast(forecastMock);

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ForecastListComponent, CelsiusPipe],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ForecastListComponent);
        component = fixture.componentInstance;
        component.forecast = [forecast, forecast, forecast];
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it('should create a list', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelectorAll('.column').length).toEqual(3);
    });
});
