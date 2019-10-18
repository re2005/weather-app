import {CelsiusPipe} from './celsius.pipe';

describe('CelsiusPipe', () => {
    it('create an instance', () => {
        const pipe = new CelsiusPipe();
        expect(pipe).toBeTruthy();
    });

    it('should return one decimal plus °C', () => {
        const pipe = new CelsiusPipe();
        expect(pipe.transform(22.222)).toEqual('22.2 °C');
    });
});
