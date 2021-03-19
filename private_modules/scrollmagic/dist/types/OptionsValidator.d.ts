import { ScrollMagicOptions, ScrollMagicOptionsInternal } from './Scene';
declare type ValidationRule<I, O> = {
    normalize?: (value: I) => O;
    check?: (value: O) => void | ((value: O) => void)[];
};
declare type ValidationRules<T extends {
    [K in keyof P]?: any;
}, P extends {
    [K in keyof T]: any;
}> = {
    [K in keyof T]?: ValidationRule<T[K], P[K]>;
};
export declare const validationRules: ValidationRules<Required<ScrollMagicOptions>, ScrollMagicOptionsInternal>;
declare class Validator {
    /**
     * A function that can be used to validate the properties of an object based on predefined rules.
     * @param options the object that should be validated
     * @param rules an object with matching keys, which defines how to normalize and or validate a property
     * @returns the normalized and checked object
     */
    static validate<O extends {
        [K in keyof I]: any;
    }, I extends {
        [K in keyof I]: any;
    }, K extends keyof I>(options: I, rules: ValidationRules<Required<I>, Required<O>>): O;
}
export default Validator;
//# sourceMappingURL=OptionsValidator.d.ts.map