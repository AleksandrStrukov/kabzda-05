import {combineReducers, createStore} from "redux";
import ProfileReducer from "./PropfileReducer";
import DialogsReducer from "./DialogsReducer";

let reducers = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer
});


let store = createStore(reducers);

export default store;