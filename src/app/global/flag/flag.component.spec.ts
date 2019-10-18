import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FlagComponent} from './flag.component';

describe('FlagComponent', () => {
    let component: FlagComponent;
    let fixture: ComponentFixture<FlagComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FlagComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FlagComponent);
        component = fixture.componentInstance;
        component.countryCode = 'NL';
        fixture.detectChanges();
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should expect country code lowercase', () => {
        expect(component.code).toBe('nl');
    });
});
