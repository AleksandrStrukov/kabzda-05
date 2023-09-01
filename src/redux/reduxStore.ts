import {combineReducers, createStore} from "redux";
import ProfileReducer from "./PropfileReducer";
import DialogsReducer from "./DialogsReducer";
import users from "../components/users/Users";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer,
    usersPage: usersReducer
});


let store = createStore(reducers);

export default store;