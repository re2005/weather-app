import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'celsius'
})
export class CelsiusPipe implements PipeTransform {

    transform(value: any, ...args: any[]): any {
        if (value && !isNaN(value)) {
            return value.toFixed(1) + ' °C';
        }
    }
}
