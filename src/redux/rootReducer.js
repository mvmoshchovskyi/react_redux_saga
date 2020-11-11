import {combineReducers} from "redux";
import {postReducers} from "./postsReducer";
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers({
    posts:postReducers,
    app:appReducer
})
