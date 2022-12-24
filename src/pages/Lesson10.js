import { useDispatch, useSelector } from "react-redux";
import counterModule from "../store/modules/counter";
import usersModule, { fetchUsers } from "../store/modules/users";

const Lesson10 = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter);
    const topic = useSelector(state => state.lesson.topic);
    const users = useSelector(state => state.users);

    const increase = () => {
        dispatch(counterModule.actions.increaseCounter(10));
    }
    const decrease = () => {
        dispatch(counterModule.actions.decreaseCounter(10));
    }

    const addUser = () => {
        const user = {
            name: `Petya ${Date.now()}`,
            id: Date.now()
        }
        dispatch(usersModule.actions.addUser(user));
    }

    const removeUser = (id) => {
        dispatch(usersModule.actions.removeUser(id));
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
                <button onClick={() => dispatch(fetchUsers())}>Add users from fakeAPI</button>

                {users.length ?
                <div>
                    <h3>Users</h3>
                    {users.map(user =>
                        <div key={user.id} onClick={() => removeUser(user.id)}>{user.name}</div>)}
                </div>
                :
                <div>Нікого немає вдома</div>
                }
            </div>
        </div>
    )
}
export { Lesson10 }