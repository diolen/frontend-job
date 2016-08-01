/**
 * b deveria retornar 5.
 */
export const q1 = () => {
    const b = 5;
    
    (() => {
       const a = 5;
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
    return stringNumbers.map(i => parseInt(i,10));
};
