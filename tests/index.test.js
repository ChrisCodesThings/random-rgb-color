
const { default: testFunc } = await import("../");
const { default: isDark } = await import("@chriscodesthings/rgb-color-is-dark");

describe("check some colours", () => {
    test("50 random colours", async () => {
        for (let i = 0; i < 50; i++) {
            const col = testFunc();

            expect(col.length).toEqual(3);
            expect(col[0]).toBeGreaterThanOrEqual(0);
            expect(col[0]).toBeLessThanOrEqual(255);
            expect(col[1]).toBeGreaterThanOrEqual(0);
            expect(col[1]).toBeLessThanOrEqual(255);
            expect(col[2]).toBeGreaterThanOrEqual(0);
            expect(col[2]).toBeLessThanOrEqual(255);
        }
    });

    test("50 random dark colours", async () => {
        for (let i = 0; i < 50; i++) {
            const col = testFunc(true);
            const dark = isDark(col);

            expect(dark).toEqual(true);
        }
    });

    test("50 random light colours", async () => {
        for (let i = 0; i < 50; i++) {
            const col = testFunc(false);
            const light = !isDark(col);

            expect(light).toEqual(true);
        }
    });
});
