import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-flag',
    templateUrl: './flag.component.html',
    styleUrls: ['./flag.component.scss']
})
export class FlagComponent implements OnInit {

    @Input() countryCode: string;
    public code: string;

    constructor() {
    }

    ngOnInit(): void {
        this.code = this.countryCode.toLowerCase();
    }

}
