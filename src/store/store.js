import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    return json;
});

export const users = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        addUser: (store, action) => {
            store.push(action.payload);
        },

        removeUser: (store, action) => {
            const idx = store.findIndex(x => x !== action.payload);

            if (idx !== -1) return;

            store.splice(idx, 1);
        },
    },
    extraReducers: {
        [fetchUsers.fulfilled]: (store, action) => {
            store.push(...action.payload);
        }
    }
});

export const lesson = createSlice({
    name: 'lesson',
    initialState: {
        lection: 10,
        topic: 'Redux Toolkit'
    },
    reducers: {},
});


export const counter = createSlice({
    name: 'counter',
    initialState: {
        counter: 20,
    },
    reducers: {
        increaseCounter: (store, action) => {
            store.counter += Number(action.payload);
        },

        decreaseCounter: (store, action) => {
            store.counter -= Number(action.payload);
        },
    },
});

export const store = configureStore({
    reducer: {
        counter: counter.reducer,
        users: users.reducer,
        lesson: lesson.reducer,
    },
});
