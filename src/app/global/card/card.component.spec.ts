import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CardComponent} from './card.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CelsiusPipe} from '../../pipes/celsius.pipe';
import {CityWeather} from '../../models/city-weather.model';

const cityMock = require('../../mocks/weather-response.json');


describe('CardComponent', () => {
    let component: CardComponent;
    let fixture: ComponentFixture<CardComponent>;

    const cityWeather = new CityWeather(cityMock);

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

    it('should create title with correct name', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.title').textContent).toContain('Amsterdam');
    });
});
