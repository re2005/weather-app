import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CardComponent} from './card.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CelsiusPipe} from '../../pipes/celsius.pipe';
import {CityWeather} from '../../models/city-weather.model';

describe('CardComponent', () => {
    let component: CardComponent;
    let fixture: ComponentFixture<CardComponent>;

    const cityWeather = new CityWeather({
        id: 1234,
        name: 'Amsterdam',
        country: 'NL',
        iconCode: '02d',
        description: 'cloudy',
        windSpeed: 12,
        windDirection: 120,
        temperature: 11,
    });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CardComponent, CelsiusPipe],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CardComponent);
        component = fixture.componentInstance;
        component.card = cityWeather;
        fixture.detectChanges();

    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
