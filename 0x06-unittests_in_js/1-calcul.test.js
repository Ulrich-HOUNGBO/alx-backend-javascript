const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber type == SUM', () => {
    it('checks the output', () => {
        assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
        assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
        assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
        assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
        assert.strictEqual(calculateNumber('SUM', 3.7, 1), 5);
        assert.strictEqual(calculateNumber('SUM', 3.7, 1.2), 5);
    });
});

describe('calculateNumber type == SUBTRACT', () => {
    it('checks the output', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
        assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
        assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
        assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
        assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1), 3);
        assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.2), 3);
    });
});

describe('calculateNumber type == DIVIDE', () => {
    it('checks the output', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1, 3), 0.3333333333333333);
        assert.strictEqual(calculateNumber('DIVIDE', 1, 3.7), 0.25);
        assert.strictEqual(calculateNumber('DIVIDE', 1.2, 3.7), 0.25);
        assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
        assert.strictEqual(calculateNumber('DIVIDE', 3.7, 1), 4);
        assert.strictEqual(calculateNumber('DIVIDE', 3.7, 1.2), 4);
    });
});
