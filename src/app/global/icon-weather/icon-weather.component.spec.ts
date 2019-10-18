import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IconWeatherComponent} from './icon-weather.component';

describe('IconWeatherComponent', () => {
    let component: IconWeatherComponent;
    let fixture: ComponentFixture<IconWeatherComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IconWeatherComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IconWeatherComponent);
        component = fixture.componentInstance;
        component.code = '10n';
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
