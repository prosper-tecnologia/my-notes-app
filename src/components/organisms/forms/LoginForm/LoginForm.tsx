import { useForm } from 'react-hook-form';

import { TextInput } from '@/components/atoms';
import { Box, Button } from '@mui/material';

interface Props {
    submit: (args: any) => void;
    isLoading?: boolean;
}

export function LoginForm({ submit, isLoading }: Props) {
    const { handleSubmit, control } = useForm<{ username: string; password: string }>({
        defaultValues: {
            username: '',
            password: '',
        }
    });

    return (
        <form>
            <TextInput
                name="username"
                control={control}
                rules={{ required: true }}
                label="Nome de usuário"
                style={{ marginBottom: 10 }}
            />

            <TextInput
                name="password"
                control={control}
                rules={{ required: true }}
                label="Senha"
                type="password"
                style={{ marginBottom: 10 }}
            />

            <Box sx={{
                display: 'flex',
                justifyContent: 'flex-end',
            }}>
                <Button
                    onClick={handleSubmit(submit)}
                    disabled={isLoading}
                >Login</Button>
            </Box>

        </form>
    );
}
