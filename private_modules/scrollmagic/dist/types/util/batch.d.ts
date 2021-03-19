/**
 * -> first function expects parameters of any type
 * -> Each function expets return type of previous function
 * -> the result of the last function is returned as the batch result
 * https://stackoverflow.com/questions/53173203/typescript-recursive-function-composition
 */
declare function batch<Z, A extends unknown, R1, R2, R3, R4, R5, R6>(this: Z, ...callbacks: [
    (this: Z, value: A) => R1,
    (this: Z, value: R1) => R2,
    (this: Z, value: R2) => R3,
    (this: Z, value: R3) => R4,
    (this: Z, value: R4) => R5,
    (this: Z, value: R5) => R6
]): (this: Z, value: A) => R6;
declare function batch<Z, A extends unknown, R1, R2, R3, R4, R5>(this: Z, ...callbacks: [
    (this: Z, value: A) => R1,
    (this: Z, value: R1) => R2,
    (this: Z, value: R2) => R3,
    (this: Z, value: R3) => R4,
    (this: Z, value: R4) => R5
]): (this: Z, value: A) => R5;
declare function batch<Z, A extends unknown, R1, R2, R3, R4>(this: Z, ...callbacks: [
    (this: Z, value: A) => R1,
    (this: Z, value: R1) => R2,
    (this: Z, value: R2) => R3,
    (this: Z, value: R3) => R4
]): (this: Z, value: A) => R4;
declare function batch<Z, A extends unknown, R1, R2, R3>(this: Z, ...callbacks: [(this: Z, value: A) => R1, (this: Z, value: R1) => R2, (this: Z, value: R2) => R3]): (this: Z, value: A) => R3;
declare function batch<Z, A extends unknown, R1, R2>(this: Z, ...callbacks: [(this: Z, value: A) => R1, (this: Z, value: R1) => R2]): (this: Z, value: A) => R2;
declare function batch<Z, A extends unknown, R1>(this: Z, ...callbacks: [(this: Z, value: A) => R1]): (this: Z, value: A) => R1;
export { batch };
//# sourceMappingURL=batch.d.ts.map