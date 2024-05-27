import { TextField, type TextFieldProps } from '@mui/material';
import { Controller } from 'react-hook-form';

import { FormInput } from '@/types';
import React from 'react';

interface Props extends FormInput, Omit<TextFieldProps, 'name'> {
    label: string;
    style?: React.CSSProperties;
    type?: React.InputHTMLAttributes<unknown>['type'];
}

export function TextInput({ label, control, name, style, type, rules = {}, ...props }: Props) {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({
                field: { onChange, value },
                fieldState: { error },
            }) => (
                <TextField
                    helperText={error ? error.message : null}
                    size="small"
                    error={!!error}
                    onChange={onChange}
                    value={value}
                    fullWidth
                    label={label}
                    variant="outlined"
                    style={style}
                    type={type}
                    {...props}
                />
            )}
        />
    );
}
