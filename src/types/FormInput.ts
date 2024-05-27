import type { Control, RegisterOptions } from 'react-hook-form';

export interface FormInput {
    control: Control<any>;
    name: string;
    rules?: RegisterOptions;
}
