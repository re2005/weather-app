import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import {CityComponent} from './city.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpClient} from '@angular/common/http';

describe('CityComponent', () => {
    let component: CityComponent;
    let fixture: ComponentFixture<CityComponent>;

    const mockRoute: any = {snapshot: {}};

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [CityComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                {
                    provide: HttpClient
                },
                {
                    provide: ActivatedRoute,
                    useValue: {
                        params: mockRoute
                    }
                }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CityComponent);
        component = fixture.componentInstance;

        mockRoute.parent.params.next({id: 1234});
        mockRoute.params.next({paramName: 'id'});

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
