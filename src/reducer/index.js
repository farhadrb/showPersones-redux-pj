import { combineReducers } from "redux";
import { personReducer } from "./person";
import { personsReducer } from "./persons";
import { showPersonsReducer } from "./showPersons";

export const reducers = combineReducers({
    persons:personsReducer,
    person:personReducer,
    showPerson:showPersonsReducer
})