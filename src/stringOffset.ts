export type OffsetOptions = {
    offset: number;
    length: number;
};

export default function stringOffset(
    str: string,
    offsets: OffsetOptions[]
): string[] {

    const results = []
        , indexes = [];

    offsets.forEach((options) => {
        indexes.push(
            options.offset,
            options.offset + options.length
        );
    });

    indexes.sort((i1, i2) => i1 - i2);

    if (indexes.indexOf(0) < 0) indexes.unshift(0);

    for (let i = 0, len = indexes.length; i < len - 1; i++) {
        results.push(
            str.substring(
                indexes[i],
                indexes[i + 1]
            )
        );
    }

    return results;
}