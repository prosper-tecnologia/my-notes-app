import { createSlice } from '@reduxjs/toolkit';

import type { Note } from '@/types';

export const notesSlice = createSlice({
    name: 'notes',
    initialState: [] as Note[],
    reducers: {
        createNote: (state, { payload }) => {
            const hasNote = !!state.find(({ id }) => id === payload.id);
            if (!hasNote) {
                state.push(payload);
            };
        },
        removeNote: (state, { payload: { id: noteId } }) => {
            return state.filter(({ id }) => id !== noteId);
        },
    }
});

export const { createNote, removeNote } = notesSlice.actions;
