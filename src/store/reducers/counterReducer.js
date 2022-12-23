const defaultState = {
    counter: 20,
    lesson: {
        lection: 10,
        topic: 'Redux Toolkit'
    },
    users: []
}

const counterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "INCREASE_COUNTER":
            return {...state, counter: state.counter + Number(action.payload)}
        case "DECREASE_COUNTER":
            return {...state, counter: state.counter - Number(action.payload)}
        case "ADD_USER":
            return {...state, users: [...state.users, action.payload]}
        case "ADD_USERS":
            return {...state, users: [...state.users, ...action.payload]}
        case "REMOVE_USER":
            return {...state, users: state.users.filter(user => user.id !== action.payload)}
        default: 
            return state;
    }
}

export const addUserAction = (payload) => ({type: "ADD_USER", payload});
export const addUsersAction = (payload) => ({type: "ADD_USERS", payload});
export const removeUserAction = (payload) => ({type: "REMOVE_USER", payload});
export { counterReducer };