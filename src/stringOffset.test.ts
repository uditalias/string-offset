import stringOffset from "../src"

describe("StringOffset", () => {

    describe("Functionality", () => {

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
    });
});