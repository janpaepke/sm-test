import { Private, PrivateComputed, Public } from './Options';
export declare const sanitize: <T extends Partial<Public>>(options: T) => T;
export declare const compute: (options: Private) => PrivateComputed;
export declare const process: <T extends Partial<Public>>(newOptions: T, oldOptions: Private) => {
    sanitized: T;
    processed: Private;
};
//# sourceMappingURL=Options.processors.d.ts.map