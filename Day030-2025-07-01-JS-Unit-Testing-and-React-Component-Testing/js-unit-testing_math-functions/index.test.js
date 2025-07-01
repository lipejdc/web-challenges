import {add, subtract, multiply, divide} from "./index.js";


describe("Sum tests", () => {
    test("Returns 5 if called with add(2, 3)", () => {
        expect(add(2, 3)).toBe(5);
    })
    test("Returns a negative value if the greater argument is negative", () => {
        expect(add(2, -5)).toBeLessThan(0);
    })
    test("Returns a value close to 0.3 if called with add(0.1, 0.2)", () => {
        expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    })
})

describe("Subtraction tests", () => {
    test("Returns 10 if called with subtract(15, 5)", () => {
        expect(subtract(15, 5)).toBe(10);
    })
    test("Returns a negative value if the second argument is greater than the first one", () => {
        expect(subtract(3, 8)).toBeLessThan(0);
    })
})

describe("Multiply tests", () => {
    test("Returns 8 if called with multiply(2, 4)", () => {
        expect(multiply(2, 4)).toBe(8);
    })
    test("Returns a negative value if only the first argument is negative", () => {
        expect(multiply(-8, 1)).toBeLessThan(0);
    })
    test("Returns a negative value if only the second argument is negative", () => {
        expect(multiply(3, -5)).toBeLessThan(0);
    })
    test("Returns a positive value if called with two negative arguments", () => {
        expect(multiply(-1, -1)).toBeGreaterThan(0);
    })
})

describe("Division tests", () => {
    test("Returns 3 if called with divide (9, 3)", () => {
        expect(divide(9, 3)).toBe(3);
    })
    test("Returns 'You should not do this!' if called with 0 as a second argument", () => {
        expect(divide(5, 0)).toBe("You should not do this!");
    })
})