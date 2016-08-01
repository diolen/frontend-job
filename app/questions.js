/**
 * b deveria retornar 5.
 */
export const q1 = () => {
    (() => {
       const a = b = 5;
    })();

    return b;
};

/**
 * add function (repeatify, aka: String.repeat) no String, to repeat the text by x times.
 */
export const q2 = () => {};

/**
 * should transform a list of numeric string in numbers list.
 */
export const q3 = (stringNumbers) => {
    return stringNumbers.map(parseInt);
};
