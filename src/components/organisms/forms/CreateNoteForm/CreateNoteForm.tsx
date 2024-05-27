import { TextInput } from "@/components/atoms";
import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";

export function CreateNoteForm({ isLoading, submit }: { isLoading?: boolean; submit: (args: any) => void }) {
    const { handleSubmit, control, reset } = useForm<{ title: string; body: string }>({
        defaultValues: {
            title: '',
            body: '',
        }
    });

    return (
        <form>
            <TextInput
                name="title"
                control={control}
                rules={{ required: true }}
                label="Título"
                style={{ marginBottom: 10 }}
            />

            <TextInput
                name="body"
                control={control}
                rules={{ required: true }}
                label="Nota"
                multiline
                rows={4}
                style={{ marginBottom: 10 }}
            />

            <Box sx={{
                display: 'flex',
                justifyContent: 'flex-end',
            }}>
                <Button
                    onClick={handleSubmit((data) => {
                        reset();
                        submit(data);
                    })}
                    disabled={isLoading}
                >
                    Salvar
                </Button>
            </Box>

        </form>
    );
}
