import { configureStore, createSlice } from '@reduxjs/toolkit';

export const counter = createSlice({
    name: 'counter',
    initialState: {
        counter: 20,
        lesson: {
            lection: 10,
            topic: 'Redux Toolkit'
        },
        users: []
    },
    reducers: {
        increaseCounter: (store, action) => {
            store.counter += Number(action.payload);
        },

        decreaseCounter: (store, action) => {
            store.counter -= Number(action.payload);
        },

        addUser: (store, action) => {
            store.users.push(action.payload);
        },

        removeUser: (store, action) => {
            store.users = store.users.filter(x => x !== action.payload);
        },

        fetchUsers: (store, action) => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => store.users.push(json))
        }
    },
})

export const store = configureStore({
    reducer: {
        counter: counter.reducer,
    },
});
