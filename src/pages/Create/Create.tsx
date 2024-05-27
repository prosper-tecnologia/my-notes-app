import { CreateNoteForm } from "@/components";
import { createNote } from "@/store/slices";
import { Alert, Box } from "@mui/material";
import axios from "axios";
import { useId, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export function Create() {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const id = useId();

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100%" flexDirection="column">
            <CreateNoteForm
                isLoading={loading}
                submit={({title, body}) => {
                    setLoading(true);
                    axios.post('https://dummyjson.com/auth/posts/add', { title, body, userId: 1 }, {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem('token'),
                        }
                    })
                        .then(({ data }) => {
                            dispatch(createNote({ ...data, id }));
                            setSuccess('Nota criada com sucesso!');
                            setTimeout(() => setSuccess(''), 5000);
                        })
                        .catch((e) => {
                            console.error(e);
                            setError(e.message);
                        })
                        .finally(() => setLoading(false));
                }}
            />
            {success && <Alert severity="success">{success} <Link to="/notes">Ver Nota</Link></Alert>}
            {error && <Alert severity="error">{error}</Alert>}
        </Box>
    );
}
