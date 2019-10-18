import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ForecastListComponent} from './forecast-list.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CelsiusPipe} from '../../pipes/celsius.pipe';

describe('ForecastListComponent', () => {
    let component: ForecastListComponent;
    let fixture: ComponentFixture<ForecastListComponent>;

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
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
