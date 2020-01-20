import stringOffset from "../src"

describe("StringOffset", () => {

    describe("Functionality", () => {

        it("Should split the string and return the ending", () => {
            const offsets = [
                { offset: 1, length: 2 },
            ];
            const split = stringOffset("option1", offsets);

            expect(split).toMatchObject([
                "o", "pt", "ion1"
            ]);
        });

        it("Should split the string - last char is also indexed", () => {
            const offsets = [
                { offset: 1, length: 2 },
                { offset: 6, length: 1 },
            ];
            const split = stringOffset("option1", offsets);

            expect(split).toMatchObject([
                "o", "pt", "ion", "1"
            ]);
        });

        it("should split the string by the given offsets", () => {

            const offsets = [
                { offset: 0, length: 5 },
                { offset: 2, length: 5 },
                { offset: 1, length: 3 },
            ];

            const split = stringOffset("option1", offsets);

            expect(split).toMatchObject([
                "o", "p", "ti", "o", "n1"
            ]);

        });

        it("should split the string when only one offset is present", () => {

            const offsets = [
                { offset: 6, length: 5 },
            ];

            const split = stringOffset("Hello World", offsets);

            expect(split).toMatchObject([
                "Hello ", "World"
            ]);

        });

        it("should return empty list when no offsets", () => {

            const split = stringOffset("Hello World", []);

            expect(split).toMatchObject([]);
        });

        it("should return only one part when offset size is bigger then string size", () => {

            const offsets = [
                { offset: 0, length: 100 },
            ];

            const split = stringOffset("Hello World", offsets);

            expect(split.length).toBe(1);

            expect(split[0]).toBe("Hello World");
        });
    });
});