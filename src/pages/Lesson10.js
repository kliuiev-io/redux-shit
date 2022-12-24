import { useDispatch, useSelector } from "react-redux";
import { counter as counterSlice } from "../store/store";
// import { fetchUsers } from "../store/actions/users";
// import { addUserAction, removeUserAction } from "../store/reducers/counterReducer";

const Lesson10 = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter);
    const topic = useSelector(state => state.counter.topic);
    const users = useSelector(state => state.counter.users);

    const increase = () => {
        dispatch(counterSlice.actions.increaseCounter(10));
        // dispatch({type: "INCREASE_COUNTER", payload: 10})
    }
    const decrease = () => {
        dispatch(counterSlice.actions.decreaseCounter(10));
        // dispatch({type: "DECREASE_COUNTER", payload: 10})
    }

    const addUser = () => {
        const user = {
            name: `Petya ${Date.now()}`,
            id: Date.now()
        }
        dispatch(counterSlice.actions.addUser(user));
        // dispatch(addUserAction(user));
    }

    const removeUser = (id) => {
        dispatch(counterSlice.actions.removeUser(id));
        // dispatch(removeUserAction(id));
    }

    return (
        <div>
            <div>
                Lesson: {topic}

                <br/>
                Counter: {counter}
                <button onClick={increase}>Increase counter</button>
                <button onClick={decrease}>Decrease counter</button>
            </div>

            <div>
                <button onClick={addUser}>Add user</button>
                <button onClick={() => dispatch(counterSlice.actions.fetchUsers())}>Add users from fakeAPI</button>

                {users.length ?
                <div>
                    <h3>Users</h3>
                    {users.map(user =>
                        <div id={user.id} onClick={() => removeUser(user.id)}>{user.name}</div>)}
                </div>
                :
                <div>Нікого немає вдома</div>
                }
            </div>
        </div>
    )
}
export { Lesson10 }