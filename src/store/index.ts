import { combineReducers, createStore } from 'redux';
import { notesSlice } from './slices';

const app = combineReducers({
    notes: notesSlice.reducer,
});

export type RootState = ReturnType<typeof app>;

const store = createStore(
    app,
);

export default store;
