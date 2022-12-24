import { configureStore } from '@reduxjs/toolkit';
import counter from './modules/counter';
import users from './modules/users';
import lesson from './modules/lesson';

export const store = configureStore({
    reducer: {
        counter: counter.reducer,
        users: users.reducer,
        lesson: lesson.reducer,
    },
});
