import {combineReducers} from "redux";
import {learnWordsReducer} from "./learnWordsReducer";
import {appReducer} from "./appReducer";
import {attractionsReducer} from "./attractionsReducer";

export const rootReducer = combineReducers({
    learnWords: learnWordsReducer,
    app: appReducer,
    attractions: attractionsReducer
})