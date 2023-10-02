import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "./PropfileReducer";
import DialogsReducer from "./DialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./auth-Reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));
// window.store=store;

export default store;