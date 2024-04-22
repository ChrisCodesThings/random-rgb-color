
const { default: testFunc } = await import("../");

describe("check for bad input", () => {
    test("nothing", async () => {
        expect(testFunc()).toEqual(true);
    });

    test("boolean", async () => {
        expect(testFunc(true)).toEqual(true);
    });

    test("a number", async () => {
        expect(testFunc(123)).toEqual(true);
    });

    test("a string", async () => {
        expect(testFunc("foo")).toEqual(true);
    });
});
