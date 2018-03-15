import { expect } from 'chai';
import Tuple from './index';

describe('Tuple', () => {

    it('can create a tuple', () => {
        const tuple = Tuple.of(1, 2);
        expect(Tuple.first(tuple)).to.equal(1);
        expect(Tuple.second(tuple)).to.equal(2);
    });

    it('mapping does not mutate the tuple', () => {
        const tuple = Tuple.of(1, 2);
        const updated1 = Tuple.mapFirst(() => "Foo", tuple);
        const updated2 = Tuple.mapSecond(() => "Foo", tuple);
        const updated3 = Tuple.bimap(() => "Foo", () => "Bar", tuple);
        expect(tuple).to.not.equal(updated1);
        expect(tuple).to.not.equal(updated2);
        expect(tuple).to.not.equal(updated3);
        expect(tuple).to.deep.equal(Tuple.of(1, 2));
    });
});
