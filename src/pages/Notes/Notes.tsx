import { CircularProgress, Grid } from "@mui/material";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { createNote, removeNote } from "@/store/slices";

// import { useModal } from "@/hooks/useModal";
import { Card } from "@/components/molecules";
import { useModal } from "@/hooks/useModal";
import { RootState } from "@/store";
import { createNote, removeNote } from "@/store/slices";
import type { Note } from "@/types";

export function Notes() {
    const dispatch = useDispatch();
    const notes = useSelector((state: RootState) => state.notes);

    const [hasRequested, setHasRequested] = useState(false);

    const { show } = useModal();

    useEffect(() => {
        if (hasRequested || notes.length) {
            return;
        }

        axios.get('https://dummyjson.com/auth/posts?limit=6', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        })
            .then(({ data: { posts } }) => {
                posts.forEach(async (post: Note) => await dispatch(createNote(post)));
                setHasRequested(true);
            })
            .catch((e) => {
                console.error(e);
            });
    }, [dispatch, notes.length, hasRequested]);

    const renderPlaceholder = useCallback(() => {
        return !hasRequested ? <CircularProgress /> : (
            <p>Ainda não há notas...</p>
        );
    }, [hasRequested]);

    return (
        <Grid container spacing={1} style={{ width: '80%', minWidth: 320 }}>
            {!(notes?.length) ? renderPlaceholder() : notes.map((note: Note) => {
                return (
                    <Grid key={note.id} item xs={12} md={4} sm={6}>
                        <Card note={note} onShow={show} onRemove={(id) => dispatch(removeNote({ id }))} />
                    </Grid>
                );
            })}
        </Grid>
    );
};
