import { LoginForm } from "@/components/organisms/forms/LoginForm/LoginForm";
import { Box, CircularProgress } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate();
    const [loginFailed, setLoginFailed] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}
        >
            <LoginForm
                submit={({ username, password }) => {
                    setLoginFailed(false);
                    setLoading(true);

                    axios.post('https://dummyjson.com/auth/login', {
                        username, password
                    })
                        .then(({ data: { token } }) => {
                            localStorage.setItem('token', token);
                            navigate('/');
                        })
                        .catch((e) => {
                            console.log(e);
                            setLoginFailed(true);
                            setLoading(false);
                        });
                }}
                isLoading={loading}
            />

            {loading && <CircularProgress />}

            {loginFailed && <p style={{ color: 'red' }}>O login falhou</p>}
        </Box>
    );
}
