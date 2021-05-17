const {
    largestValue,
    getEven,
    houseForSale,
    sortNumbers,
    countCharsInString
} = require("./section-b.js");

describe('--- Smoke test ---', () => {
    test('Check that tests are working', () => {
        expect(1).toBeTruthy();
    });
});

describe('--- largestValue() tests ---', () => {
    test('Valid requests', () => {
        expect(largestValue([100, 30, 57, 223, 69])).toBe(223); // all pos int
        expect(largestValue([20, 35, 62, -71])).toBe(62); // mixed pos/neg int
        expect(largestValue([-75, -125, -62, -31])).toBe(-31); // all negative int
        expect(largestValue([20.5, 35, 62, 71.3])).toBe(71.3); // mixed pos int / decimal
        expect(largestValue([-20, 35, 62.5, -71.3])).toBe(62.5); // mixed pos/neg int / decimal
        expect(largestValue([20.1, 35.3, 62.1, 71.9])).toBe(71.9); // all pos decimal 
        expect(largestValue([])).toBe(); // blank array should return empty
        expect(largestValue([100, 90, 80, 70])).toBe(100);
        expect(largestValue([70, 80, 90, 100])).toBe(100);
        expect(largestValue([33])).toBe(33);
        expect(largestValue([33, 33, 33])).toBe(33);
        expect(largestValue([33, 33.0, 33.00])).toBe(33);
        // expect(largestValue(['100', 30, 12, '9', 4])).toBe(100); // This should work. Logic error!
    });

    test('Invalid requests', () => {
        expect(() => {
            largestValue();
        }).toThrow(); // expect an error to be thrown when no parameters provided.
        expect(() => {
            largestValue(true); // bool
        }).toThrow();
        expect(() => {
            largestValue({}); // object
        }).toThrow();
        expect(largestValue([null, 3, 61, false, 12, undefined])).toBe(61); // array with NaN data types
        expect(() => {
            largestValue(null);
        }).toThrow();
        expect(() => {
            largestValue(undefined);
        }).toThrow();
    });
});

describe('--- getEven() tests ---', () => {
    test('Valid requests', () => {
        expect(getEven([])).toEqual([]);
        expect(getEven([1, 2, 3, 4])).toEqual([2, 4]); // ordered mix
        expect(getEven([8, 12, 16])).toEqual([8, 12, 16]); // ordered even only
        expect(getEven([1, 3, 5, 7])).toEqual([]); // ordered odd only
        expect(getEven([91, 12, 7, 65])).toEqual([12]); // unordered mix
        expect(getEven([86, 24, 32])).toEqual([86, 24, 32]);
        expect(getEven([13, 9, 75, 31])).toEqual([]);
    });

    test('Invalid requests', () => {
        expect(() => {
            getEven();
        }).toThrow(); // expect an error to be thrown when no parameters provided.
        expect(() => {
            getEven(true); // bool
        }).toThrow();
        expect(() => {
            getEven(false); // bool
        }).toThrow();
        expect(() => {
            getEven({}); // object
        }).toThrow();
        expect(() => {
            getEven(null);
        }).toThrow();
        expect(() => {
            getEven(undefined);
        }).toThrow();
    });
});

describe('--- houseForSale() tests ---', () => {
    test('Valid requests', () => {
        expect(houseForSale()).toHaveProperty('bath', true);
        expect(houseForSale()).toHaveProperty('bedrooms', 4);
        expect(houseForSale()).toHaveProperty('kitchen.amenities', ['oven', 'stove', 'washer']);
        expect(houseForSale()).toHaveProperty('kitchen.area', 20);
        expect(houseForSale()).toHaveProperty(['kitchen', 'nice.oven']);
    });

    test('Invalid requests', () => {
        expect(houseForSale()).not.toHaveProperty('swimming pool');
        expect(houseForSale()).not.toHaveProperty('bedrooms', 6);
        expect(houseForSale()).not.toHaveProperty('kitchen.amenities', ['kettle', 'fridge']);
        expect(houseForSale()).not.toHaveProperty('kitchen.area', 40);
        expect(houseForSale()).not.toHaveProperty(['kitchen', 'bathroom']);
    });

    test('Output type', () => {
        expect(typeof houseForSale()).toBe('object');
    });
});

describe('--- sortNumbers() tests ---', () => {
    test('Valid requests', () => {
        expect(sortNumbers([])).toEqual([]);
        expect(sortNumbers([6, 12, 1, 3, 4])).toEqual([1, 3, 4, 6, 12]);
        expect(sortNumbers([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
        expect(sortNumbers([3.54, 3.33, 3.55])).toEqual([3.33, 3.54, 3.55]);
        expect(sortNumbers([3.54, 3.33, 3.55])).toHaveLength(3);
        expect(sortNumbers([12, 10, 8, 6])).toEqual([6, 8, 10, 12]);
    });

    test('Invalid requests', () => {
        expect(() => {
            sortNumbers();
        }).toThrow(); // expect an error to be thrown when no parameters provided.
        expect(() => {
            sortNumbers(true); // bool
        }).toThrow();
        expect(() => {
            sortNumbers(false); // bool
        }).toThrow();
        expect(() => {
            sortNumbers({}); // object
        }).toThrow();
        expect(() => {
            sortNumbers(undefined);
        }).toThrow();
        expect(sortNumbers(['z', 'y', 'w', 'x'])).not.toEqual(['w', 'x', 'y', 'z']);
    });
});
