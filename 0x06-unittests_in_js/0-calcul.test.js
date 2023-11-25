import assert from "assert";
import {calculateNumber} from "./0-calcul.js";


describe('calculateNumber', () => {
    it('checks the output', () => {
       assert.strictEqual(calculateNumber(1, 3), 4);
       assert.strictEqual(calculateNumber(1, 3.7), 5);
       assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it('negative numbers', () => {
         assert.strictEqual(calculateNumber(-1, -3), -4);
         assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
    });

    it('checks arguments', () => {
        assert.strictEqual(isNaN(calculateNumber()), true);
        assert.strictEqual(isNaN(calculateNumber(NaN)), true);
    });
});
