import { ResponsiveAppBar } from "@/components/molecules";
import { Box, CircularProgress } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function App() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://dummyjson.com/auth/me', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        })
            .then(() => {
                setLoading(false);
                navigate('/notes');
            })
            .catch((e) => {
                console.error(e);
                navigate('/auth');
            });
    }, [navigate]);

    return (
        <Box height="100%">
            {loading ? <CircularProgress /> : (
                <main style={{ height: '100%' }}>
                    <ResponsiveAppBar />
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100%' }}>
                        <Outlet />
                    </Box>
                </main>
            )}
        </Box>
    );
}