import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
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
            store.counter += Number(action.payload);
        },
        
        addUser: (store, action) => {
            store.users.push(action.payload);
        },
        
        removeUser: (store, action) => {
            store.users = store.users.filter(x => x !== action.payload);
        },
    },
    
    test123: {
        test321: 0
    }
});
